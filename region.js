(function(){

	switch(document.URL){
		case "https://sede.administracionespublicas.gob.es/icpplus/index.html":
			document.querySelector("select#form").value = "/icpplustie/citar";
			document.querySelector("[value='Aceptar']").click();
		break;
		case "https://sede.administracionespublicas.gob.es/icpplustie/citar":
			document.querySelector("select#t").value = "4012";
			document.querySelector("[value='Aceptar']").click();
		break;
		case "https://sede.administracionespublicas.gob.es/icpplustie/citar?accion=ac_info&i=es&org=AGE&p=8&t=4012&sbt=&nsbt=&dsbt=":
			document.querySelector("[value='ENTRAR']").click();	
		break;
		case "https://sede.administracionespublicas.gob.es/icpplustie/citar?accion=ac_entrada":
			document.querySelector("input#txtNieAux").value = __data__.id;
			document.querySelector("input#txtDesCitado").value = __data__.name;
			document.querySelector("input#txtAnnoCitado").value = __data__.age;
			document.querySelector("select#txtPaisNac").value = "RUSIA";
			document.querySelector("input#txtCaptcha").focus();
		break;
		case "https://sede.administracionespublicas.gob.es/icpplustie/controlador?accion=ac_validarentrada":
		case "https://sede.administracionespublicas.gob.es/icpplustie/controlador?accion=AC_OPC_DIRECT":
			document.querySelector("[value='SOLICITAR CITA']").click();
		break;	
		case "https://sede.administracionespublicas.gob.es/icpplustie/controlador?accion=AC_CITAR":
			document.querySelector("select#txtIdSede").value = "5";
			document.querySelector("[value='Siguiente']").click();
		break;
		case "https://sede.administracionespublicas.gob.es/icpplustie/controlador?accion=AC_VERFORMULARIO":
			document.querySelector("input#txtTelefonoCitado").value = __data__.phone;
			document.querySelector("input#emailUNO").value = __data__.email;
			document.querySelector("input#emailDOS").value = __data__.email;
			document.querySelector("[value='Siguiente']").click();
		break;
		case "https://sede.administracionespublicas.gob.es/icpplustie/controlador?accion=AC_OFERTARCITA":
			document.querySelectorAll(".tablasinfondo input[type=radio]")[0].click();
			document.querySelector("[value='Siguiente']").click();
		break;
		case "https://sede.administracionespublicas.gob.es/icpplustie/controlador?accion=AC_VERIFICARCITA":
			document.querySelector("[name='chkTotal']").click();
			document.querySelector("[name='enviarCorreo']").click();
			document.querySelector("[value='Confirmar']").click();
		break;
		case "https://sede.administracionespublicas.gob.es/icpplustie/controlador?accion=AC_GRABARCITA":
				
		break;
	}
})();
