var session     = require("./lib/session-handler");
var user        = require("./routes/userController");
var complaint   = require("./routes/caseController");
var animal      = require("./routes/animalController.js");

var path        = require('path');
var multer      = require('multer');
var upload      = multer({ dest: path.join(__dirname, 'static/uploads')  })

var redirectAuth = function(req,res, next) {
	if(! (req.body.token || req.query.token || req.headers['x-access-token'])  ) 
		return next()

	res.status(403);
	res.json({ "error": "Forbidden Request"  });
}

module.exports = function(express, app) {

	// =============================================
	// ========== INDEX ROUTER =====================
	// =============================================

	var indexRouter = express.Router();

	indexRouter.get('/ping', function(req,res) {
		res.send({ 
			status: "success",
			msg   : "pong"
		});
	});

	app.use('/', indexRouter);

	// =============================================
	// ========== USER ROUTER =====================
	// =============================================

	var userRouter = express.Router();

	userRouter.get('/', session.isAuthenticated);
	userRouter.post('/login', user.signIn, session.signIn);

	app.use('/user', userRouter);

	// =============================================
	// ========== COMPLAINT ROUTER =====================
	// =============================================

	var caseRouter = express.Router();
	caseRouter.post('/create', upload.single('pic'), complaint.createComplaint);

	app.use('/complaint', caseRouter);

	// =============================================
	// ========== ANIMAL ROUTER =====================
	// =============================================

	var AnimalRouter = express.Router();
	AnimalRouter.get('/', animal.getAnimals);

	app.use('/animal', AnimalRouter);
}

