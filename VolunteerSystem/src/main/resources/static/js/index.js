  $(document).ready(function() {
        
    $('#regForm').bootstrapValidator({
        // To use feedback icons, ensure that you use Bootstrap v3.1.0 or later
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        fields: {
            firstName: {
                validators: {
                    stringLenght: {
                        min:2
                    },
                    notEmpty: {
                        message: 'Please supply your first name'
                    },
                    
                }
            },
            lastName: {
                validators: {
                    stringLenght: {
                        min:2
                    },
                    notEmpty: {
                        message: 'Please supply your last name'
                    },
                    
                }
            },
             
            emailId: {
                validators: {
                    notEmpty: {
                        message: 'Please supply your email address'
                    },
                    emailAddress: {
                        message: 'Please supply a valid email address'
                    }
                }
            },
            
            address: {
                validators: {
                     stringLength: {
                        min: 8,
                    },
                    notEmpty: {
                        message: 'Please supply your street address'
                    }
                }
            },

            pincode: {
                validators: {
                	numeric: {
                		message: 'The value is not a number'
                	},
                    notEmpty: {
                        message: 'Please supply your zip code'
                    },
                    stringLength: {
                        max: 6
                    }
                }
            }, 
            mobileNumber: {
                validators: {
                	stringLength: {
                		max :11
                	},
                    notEmpty: {
                        message: 'Please supply your mobile number'
                    },
                }
            },
            landPhone: {
                validators: {
                	stringLength: {
                		max :11
                	},
                }
            },
            emergencyNumber : {
            	validators: {
                	stringLength: {
                		max :11
                	},
                    notEmpty: {
                        message: 'Please supply your emergency mobile number'
                    },
                }
            }
            }
        });
        
});