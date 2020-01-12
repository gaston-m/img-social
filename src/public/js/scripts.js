$('#post-comment').hide();
$('#btn-toggle-comment').click(function(e){
    e.preventDefault();
    $('#post-comment').slideToggle();       

});




$('#btn-like').click(function (e) {
    e.preventDefault();
    let imageId = $(this).data('id');
    console.log(image);

    $.post('/images/' + imageId + '/likes').done(data => {
        
        console.log(data);
    
        $('.likes-count').text(data.likes);
    
    })
});

$('#btn-delete').click(function (e) {
    
    e.preventDefault();
    
    let $this = $(this);

    response = confirm('Estas Seguro Que Deseas Eliminar La Imagen??');
    if (response){

        let imageId = $(this).data('id');
    
    $.ajax({

        url: '/images/' + imageId,
        type: 'DELETE'
    })
    .done( function (result) {

        $this.removeClass('btn-danger').addClass('bg-success text-white');
        $this.find('i').removeClass('fa-times').addClass('fa-check');
      

    })
  }
})


