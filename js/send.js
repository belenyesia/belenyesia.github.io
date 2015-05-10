$(document).ready(

	function() {

//	    $('#messageSentDialog').dialog();
//	    $('#messageFailureDialog').dialog();            		

		function sendMail(email, name, msg){
			var m = new mandrill.Mandrill('fHtk1BA8VN7J8Nu-NlZYlA'); // This will be public
	        var response = m.messages.send({
	            "message": {
	                "from_email": "eric.vautier@gmail.com",
	                "from_name": "Eric",
	                "to":[{"email": "belenyesiannamaria@gmail.com", "name": name}], // Array of recipients
	                "subject": "Piano Voice Website Contact Form",
	                "text": msg // Alternatively, use the "html" key to send HTML emails rather than plaintext
	            }},
	            function (response) {
	            	if (response[0].status != 'sent') {
//	                    $('#messageFailureDialog').dialog('show');  
	            		alert("Your message could not be sent. Please try again in a moment. Reason: " + error);
	            	} else {
//	                    $('#messageSentDialog').dialog('show');
	            		alert("Thank you! Your message was sent successfully. I will be in touch shortly!");
	                    $("#name").val(''); // reset field after successful submission
	                    $("#email").val(''); // reset field after successful submission
	                    $("#message").val(''); // reset field after successful submission            		
	            	}
	            }
	        );
	    }
	        
	    $("#contact_form").submit(function(e)
	    {
	    	e.preventDefault();
	    	
	        var email = $("#email").val(); // get email field value
	        var name = $("#name").val(); // get name field value
	        var msg = $("#message").val(); // get message field value
	        
	        sendMail(email, name, msg);
	        
	    });

		
	}

);				
