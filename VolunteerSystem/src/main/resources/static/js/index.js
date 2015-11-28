  $(document).ready(function() {
        
    $('#regForm').bootstrapValidator({
        // To use feedback icons, ensure that you use Bootstrap v3.1.0 or later
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        fields: {
            first_name: {
                validators: {
                    stringLenght: {
                        min:2
                    },
                    notEmpty: {
                        message: 'Please supply your first name'
                    },
                    
                }
            },
            last_name: {
                validators: {
                    stringLenght: {
                        min:2
                    },
                    notEmpty: {
                        message: 'Please supply your last name'
                    },
                    
                }
            },
             
            email: {
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
            
            
            zip: {
                validators: {
                    notEmpty: {
                        message: 'Please supply your zip code'
                    },
                    zipCode: {
                        
                        message: 'Please supply a vaild zip code'
                    }
                }
            },
            }
        });
        
});