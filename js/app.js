window.addEventListener("load",function(){
	var addList=document.getElementById("addList");
	var boton=document.createElement("button");
	addList.addEventListener("click", function(){
		desaparecerElemento();
		aparecerFormulario();
	});

});
function desaparecerElemento(){
	var contenedor=document.getElementById("contenedor");
	var addList=document.getElementById("addList");
	contenedor.removeChild(addList);	
}

function aparecerFormulario(){
	var contenedor=document.getElementById("contenedor");
	var form=document.createElement("form");
	var inputText=document.createElement("input");
	var boton=document.createElement("button");
	var btnRemove=document.createElement("button")

	contenedor.appendChild(form);
	form.appendChild(inputText);
	form.appendChild(boton);
	form.appendChild(btnRemove);

	form.classList.add("fondoForm")
	boton.textContent= "Save";
	inputText.classList.add("inputText");
	inputText.setAttribute("placeholder","Add an List...")
	boton.classList.add("boton");
	btnRemove.classList.add("icon-cross");
	
	boton.addEventListener("click",function(e){
		e.preventDefault();
	});

}


