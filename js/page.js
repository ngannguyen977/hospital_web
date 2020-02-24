$('#carousel-example').on('slide.bs.carousel', function (e) {

      /*
          CC 2.0 License Iatek LLC 2018
          Attribution required
      */
      var $e = $(e.relatedTarget);
      var idx = $e.index();
      var itemsPerSlide = 5;
      var totalItems = $('.carousel-item').length;
      
      if (idx >= totalItems-(itemsPerSlide-1)) {
          var it = itemsPerSlide - (totalItems - idx);
          for (var i=0; i<it; i++) {
              // append slides to end
              if (e.direction=="left") {
                  $('.carousel-item').eq(i).appendTo('.carousel-inner');
              }
              else {
                  $('.carousel-item').eq(0).appendTo('.carousel-inner');
              }
          }
      }
  });
jQuery(document).ready(function() {
  jQuery('.play i').click(function(event){
     event.preventDefault();
    //var url = $(this).html(); //this will not work  
     $(".js-video").append('<iframe width="940" height="529" src="https://www.youtube.com/embed/ZsCL47eqgrs?autoplay=1" frameborder="0" allowfullscreen></iframe>');
    $(this).hide();
    //$('video-poster').css('z-index','-1');
    
  });
});