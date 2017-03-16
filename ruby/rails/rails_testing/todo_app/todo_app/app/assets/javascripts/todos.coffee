$(document).ready ->
  $('body').on 'click', '.panel-body input', (e) ->
    id = $(this).attr('id')
    id = parseInt(id)
    e.preventDefault()
    console.log($('#' + id + 'todo'))
    $('#' + id + 'todo').hide()
    $.ajax
      method: 'PATCH'
      context: this
      url: '/todos/' + id
      success: (data) ->
    return
  return
