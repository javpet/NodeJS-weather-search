// Darksky API 1bb16ddc18dc2c0c7e27c52990a5a0ab
const request = require("request");

const getWeather = (longitude, latitude, callback) => {
	request(
		{
			url: `https://api.darksky.net/forecast/1bb16ddc18dc2c0c7e27c52990a5a0ab/${longitude},${latitude}?units=si`,
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
