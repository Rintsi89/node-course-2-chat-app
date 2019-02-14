var expect = require("expect");

var {generateMessage, generateLocationMessage} = require("./message");


describe("generate message", () => {
	it("should generate correct message object", () => {

		var from = "Jen";
		var text = "Some message"
		var message = generateMessage(from, text);

		expect(message.createdAt).toBeA("number");
		expect(message).toInclude({from, text});
	});
});

describe("generateLocationMessage", () => {
	it("should generate correct location object", () => {

		var from = "Deb";
		var latitude = 15;
		var longitude = 15;
		var url = "https://www.google.com/maps?q=15,15"
		var location = generateLocationMessage(from, latitude, longitude);

		expect(location.createdAt).toBeA("number");
		expect(location).toInclude({from, url});

		// from is correct
		// created at is number
		// url on oikea, testaa laittamalla linkkiin numerot
	});
});