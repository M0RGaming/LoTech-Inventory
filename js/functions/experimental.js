function test() {
  $('.fltrow').children().each( function convert() {


  //fltrow = $('.fltrow')
  //for (i in fltrow) {
    el = makeNewElementFromElement('th', this)
    $('.fltrow').append(el)
    $(this).remove()
  });
  
  
};