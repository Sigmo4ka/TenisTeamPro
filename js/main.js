

(function () {

  var bv = new Bideo();
  bv.init({
    // Video element
    videoEl: document.querySelector('#background_video'),

    // Container element
    container: document.querySelector('body'),

    // Resize
    resize: true,

    autoplay: true,

    isMobile: window.matchMedia('(max-width: 768px)').matches,

    playButton: document.querySelector('#play'),
    pauseButton: document.querySelector('#pause'),

    // Array of objects containing the src and type
    // of different video formats to add
    src: [
      {
        src: 'bg2.mp4',
        type: 'video/mp4'
      },
      {
        src: 'bg2.webm',
        type: 'video/webm;codecs="vp8, vorbis"'
      }
    ],

  });
}());

// (function () {

//   var bv = new Bideo();
//   bv.init({
//     // Video element
//     videoEl: document.querySelector('#background_video2'),

//     // Container element
//     container: document.querySelector('body'),

//     // Resize
//     resize: true,

//     autoplay: true,

//     isMobile: window.matchMedia('(max-width: 768px)').matches,

//     playButton: document.querySelector('#play'),
//     pauseButton: document.querySelector('#pause'),

//     // Array of objects containing the src and type
//     // of different video formats to add
//     src: [
//       {
//         src: 'bg2.mp4',
//         type: 'video/mp4'
//       },
//       {
//         src: 'bg2.webm',
//         type: 'video/webm;codecs="vp8, vorbis"'
//       }
//     ],

//   });
// }());


// (function () {

//   var bv = new Bideo();
//   bv.init({
//     // Video element
//     videoEl: document.querySelector('#background_video3'),

//     // Container element
//     container: document.querySelector('body'),

//     // Resize
//     resize: true,

//     autoplay: true,

//     isMobile: window.matchMedia('(max-width: 768px)').matches,

//     playButton: document.querySelector('#play'),
//     pauseButton: document.querySelector('#pause'),

//     // Array of objects containing the src and type
//     // of different video formats to add
//     src: [
//       {
//         src: 'bg3.mp4',
//         type: 'video/mp4'
//       },
//       {
//         src: 'bg3.webm',
//         type: 'video/webm;codecs="vp8, vorbis"'
//       }
//     ],

//   });
// }());

// Select all links with hashes
$('a.scroll[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top + 20
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });







$( ".checket-active1" ).click(function() {
  $( ".checket-active1" ).addClass('active-open');
  $( ".checket-active2" ).removeClass('active-open');
  $( ".checket-active3" ).removeClass('active-open');


});
$( ".checket-active2" ).click(function() {
  $( ".checket-active2" ).addClass('active-open');
  $( ".checket-active1" ).removeClass('active-open');
  $( ".checket-active3" ).removeClass('active-open');

});
$( ".checket-active3" ).click(function() {
  $( ".checket-active3" ).addClass('active-open');
  $( ".checket-active2" ).removeClass('active-open');
  $( ".checket-active1" ).removeClass('active-open');

});

$( ".checket-active1" ).click(function() {


  $( ".required1" ).attr("required", true);
  $( ".required2" ).removeAttr('required');
  $( ".required3" ).removeAttr('required');
});
$( ".checket-active2" ).click(function() {

  $( ".required2" ).attr("required", true);
  $( ".required1" ).removeAttr('required');
  $( ".required3" ).removeAttr('required');
});
$( ".checket-active3" ).click(function() {

  $( ".required3" ).attr("required", true);
  $( ".required2" ).removeAttr('required');
  $( ".required1" ).removeAttr('required');
});





$('.test-popup-link').magnificPopup({

  // Delay in milliseconds before popup is removed
  removalDelay: 300,

  // Class that is added to popup wrapper and background
  // make it unique to apply your CSS animations just to this exact popup
  mainClass: 'mfp-fade',

  items: {
      src: 'https://www.youtube.com/watch?v=57eJ9RlvR2s'
    },
    type: 'iframe' // this is default type
});



// Example 1: From an element in DOM
$('.open-popup-link').magnificPopup({
  mainClass: 'mfp-fade1',
  removalDelay: 500,
  type:'inline',
  midClick: true, // allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source.
  callbacks: {
    open: function() { 
        $('.closed-c').on('click',function(event){
          event.preventDefault();
          $.magnificPopup.close();
        }); 
    }
  }
});


$(document).ready(function(){
    $(":input").inputmask();
});



$(function () {

  $('#form1').on('submit', function (e) {

    e.preventDefault();
	var form = $(this);

    $.ajax({
      type: 'post',
      url: 'mail.php',
      data: $('#form1').serialize(),
      success: function () {
       // yaCounter25048409.reachGoal('askForm');
       // gtag('event', 'askForm', {'event_category': 'form'});
       $.magnificPopup.open({
          items: {
              src: '#test-popup2' 
          },
          mainClass: 'mfp-fade1',
          removalDelay: 500,
          type: 'inline',
          callbacks: {
            open: function() { 
                $('.closed-c').on('click',function(event){
                  event.preventDefault();
                  $.magnificPopup.close();
                }); 
            }
          }
        });
		
/* send calltouch */
var fio = form.find('input[name="name"]').val(); 
var phone = form.find('input[name="phone"]').val(); 
var mail = form.find('input[name="email"]').val(); 
var ct_site_id = '22297';
var sub = 'Заявка (tennisteam.pro)';
var ct_data = {             
fio: fio,
phoneNumber: phone,
email: mail,
subject: sub,
sessionId: window.call_value 
};
$.ajax({  
  url: 'https://api-node7.calltouch.ru/calls-service/RestAPI/'+ct_site_id+'/requests/orders/register/',
  dataType: 'json', type: 'POST', data: ct_data, async: false
}); 
/* send calltouch */
		
       $('#form1')[0].reset();
      }
    });

  });

});




$(function () {

  $('#form2').on('submit', function (e) {

    e.preventDefault();
	var form = $(this);

    $.ajax({
      type: 'post',
      url: 'mail1.php',
      data: $('#form2').serialize(),
      success: function () {
       // yaCounter25048409.reachGoal('callbackForm');
       // gtag('event', 'callbackForm', {'event_category': 'form'});
       $.magnificPopup.open({
          items: {
              src: '#test-popup2' 
          },
          mainClass: 'mfp-fade1',
          removalDelay: 500,
          type: 'inline',
          callbacks: {
            open: function() { 
                $('.closed-c').on('click',function(event){
                  event.preventDefault();
                  $.magnificPopup.close();
                }); 
            }
          }
        });
		
/* send calltouch */
var fio = form.find('input[name="name"]').val(); 
var phone = form.find('input[name="phone"]').val(); 
var ct_site_id = '22297';
var sub = 'Заявка (tennisteam.pro)';
var ct_data = {             
fio: fio,
phoneNumber: phone,
subject: sub,
sessionId: window.call_value 
};
$.ajax({  
  url: 'https://api-node7.calltouch.ru/calls-service/RestAPI/'+ct_site_id+'/requests/orders/register/',
  dataType: 'json', type: 'POST', data: ct_data, async: false
}); 
/* send calltouch */
		
       $('#form2')[0].reset();
      }
    });

  });

});

$(function () {

  $('#form3').on('submit', function (e) {

    e.preventDefault();
	var form = $(this);

    $.ajax({
      type: 'post',
      url: 'mail2.php',
      data: $('#form3').serialize(),
      success: function () {
       // yaCounter25048409.reachGoal('sheduleForm');
       // gtag('event', 'sheduleForm', {'event_category': 'form'});
       $.magnificPopup.open({
          items: {
              src: '#test-popup2' 
          },
          mainClass: 'mfp-fade1',
          removalDelay: 500,
          type: 'inline',
          callbacks: {
            open: function() { 
                $('.closed-c').on('click',function(event){
                  event.preventDefault();
                  $.magnificPopup.close();
                }); 
            }
          }
        });
		
/* send calltouch */
var fio = form.find('input[name="name"]').val(); 
var phone = form.find('input[name="phone"]').val(); 
var ct_site_id = '22297';
var sub = 'Заявка (tennisteam.pro)';
var ct_data = {             
fio: fio,
phoneNumber: phone,
subject: sub,
sessionId: window.call_value 
};
$.ajax({  
  url: 'https://api-node7.calltouch.ru/calls-service/RestAPI/'+ct_site_id+'/requests/orders/register/',
  dataType: 'json', type: 'POST', data: ct_data, async: false
}); 
/* send calltouch */
		
       $('#form3')[0].reset();
      }
    });

  });

});







$(document).ready(function () {

    var show = true;
    var countbox = ".benefits__inner";
    $(window).on("scroll load resize", function () {
        if (!show) return false; 
        var w_top = $(window).scrollTop(); 
        var e_top = $(countbox).offset().top; 
        var w_height = $(window).height(); 
        var d_height = $(document).height(); 
        var e_height = $(countbox).outerHeight(); 
        if (w_top + 500 >= e_top || w_height + w_top == d_height || e_height + e_top < w_height) {
            $('.benefits__number1').css('opacity', '1');
            $('.benefits__number1').spincrement({
                thousandSeparator: "",
                duration: 10000
            });

            show = false;
        }
    });
  
  $('.team1').mouseenter(function() {
    //основное видео
    $('.team1 video').removeClass('active');
    $('.team1 .video1').addClass('active');
    $('.team1 .video2')[0].pause();
    $('.team1 .video2')[0].currentTime = 0;
        $('.team1 .video3')[0].pause();
    $('.team1 .video3')[0].currentTime = 0;
    $('.team2 .video1')[0].pause();
    $('.team2 .video1')[0].currentTime = 0;
    $('.team3 .video1')[0].pause();
    $('.team3 .video1')[0].currentTime = 0;
        $('.team1 .video1')[0].play(0);   
  });
  $('.team1 video').on('ended', function() {
    $('.team1 video').removeClass('active');
    $('.team1 .video1').addClass('active');
    $('.team1 .video1')[0].currentTime = 0;
  });

  $('.team2').mouseenter(function() {
    //основное видео
    $('.team2 video').removeClass('active');
    $('.team2 .video1').addClass('active');
    $('.team2 .video2')[0].pause();
    $('.team2 .video2')[0].currentTime = 0;
        $('.team2 .video3')[0].pause();
    $('.team2 .video3')[0].currentTime = 0;
    $('.team1 .video1')[0].pause();
    $('.team1 .video1')[0].currentTime = 0;
    $('.team3 .video1')[0].pause();
    $('.team3 .video1')[0].currentTime = 0;
        $('.team2 .video1')[0].play(0);
   
  });
  $('.team2 video').on('ended', function() {
    $('.team2 video').removeClass('active');
    $('.team2 .video1').addClass('active');
    $('.team2 .video1')[0].currentTime = 0;
  });

  $('.team3').mouseenter(function() {
    //основное видео
    $('.team3 video').removeClass('active');
    $('.team3 .video1').addClass('active');
    $('.team3 .video2')[0].pause();
    $('.team3 .video2')[0].currentTime = 0;
        $('.team3 .video3')[0].pause();
    $('.team3 .video3')[0].currentTime = 0;
    $('.team2 .video1')[0].pause();
    $('.team2 .video1')[0].currentTime = 0;
    $('.team1 .video1')[0].pause();
    $('.team1 .video1')[0].currentTime = 0;
        $('.team3 .video1')[0].play(0);
   
  });
  $('.team3 video').on('ended', function() {
    $('.team3 video').removeClass('active');
    $('.team3 .video1').addClass('active');
    $('.team3 .video1')[0].currentTime = 0;
  });

});



   $(document).ready(function(){
     $(window).bind('scroll', function() {
     var navHeight = $( window ).height() - 70;
       if ($(window).scrollTop() > navHeight) {
         $('.nav').addClass('fixed');
       }
       else {
         $('.nav').removeClass('fixed');
       }
    });
  });






// $(function () {
//   $('#form4').on('submit', function (e) {
//     e.preventDefault();
//     var form = $(this);

//     var response = grecaptcha.getResponse();

//     if (response != '') {
//       $.ajax({
//          url: 'validate-recaptcha.php',
//          success: function(result) {
//             if(result=='Recaptcha Validated') {
//                $(function () {
//                   $.ajax({
//                     type: 'post',
//                     url: 'mail3.php',
//                     data:  $('#form4').serialize(),
//                     success: function () {
//                      // yaCounter25048409.reachGoal('certForm');
//                      // gtag('event', 'certForm', {'event_category': 'form'});
//                      $.magnificPopup.open({
//                         items: {
//                             src: '#test-popup2' 
//                         },
//                         mainClass: 'mfp-fade1',
//                         removalDelay: 500,
//                         type: 'inline',
//                         callbacks: {
//                           open: function() { 
//                               $('.closed-c').on('click',function(event){
//                                 event.preventDefault();
//                                 $.magnificPopup.close();
//                               }); 
//                           }
//                         }
//                       });
              
//                       /* send calltouch */
//                       var fio = form.find('input[name="name"]').val(); 
//                       var phone = form.find('input[name="phone"]').val(); 
//                       var ct_site_id = '22297';
//                       var sub = 'Заявка (tennisteam.pro)';
//                       var ct_data = {             
//                       fio: fio,
//                       phoneNumber: phone,
//                       subject: sub,
//                       sessionId: window.call_value 
//                       };
//                       $.ajax({  
//                         url: 'https://api-node7.calltouch.ru/calls-service/RestAPI/'+ct_site_id+'/requests/orders/register/',
//                         dataType: 'json', type: 'POST', data: ct_data, async: false
//                       }); 
//                       /* send calltouch */
              
//                      $('#form4')[0].reset();
//                     }
//                   });
//                 });
//             }
//          },
//          type: 'POST',
//          data: {
//           recaptcha: response
//          }
//       });

//     }
//   });
// });

// function sendAjaxRequest() {
//   if (grecaptcha === undefined) {
     
//   }

//   $.ajax({
//      url: 'validate-recaptcha.php',
//      success: function(result) {
//         alert(result);
//      },
//      type: 'POST',
//      data: {
//       recaptcha: response
//      }
//   });

// }
 

 
// myform mail4.php
$(function () {

  $('#form4').on('submit', function (e) {

    e.preventDefault();
  var form = $(this);

    $.ajax({
      type: 'post',
      url: 'mail4.php',
      data: $('#form4').serialize(),
      success: function () {
       // yaCounter25048409.reachGoal('sheduleForm');
       // gtag('event', 'sheduleForm', {'event_category': 'form'});
       $.magnificPopup.open({
          items: {
              src: '#test-popup2' 
          },
          mainClass: 'mfp-fade1',
          removalDelay: 500,
          type: 'inline',
          callbacks: {
            open: function() { 
                $('.closed-c').on('click',function(event){
                  event.preventDefault();
                  $.magnificPopup.close();
                }); 
            }
          }
        });
    
/* send calltouch */
var fio = form.find('input[name="name"]').val(); 
var phone = form.find('input[name="phone"]').val(); 
var ct_site_id = '22297';
var sub = 'Заявка (tennisteam.pro)';
var ct_data = {             
fio: fio,
phoneNumber: phone,
subject: sub,
sessionId: window.call_value 
};
$.ajax({  
  url: 'https://api-node7.calltouch.ru/calls-service/RestAPI/'+ct_site_id+'/requests/orders/register/',
  dataType: 'json', type: 'POST', data: ct_data, async: false
}); 
/* send calltouch */
    
       $('#form4')[0].reset();
      }
    });

  });

});



ymaps.ready(function () {
    var myMap = new ymaps.Map('map', {
            // center: [55.839223776883955,37.66839899999998],
            center: [55.76216556896337,37.70134949999998],
            zoom: 11
        }, {
            searchControlProvider: 'yandex#search'
        }),

        // myPlacemark = new ymaps.Placemark([55.903650989871295,37.5549120396728], {

        //     hintContent: 'г.Москва, ул.Зональная, д.6  '
        // }, {
        //     iconLayout: 'default#image',
        //     iconImageHref: 'img/icon/icon-map.png',
        //     iconImageSize: [41, 60],
        //     iconImageOffset: [-39, -73]
        // }),

        myPlacemark1 = new ymaps.Placemark([55.791547068949484,37.45295599999992], {

            hintContent: 'г.Москва, ул. Живописаная, 21с5'
        }, {
            iconLayout: 'default#image',
            iconImageHref: 'img/icon/icon-map.png',
            iconImageSize: [41, 60],
            iconImageOffset: [-39, -73]
        }),
         myPlacemark2 = new ymaps.Placemark([55.79243206895173,37.5369844999999], {

            hintContent: 'г.Москва, Ленинградкий проспект 39с61 '
        }, {
            iconLayout: 'default#image',
            iconImageHref: 'img/icon/icon-map.png',
            iconImageSize: [41, 60],
            iconImageOffset: [-39, -73]
        }),

        myPlacemark3 = new ymaps.Placemark([55.67530106906778,37.610565499999986], {

            hintContent: 'г.Москва, Электролитный проезд, дом 7, кор. 2  '
        }, {
            iconLayout: 'default#image',
            iconImageHref: 'img/icon/icon-map.png',
            iconImageSize: [41, 60],
            iconImageOffset: [-39, -73]
        });

    myMap.geoObjects
        // .add(myPlacemark)
        .add(myPlacemark1)
        .add(myPlacemark2)
        .add(myPlacemark3);         
    myMap.behaviors.disable('scrollZoom');
     // myMap.behaviors.disable('drag');
     myMap.behaviors.disable('MultiTouch');

    if (window.innerWidth < 1000) {
              myMap.behaviors.disable('drag');
              myMap.behaviors.disable('scrollZoom');
              myMap.setCenter([55.79849899253917,37.711253261397054]);
    } 
    if (window.innerWidth < 850) {
              myMap.setCenter([55.78921495029211,37.699236965010314]);
               myMap.setZoom(10);
    } 
    if (window.innerWidth < 750) {
              myMap.setCenter([55.77590426951871,37.84359511823341]);              
    } 
     if (window.innerWidth < 700) {
              myMap.setCenter([55.78086269090999,37.57786686155922]);
             
    } 



});


