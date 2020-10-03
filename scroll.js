$('a[href^="#"]').click(function(){
  var speed = 900;
  var href = $(this).attr("href");
  var target = $(href == "#" ? "html": href);
  var position = target.offset().top;
  $('body,html').animate({
    scrollTop:position - 60
  }, speed, 'easeOutQuad');
  return false;
});
