$(".galeria .contenedor-imagen").on('click', function() {
	var rutaImagen = $(this).find('img').attr("src");
	$("#imagen-modal").attr('src', rutaImagen);
});