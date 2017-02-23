$(document).ready(function(){
  $('body').on('keyup', '#name_filter', function(event){
    $.ajax({
      url: '/filter/',
      method: 'post',
      data: $(this).serialize(),
      success: function(data){
        $('.container').html(data)
      }
    })
  })
  $('body').on('click', 'a', function(e){
    e.preventDefault()
    $.ajax({
      url: '/' + $(this).attr('id'),
      method: 'get',
      data: $(this).serialize(),
      success: function(data){
        $('body').html(data)
      }
    })
  })
})
