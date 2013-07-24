$(document).ready( function(){

  // the big green "Contact Us" button
  //
  $('.jumbotron a').click(function(e){
    e.preventDefault();
    $('#contact').tab('show');
    $('#tabs > li').removeClass('active');
  });

  // clicking on think602
  //
  $('#title-click').click(function(e){
    e.preventDefault();
    $('#tabs a:first').tab('show');
    $('#tabs > li').removeClass('active');
  });

  // "More about process" button
  //
  $('a[href="#process"]').click( function(e) {
    e.preventDefault();
    $('#tabs li:eq(2) a').tab('show');
    // move to process description text
  })

  // "View work" button
  //
  $('a[href="#work"]').click( function(e) {
    e.preventDefault();
    $('#tabs li:eq(2) a').tab('show');
  })

});
