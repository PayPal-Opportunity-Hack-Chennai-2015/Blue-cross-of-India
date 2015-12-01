# Blue-cross-of-India

Rescue a stray animal by building an interactive multi-channel system that will allow users to intimate Blue Cross about animals in distress, and aid the Blue Cross to systematically  &amp; sequentially ensure that all the animals receive help

# Screenshots

![alt tag](SCREENSHOTS/home.png?raw=true)
![alt tag](SCREENSHOTS/register.png?raw=true)

# Building 

### API Server

Install Dependencies

`$ npm install`

Start the node app

`$ node boot`

### Smartphone App

`$ npm install -g cordova ionic`

Update the API Server URL in `/www/js/controller.js`

`$ cd MOBILE-APP/bluecross-app`

Make sure you have your phone connected / emulator running

`$ ionic run` 

To run on browser (Recommended Chrome)

`$ ionic serve`
