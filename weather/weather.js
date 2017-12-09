const request = require("request");

const getWeather = (longitude, latitude, callback) => {
	request(
		{
			url: `https://api.darksky.net/forecast/[YOUR API CODE GOES HERE]/${longitude},${latitude}?units=si`,
			json: true
		},
		(error, response, body) => {
			if (error) {
				callback("Unable to connect to DarkSky API servers.");
			} else if (response.statusCode === 400) {
				callback("Unable to fetch weather.");
			} else {
				callback(undefined, {
					temperature: body.currently.temperature,
					forecast: body.daily.data[0].summary
				});
			}
		}
	);
};

module.exports.getWeather = getWeather;
