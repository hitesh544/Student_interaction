 // -----------menu click js----------
 
      $(document).ready(function(){
        $('.menu-toggle').click(function(){
          $('.menu-burger').toggleClass('active')
          $('.menu').toggleClass('active')
        });
      });

// ****header scroll function****

      $( () => {
    
        //On Scroll Functionality
        $(window).scroll( () => {
          var windowTop = $(window).scrollTop();
          windowTop > 50 ? $('header').addClass('og-hf') : $('header').removeClass('og-hf');
        });
      });

 // -----------Owl js----------

  $(document).ready(function() {
    var owl = $('.owl-carousel');
    owl.owlCarousel({
      loop: true,
      margin: 10,
      navRewind: false,
      responsive: {
        0: {
          items: 1
        },

        440:{
          items: 2
        },
        600: {
          items: 3
        },
        1000: {
          items: 4
        }
      }
    })
  });

  // -----------counting js----------

  $('.counting').each(function() {
        var $this = $(this),
        countTo = $this.attr('data-count');

      $({countNum: $this.text()}).animate({
    countNum: countTo
        },

      {

    duration: 3000,
      easing:'linear',
      step: function() {
    $this.text(Math.floor(this.countNum));
    },
      complete: function() {
    $this.text(this.countNum);
      //alert('finished');
    }

    });

  });

