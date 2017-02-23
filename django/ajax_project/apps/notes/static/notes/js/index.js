function add_events(){
  $('.container').on('click', '.content_area', function(event){
      $(this).children('p').replaceWith('<form class="note_form" action="/create/" method="post"><input type="hidden" name="id" value="' + $(this).attr('id') + '"><input id="content" name="content" value="' + $(this).children('p').text() + '"></form>')
      $(this).children().children('input').focus()
  })
  $('.container').on('focusout', '.content_area', function(event){
    $.ajax({
      url: '/add_content/',
      context: this,
      method: 'post',
      data: $(this).children('form').serialize(),
      success: function(data){
        $(this).children('form').replaceWith('<p>' + $(this).children().children('#content').val() + '</p>' )
      }
    })
  })
}

$(document).ready(function(){
  $('.note_form').on('submit', function(event){
    event.preventDefault();
    $.ajax({
      url: '/create/',
      method: 'post',
      data: $(this).serialize(),
      success: function(data){
        $('.notes').html(data)
      }
    })
  })
  add_events()
})
