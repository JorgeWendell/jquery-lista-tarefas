$(document).ready( function() {
    $('header button').click(function() {
       $('ul').slideDown();
    })

    $('form').on('submit', function(e){
        e.preventDefault();
        const novaTarefa = $('#pega-tarefa').val();
        const listaTarefa = $('<ul style="display: none"></ul>');
        $(`<li>${novaTarefa}</li>`).appendTo(listaTarefa);
     
        $(listaTarefa).appendTo('ul');
        $(listaTarefa).fadeIn();
        $("#pega-tarefa").val('');
        $('ul').on('click', 'li', function() {
            $(this).addClass('checado');
          });
        
    })
})