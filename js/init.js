/*-----------------------------------------------------------------------------------
/*
/* Init JS
/*
-----------------------------------------------------------------------------------*/

 jQuery(document).ready(function() {


/*----------------------------------------------------*/
/*	Flexslider
/*----------------------------------------------------*/
   $('#intro-slider').flexslider({
      animation: 'fade',
      controlNav: false,
   });

/*----------------------------------------------------*/
/*	gmaps
------------------------------------------------------*/

   var map;

   // main directions
   map = new GMaps({
      el: '#map', lat: 52.384600, lng: 4.886394, zoom: 14, zoomControl : true,
      zoomControlOpt: { style : 'SMALL', position: 'TOP_LEFT' }, panControl : false, scrollwheel: false
   });

   // add address markers
   map.addMarker({ lat: 52.384600, lng: 4.886394, title: 'Studio',
   infoWindow: { content: '<p>2πR Greek Dances<br><a href="http://kaouthar.com/contact/dance-studio-for-rent-in-amsterdam/">Studio</a><br>Tussen de bogen 46, Amsterdam</p>' } });

/*----------------------------------------------------*/
/*	contact form
------------------------------------------------------*/

   $('form#contactForm button.submit').click(function() {

      $('#image-loader').fadeIn();

      var contactName = $('#contactForm #contactName').val();
      var contactEmail = $('#contactForm #contactEmail').val();
      var contactSubject = $('#contactForm #contactSubject').val();
      var contactMessage = $('#contactForm #contactMessage').val();

      var data = 'contactName=' + contactName + '&contactEmail=' + contactEmail +
               '&contactSubject=' + contactSubject + '&contactMessage=' + contactMessage;

      $.ajax({

	      type: "POST",
	      url: "inc/sendEmail.php",
	      data: data,
	      success: function(msg) {

            // Message was sent
            if (msg == 'OK') {
               $('#image-loader').fadeOut();
               $('#message-warning').hide();
               $('#contactForm').fadeOut();
               $('#message-success').fadeIn();
            }
            // There was an error
            else {
               $('#image-loader').fadeOut();
               $('#message-warning').html(msg);
	            $('#message-warning').fadeIn();
            }

	      }

      });

      return false;

   });


});
