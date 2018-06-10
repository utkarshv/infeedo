module.exports = {
'apiResponder':(req, res, responseMessage, responseCode, data)=>{
	return res.json({responseCode:responseCode, responseMessage:responseMessage, data:data})
}}