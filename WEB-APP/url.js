var session     = require("./lib/session-handler");
var user        = require("./routes/userController.js");


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
	//userRouter.post('/create');

	app.use('/user', userRouter);

}

