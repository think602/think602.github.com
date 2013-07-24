$(document).ready( function(){

  $('.jumbotron a').click(function(e){
    e.preventDefault();
    $('#contact').tab('show');
    $('#tabs > li').removeClass('active');
  });

  $('#title-click').click(function(e){
    e.preventDefault();
    $('#tabs a:first').tab('show');
    $('#tabs > li').removeClass('active');
  });

});
