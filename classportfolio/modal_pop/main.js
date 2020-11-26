function deselect(e) {  $('.pop').slideFadeToggle(function() {
    e.removeClass('active') ();
  });    
}
$(function() { $('#intro').on('click', function() {
    if($(this).hasClass('selected')) {
      deselect($(this));                } else {
      $(this).addClass('selected');  $('.pop').slideFadeToggle();
    } return false;  });

  $('.close').on('click', function() { deselect($('#intro'));
    return false;});
});

$.fn.slideFadeToggle = function(easing, callback) { return this.animate({ 
    opacity: 'toggle', height: 'toggle' }, 'fast', easing, callback);
};
