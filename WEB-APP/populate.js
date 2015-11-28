var User = require("./routes/userController");

var _admin = {};

_admin.body = {
	username: "raghav",
	email   : "raghav@piqube.com",
	password: "supersaiyan",
	phoneNumber: "9500521109",
	firstName: "Raghav",
	lastName: "G"
}

User.createAccount(_admin);
