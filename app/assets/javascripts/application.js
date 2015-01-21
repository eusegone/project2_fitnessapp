// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery.turbolinks
//= require jquery_ujs
//= require twitter/bootstrap
//= require turbolinks
//= require_tree .
$(function(){
  $('.book_button').on('click', function(){
    num = this.id.split("_").pop();
    string = "#booking_form_" + num;
    $('.booking_form').slideUp();
    $(string).slideDown();
  });
  $('.lesson_button').on('click', function(){
    $('#add_lesson_form').slideToggle();
  });
  $('.conversation_form').hide();
  $('#new_conversation').on('click', function(){
    $('.conversation_form').slideToggle();
  });
  $('#search_form').
    on('ajax:success', function(ev, data, status, xhr){
      $('#lessons_list').html(data);
    }).
    on('ajax:error', function(xhr, status, error){
      console.log('error: ', error);
    });
    $('#search').on('keyup',function(){
      $('#search_form').submit();
    });
});

