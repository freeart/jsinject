(function(){

	switch(document.URL){
		case "https://sede.administracionespublicas.gob.es/icpplus/index.html":
			document.querySelector("select#form").value = "/icpplustie/citar";
			document.querySelector("[value='Aceptar']").click();
		break;
	}
})();
