(function() {
  $('.hider').click(function() {
    return $(this).parent('.message').removeClass('blur');
  });

}).call(this);