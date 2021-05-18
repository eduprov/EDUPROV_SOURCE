$(document).ready(function(){

    $(function(){
     
        $(document).on( 'scroll', function(){
     
            if ($(window).scrollTop() > 100) {
                $('.scroll-top-wrapper').addClass('show');
            } else {
                $('.scroll-top-wrapper').removeClass('show');
            }
        });
     
        $('.scroll-top-wrapper').on('click', scrollToTop);
    });
     
    function scrollToTop() {
        verticalOffset = typeof(verticalOffset) != 'undefined' ? verticalOffset : 0;
        element = $('body');
        offset = element.offset();
        offsetTop = offset.top;
        $('html, body').animate({scrollTop: offsetTop}, 30, 'linear');
    }
    
    });
    
    function EasyPeasyParallax() {
        scrollPos = $(this).scrollTop();
        $('#banner').css({
            'background-position' : '50% ' + (-scrollPos/4)+"px"
        });
        $('#bannertext').css({
            'margin-top': (scrollPos/4)+"px",
            'opacity': 1-(scrollPos/250)
        });
    }
    $(document).ready(function(){
        $(window).scroll(function() {
            EasyPeasyParallax();
        });
    });

(function () {
    'use strict'
    var forms = document.querySelectorAll('.needs-validation')
  
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }
  
          form.classList.add('was-validated')
        }, false)
      })
  })()

