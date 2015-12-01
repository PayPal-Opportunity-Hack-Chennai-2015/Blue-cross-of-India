/**
 * API Server for Blue Cross of India's app for multi-channel rescue system, adoption &
 * volunteer management
 * 
 * Developed at Paypal Opportunity Hack 2015 Chennai 36hr hackathon
 *
 * @author Team Blue Cross of India
 *
 */

var server = require('./app');

function boot() {
	server.startServer();
}

boot();