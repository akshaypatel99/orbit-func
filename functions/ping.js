exports.handler = function (event, context, callback) {
	return callback(null, {
		statusCode: 200,
		body: JSON.stringify({ 'Hello from a serverless function!': 'world' }),
	});
};
