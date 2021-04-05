import getConfig from 'next/config'
// using Twilio SendGrid's v3 Node.js Library
// https://github.com/sendgrid/sendgrid-nodejs
import sgMail from '@sendgrid/mail'

const { serverRuntimeConfig } = getConfig()
sgMail.setApiKey(serverRuntimeConfig.sendgridApiKey)
console.log('>>> serverRuntimeConfig', serverRuntimeConfig)

function sendEmail(replyTo, name, message) {
	const msg = {
		to: 'gonzalosoler@gmail.com', // Change to your recipient
		from: 'gonzalosoler@gmail.com', // Change to your verified sender
		subject: 'Contacto desde el formulario',
		text: `Nombre: ${name}, Mensaje: ${message}`,
		html: `Nombre<br />${name}<br /><br />Mensaje<br />${message}`,
		reply_to: { email: replyTo, name },
	}
	return sgMail.send(msg)
}
// check for every missing prop before returning the error and inform which ones are missing
// TODO: check if message is a string and has a length between `min` and `max`
// TODO: check if name is a string and has a length between `min` and `max`
// TODO: en el then, devolver una respuesta satisfactoria
// TODO: en el catch, devolver un error con el mensaje y statusCode correspondiente

// TODO: check if replyTo is actually an email address
function validateEmail(mail) {
	if (
		/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
			mail
		)
	) {
		return true
	}
	return false
}
function validateMessage(message) {
	if (message.length >= 10 && message.length <= 140) {
		return true
	}
	return false
}
function validateName(name) {
	if (name.length >= 3 && name.length <= 15) {
		return true
	}
	return false
}
function validatePhone(phone) {
	//validar phone
	let normalizedPhone = phone.replace(/\s|\++/g, '').trim()
	if (!/\d+$/.test(normalizedPhone)) {
		return false
	}
	if (normalizedPhone.length > 5 && normalizedPhone.length < 15) {
		return true
	}
	return false
}

function normalizeEmail(mail) {
	let normalizedMail = mail.toLowerCase().replace(/\s+/g, '').trim()

	return normalizedMail
}
function normalizeName(name) {
	let normalizedName = name.toLowerCase().trim()

	return normalizedName
}

function normalizePhone(phone) {
	let normalizedPhone = phone.replace(/\s|\++/g, '').trim()

	if (normalizedPhone.slice(0, 2) == '54') {
		return normalizedPhone.substring(2)
	}

	return normalizedPhone
}
export default function mailHandler(req, res) {
	res.setHeader('Content-Type', 'application/json')
	// TODO: change the if for a switch
	// Cases: content type || default error
	//		 Cases: POST || GET ||
	let missingReqProps = []
	let errorsValidateList = []
	let formData = {}
	// TODO: if content-type is not json, return error

	switch (req.method) {
		case 'POST':
			switch (req.headers['content-type']) {
				case 'application/json':
					let requestProps = [
						{
							type: 'replyTo',
							required: {
								error: 'replyTo email is required',
							},
							validate: {
								error:
									'You have entered an invalid email address!',
								validator: validateEmail,
							},
							normalize: {
								normalizer: normalizeEmail,
							},
						},
						{
							type: 'message',
							required: {
								error: 'message is required',
							},
							validate: {
								error:
									'You have entered an invalid email address!',
								validator: validateMessage,
							},
						},
						{
							type: 'name',
							// if the field is not required (like phone), then ommit this prop
							required: {
								error: 'name is required',
							},
							// if the field does not need validation, then ommit this prop
							validate: {
								error: 'Check your name',
								validator: validateName,
							},
							// if the field does not need normalization, then ommit this prop
							normalize: {
								normalizer: normalizeName,
							},
						},
						{
							type: 'phone',
							validate: {
								error: 'incorrect phone number',
								validator: validatePhone,
							},
							normalize: {
								normalizer: normalizePhone,
							},
						},
					]
					//TODO:
					// 1: CHECK MISSING PROPS      // Check for missing required props in the request body.
					// 2: SHOW MISSING PROPS ERROR // if there are missing props, set statusCode 400 and show error.
					// 3: VALIDATION 		   	   // if props are required, then validate them.
					// 4: SHOW VAL ERROR 		   // if there are validation errors, set statusCode 400 and show error.
					// 5: NORMALIZATION 		   // if there are no validation errors, normalize if needed and send email.

					// 1: CHECK MISSING PROPS
					requestProps
						.filter((prop) => prop.required)
						.forEach((requestedProp) => {
							if (!req.body.hasOwnProperty(requestedProp.type)) {
								missingReqProps.push({
									error: requestedProp.error,
								})
							}
						})
					// 2: SHOW MISSING PROPS ERROR
					if (missingReqProps.length > 0) {
						console.log(missingReqProps)
						res.statusCode = 400
						return res.end(JSON.stringify(...missingReqProps))
					}

					// 3: VALIDATION
					// filter requestProps by required, then for each requestedProp use validator
					// if validator returns false then push validate error to errorsValidateList

					requestProps
						.filter((prop) => prop.validate)
						.forEach((requestedProp) => {
							if (
								requestedProp.validate.validator(
									req.body[requestedProp.type]
								) === false
							) {
								errorsValidateList.push({
									error: requestedProp.validate.error,
								})
							}
						})

					// 4: SHOW VAL ERROR
					// validate message, name and email if validation OK then continue
					if (errorsValidateList.length > 0) {
						console.log(errorsValidateList)
						res.statusCode = 400
						return res.end(
							JSON.stringify({ ...errorsValidateList })
						)
					}

					// 5: NORMALIZATION

					requestProps
						.filter((prop) => prop.normalize)
						.forEach((requestedProp) => {
							req.body[
								requestedProp.type
							] = requestedProp.normalize.normalizer(
								req.body[requestedProp.type]
							)
						})

					// send Email
					formData = { ...req.body }
					console.log('formData: ', formData)
					return sendEmail(
						req.body.replyTo,
						req.body.name,
						req.body.message
					)
						.then(() => {
							res.statusCode = 200
							return res.end(JSON.stringify({ msg: 'ok' }))
						})
						.catch((error) => {
							console.log('>>> error', error)
							res.statusCode = 400
							return res.end(
								JSON.stringify({
									error: 'email could not be sent',
								})
							)
						})
			}

			break
		case 'GET':
			res.statusCode = 200
			return res.end(JSON.stringify({ msg: 'Holaaa GET' }))

		default:
			res.statusCode = 404
			return res.end(JSON.stringify([{ error: 'endpoint not found' }]))
	}
}
/*
REQUEST:
GET /api/mail HTTP/1.1
Host: localhost:3000

RESPONSE:
HTTP/1.1 200 OK
Date: Mon, 23 May 2005 22:38:34 GMT
Content-Type: application/json; charset=UTF-8
Content-Length: 155
Last-Modified: Wed, 08 Jan 2003 23:11:55 GMT
Server: Apache/1.3.3.7 (Unix) (Red-Hat/Linux)
ETag: "3f80f-1b6-3e1cb03b"
Accept-Ranges: bytes
Connection: close

{"message":"Hello world!"}
*/

/*
HTTP Methods for CRUD operations:
POST		Creates a resource
GET			Read a resource
PUT			Updates a resource
DELETE	Deletes a resource
*/

/*
REQUEST:
POST /api/mail HTTP/1.1
Host: localhost:3000
Content-Type: application/json

{"recipient": "lucassoler2@gmail.com", "message": "Hola Bel, necesito terapia!"}

RESPONSE:
HTTP/1.1 200 OK
Date: Mon, 23 May 2005 22:38:34 GMT
Content-Type: application/json; charset=UTF-8
Content-Length: 155
Last-Modified: Wed, 08 Jan 2003 23:11:55 GMT
Server: Apache/1.3.3.7 (Unix) (Red-Hat/Linux)
ETag: "3f80f-1b6-3e1cb03b"
Accept-Ranges: bytes
Connection: close

{"message":"Hello world!""}
*/
