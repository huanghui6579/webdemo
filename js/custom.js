                                

jQuery(function ($) { "use strict";
	
	/* ========================================================================= */
	/*	Page Preloader
	/* ========================================================================= */
	
	window.onload = function () {
		document.getElementById('loading-mask').style.display = 'none';
	}

	/* =========================================================================== */
	/*	Mobile menu item click toggle
	/* =========================================================================== */
	$(".navbar-nav li a").click(function(event) {
        $(".navbar-collapse").collapse('hide');
    });

	/* =========================================================================== */
	/*	FitVids js
	/* =========================================================================== */
	
	// $(".media-wrapper").fitVids();

	
	/* ========================================================================= */
	/*	Nice Scroll - Custom Scrollbar
	/* ========================================================================= */

	var nice = $("html").niceScroll({
		cursorborderradius: 0,
		cursorwidth: "8px",
		cursorfixedheight: 150,
		cursorcolor: "#E23B37",
		zindex: 9999,
		cursorborder: 0,
	});

	var navHeight = $("#navigation").outerHeight();


	/* ========================================================================= */
	/*	Scroll Up / Back to top
	/* ========================================================================= */
	
	$(window).scroll(function() {
		if ($(window).scrollTop() > 400) {
			$("#scrollUp").fadeIn(200);
		} else {
			$("#scrollUp").fadeOut(200);//
		}

		if ($(window).scrollTop() > navHeight) {
			$("#navigation").addClass("box-shadow");
		} else {
			$("#navigation").removeClass("box-shadow");
		}
	});
	
	$('#scrollUp').click(function() {
		$('html, body').stop().animate({
			scrollTop : 0
		}, 1500, 'easeInOutExpo');
	});


	/* ========================================================================= */
	/*	Post image slider
	/* ========================================================================= */
	
	/*$("#post-thumb, #gallery-post").owlCarousel({

		navigation : true,
		pagination : false,
		slideSpeed : 800,
		autoHeight : true,
		paginationSpeed : 800,
		singleItem:true,
		navigationText : ["<i class='fa fa-angle-left fa-2x'></i>","<i class='fa fa-angle-right fa-2x'></i>"]

	});*/
	
	$("#features").owlCarousel({
		navigation : true,
		pagination : true,
		slideSpeed : 500,
		singleItem : true,
		autoPlay: false,
		stopOnHover: true,
		paginationSpeed : 500,
		rewindSpeed:500,
		navigationText : ["<i class='fa fa-angle-left fa-5x'></i>","<i class='fa fa-angle-right fa-5x'></i>"],
		beforeMove: function(elem) {
			var prevPosition = this.prevItem;
			var curPosition = this.currentItem;
			var findResult = $(elem).find(".features-item");
			var prevObj = findResult.eq(prevPosition);
			var curObj = findResult.eq(curPosition);
			prevObj.children(".feature-content").removeClass("animated");
			
		},
		afterMove: function(elem) {
			var prevPosition = this.prevItem;
			var curPosition = this.currentItem;
			var findResult = $(elem).find(".features-item");
			var curObj = findResult.eq(curPosition);
			var prevObj = findResult.eq(prevPosition);
			var curContent = curObj.children(".feature-content");
			curContent.removeClass("show").addClass("hide");
			setTimeout(function() {
				prevObj.children(".feature-content").removeClass("show").addClass("hide");
				curContent.removeClass("hide").addClass("show animated");
			}, 600);
		}

	});

	/* ========================================================================= */
	/*	Menu item highlighting
	/* ========================================================================= */


	$("#navigation").sticky({
		topSpacing : 0
	});
	
	$('#nav').onePageNav({
		currentClass: 'current',
		changeHash: false,
		scrollSpeed: 1500,
		scrollThreshold: 0.5,
		filter: '',
		easing: 'easeInOutExpo'
	});
	

	/* ========================================================================= */
	/*	Fix Slider Height
	/* ========================================================================= */	

	/*var slideHeight = $(window).height();
	
	$('#slitSlider, .sl-slider, .sl-content-wrapper').css('height',slideHeight);

	$(window).resize(function(){'use strict',
		$('#slitSlider, .sl-slider, .sl-content-wrapper').css('height',slideHeight);
	});*/
	
	

	/* ========================================================================= */
	/*	Timer count
	/* ========================================================================= */

	(function() {
		var count = {
		  initialized : false,
		  initialize : function() {
			if (this.initialized)
			  return;
			this.initialized = true;
			this.build();
		  },
		  build : function() {
			this.animations();
		  },
		  animations : function() {
			// Count To
			$(".counters-item [data-to]").each(function() {
			  var $this = $(this);
			  $this.appear(function() {
				$this.countTo({});
			  }, {
				accX : 0,
				accY : -150
			  });
			});
		  },
		};
		count.initialize();
	})();


	/* ========================================================================= */
	/*	Skills Chart
	/* ========================================================================= */

	$(".chart").appear(function () {
		$(".chart").easyPieChart({
			easing: "easeOutBounce",
			barColor: "#6CB670",
			size: "150",
			lineWidth: 15,
			animate: 2e3,
			onStep: function (e, t, n) {
				$(this.el).find(".percent").text(Math.round(n))
			}
		})
	});
	
	
	/* ========================================================================= */
	/*	Twitter Feed
	/* ========================================================================= */
	
	/*$(".tweet").twittie({
        dateFormat: "%b. %d, %Y",
        template: "{{tweet}}",
        count: 1
    });*/


	/* ========================================================================= */
	/*	Portfolio Filtering Hook
	/* =========================================================================  */

	$('#og-grid').mixItUp(); // Portfolio filter

	// Grid.init(); //Portfolio Grid Expand
	
	
	/* ========================================================================= */
	/*	Testimonial Carousel
	/* =========================================================================  */
 
	//Init the carousel
	$("#testimonials").owlCarousel({
		slideSpeed: 500,
		paginationSpeed: 500,
		singleItem: true,
		pagination : true,
		transitionStyle : "backSlide"
	});


	/* ========================================================================= */
	/*   Contact Form Validating
	/* ========================================================================= */


	$('#contact-submit').click(function (e) {

		//stop the form from being submitted
		e.preventDefault();

		/* declare the variables, var error is the variable that we use on the end
		to determine if there was an error or not */
		var error = false;
		var name = $('#name').val();
		var email = $('#email').val();
		var subject = $('#subject').val();
		var content = $('#content').val();

		/* in the next section we do the checking by using VARIABLE.length
		where VARIABLE is the variable we are checking (like name, email),
		length is a JavaScript function to get the number of characters.
		And as you can see if the num of characters is 0 we set the error
		variable to true and show the name_error div with the fadeIn effect. 
		if it's not 0 then we fadeOut the div( that's if the div is shown and
		the error is fixed it fadesOut. 
		
		The only difference from these checks is the email checking, we have
		email.indexOf('@') which checks if there is @ in the email input field.
		This JavaScript function will return -1 if no occurrence have been found.*/
		if (name.length == 0) {
			var error = true;
			$('#name').css("border-color", "#D8000C");
		} else {
			$('#name').css("border-color", "#666");
		}
		if (email.length == 0 || email.indexOf('@') == '-1') {
			var error = true;
			$('#email').css("border-color", "#D8000C");
		} else {
			$('#email').css("border-color", "#666");
		}
		if (subject.length == 0) {
			var error = true;
			$('#subject').css("border-color", "#D8000C");
		} else {
			$('#subject').css("border-color", "#666");
		}
		if (content.length == 0) {
			var error = true;
			$('#content').css("border-color", "#D8000C");
		} else {
			$('#content').css("border-color", "#666");
		}

		//now when the validation is done we check if the error variable is false (no errors)
		if (error == false) {
			//disable the submit button to avoid spamming
			//and change the button text to Sending...
			$('#contact-submit').attr({
				'disabled': 'false',
				'value': '正在提交...'
			});

			/* using the jquery's post(ajax) function and a lifesaver
			function serialize() which gets all the data from the form
			we submit it to send_email.php */
			/*var ipApi = 'http://pv.sohu.com/cityjson?ie=utf-8&callback=?&_='+Math.random(); 
			$.ajax({
				url: ipApi,
				type:'GET', 
				dataType: "JSONP  text/json",  // 处理Ajax跨域问题,
				success: function(result) {
					console.info(result);
				}
			});*/
            var url = 'http://chaxun.1616.net/s.php?type=ip&output=json&callback=?&_='+Math.random(); 
            // var url = 'http://pv.sohu.com/cityjson?ie=utf-8&callback=?&_='+Math.random(); 
            var jqxhr = $.getJSON(url, function(data){
    	    }).complete(function(data) {
    	    	var ip = data.responseJSON.Ip;
    	    	var subUrl = "http://www.ibaixin.net/chatapi/api/home/submitComment";
    	    	var paramObj = $("#contact-form").serializeObject();
    	    	paramObj.ip = ip;
    	    	$.ajax({
    	    		type: "POST",
    	    		url: subUrl,
    	    		contentType: "application/json;charset=UTF-8",
    	    		dataType: "json",
    	    		data: JSON.stringify(paramObj),
    	    		success: function(data) {
    	    			if (data.resultCode == 100) {	//成功
    	    				//if the mail is sent remove the submit paragraph
    	    				$('#cf-submit').remove();
    	    				//and show the mail success div with fadeIn
    	    				$('#mail-success').fadeIn(500);
    	    			} else {
    	    				//show the mail failed div
    	    				$('#mail-fail').fadeIn(500);
    	    				//re enable the submit button by removing attribute disabled and change the text back to Send The Message
    	    				$('#contact-submit').removeAttr('disabled').attr('value', '提交');
    	    			}
    	    		}
    	    		
    	    	}).fail(function() {
    	    		$('#contact-submit').removeAttr('disabled').attr('value', '提交失败，请稍候再试');
    	    	});
    	    });                    
			/*
			//ipApi$("#contact-form").serialize(), function (result) {
				//console.info(result);
				//and after the ajax request ends we check the text returned
				/*if (result == 'sent') {
					//if the mail is sent remove the submit paragraph
					$('#cf-submit').remove();
					//and show the mail success div with fadeIn
					$('#mail-success').fadeIn(500);
				} else {
					//show the mail failed div
					$('#mail-fail').fadeIn(500);
					//re enable the submit button by removing attribute disabled and change the text back to Send The Message
					$('#contact-submit').removeAttr('disabled').attr('value', '提交');
				}*/
			//}
		}
	});



	/* ========================================================================= */
	/*	Google Map Customization
	/* =========================================================================  */

	/*function initialize() {

		var myLatLng = new google.maps.LatLng(22.333851, 91.812256);

		var roadAtlasStyles = [{
			"featureType": "landscape",
			"elementType": "geometry.fill",
			"stylers": [{
				"color": "#2F3238"
			}]
		}, {
			"elementType": "labels.text.fill",
			"stylers": [{
				"color": "#FFFFFF"
			}]
		}, {
			"elementType": "labels.text.stroke",
			"stylers": [{
				"visibility": "off"
			}]
		}, {
			"featureType": "road",
			"elementType": "geometry.fill",
			"stylers": [{
				"color": "#50525f"
			}]
		}, {
			"featureType": "road",
			"elementType": "geometry.stroke",
			"stylers": [{
				"visibility": "on"
			}, {
				"color": "#808080"
			}]
		}, {
			"featureType": "poi",
			"elementType": "labels",
			"stylers": [{
				"visibility": "off"
			}]
		}, {
			"featureType": "transit",
			"elementType": "labels.icon",
			"stylers": [{
				"visibility": "off"
			}]
		}, {
			"featureType": "poi",
			"elementType": "geometry",
			"stylers": [{
				"color": "#808080"
			}]
		}, {
			"featureType": "water",
			"elementType": "geometry.fill",
			"stylers": [{
				"color": "#3071a7"
			}, {
				"saturation": -65
			}]
		}, {
			"featureType": "road",
			"elementType": "labels.icon",
			"stylers": [{
				"visibility": "off"
			}]
		}, {
			"featureType": "landscape",
			"elementType": "geometry.stroke",
			"stylers": [{
				"color": "#bbbbbb"
			}]
		}];

		var mapOptions = {
			zoom: 14,
			center: myLatLng,
			disableDefaultUI: true,
			scrollwheel: false,
			navigationControl: false,
			mapTypeControl: false,
			scaleControl: false,
			draggable: false,
			mapTypeControlOptions: {
				mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'roadatlas']
			}
		};

		var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);


		var marker = new google.maps.Marker({
			position: myLatLng,
			map: map,
			icon: 'img/location-icon.png',
			title: '',
		});


		google.maps.event.addListener(marker, 'click', function () {
			infowindow.open(map, marker);
		});

		var styledMapOptions = {
			name: 'US Road Atlas'
		};

		var usRoadMapType = new google.maps.StyledMapType(
			roadAtlasStyles, styledMapOptions);

		map.mapTypes.set('roadatlas', usRoadMapType);
		map.setMapTypeId('roadatlas');
	}

	google.maps.event.addDomListener(window, "load", initialize);*/


});

/* ========================================================================= */
/*	On scroll fade/bounce fffect
/* ========================================================================= */

	wow = new WOW({
		animateClass: 'animated',
		offset: 120
	});
	wow.init();
	

/* ========================================================================= */
/*	Home page Slider
/* ========================================================================= */

/*$(function() {

	var Page = (function() {

		var $navArrows = $( '#nav-arrows' ),
			$nav = $( '#nav-dots > span' ),
			slitslider = $( '#slitSlider' ).slitslider( {
			
			    speed : 1600,
			
				onBeforeChange : function( slide, pos ) {

					$nav.removeClass( 'nav-dot-current' );
					$nav.eq( pos ).addClass( 'nav-dot-current' );

				}
			} ),

			init = function() {
				initEvents();				
			},
			initEvents = function() {
				// add navigation events
				$navArrows.children( ':last' ).on( 'click', function() {
					slitslider.next();
					return false;
				} );

				$navArrows.children( ':first' ).on( 'click', function() {					
					slitslider.previous();
					return false;
				});

				$nav.each( function( i ) {				
					$( this ).on( 'click', function( event ) {						
						var $dot = $( this );						
						if( !slitslider.isActive() ) {
							$nav.removeClass( 'nav-dot-current' );
							$dot.addClass( 'nav-dot-current' );						
						}
						
						slitslider.jump( i + 1 );
						return false;
					
					});					
				});
			};
			return { init : init };

	})();

	Page.init();

});*/


/* ========================================================================= */
/*	Parallax Sections
/* ========================================================================= */


"use strict";

function parallaxInit() {
	// $('#counter').parallax("50%", 0.3);
	// $('#team-skills').parallax("50%", 0.3);
	// $('#twitter-feed').parallax("50%", 0.3);
	// $('#testimonial').parallax("50%", 0.3);
}

$(window).bind("load", function () {
    //parallaxInit()
});

$.fn.serializeObject = function()
{
    var o = {};
    var a = this.serializeArray();
    $.each(a, function() {
        if (o[this.name] !== undefined) {
            if (!o[this.name].push) {
                o[this.name] = [o[this.name]];
            }
            o[this.name].push(this.value || '');
        } else {
            o[this.name] = this.value || '';
        }
    });
    return o;
};
                            