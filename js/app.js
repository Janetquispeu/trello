window.addEventListener("load",function(){
	var addList=document.getElementById("addList");
	addList.addEventListener("click", function(){
		desaparecerElemento();
		aparecerFormulario();
	});

	function desaparecerElemento(){
		var contenedor=document.getElementById("contenedor");
		var inputText=document.getElementById("inputText");
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
		boton.setAttribute("type","button")
		boton.classList.add("boton");
		btnRemove.classList.add("icon-cross");

		boton.addEventListener("click",function(){
			imprimir();
			desapareceFormulario();

		});

		function imprimir(){
			var inputValor=inputText.value;
			var divContent=document.createElement("div");
			var contenedor=document.getElementById("contenedor");
			var divEnlace=document.createElement("div");
			var divList=document.createElement("div");
			var cardEnlace=document.createElement("a");
			contenedor.insertBefore(divContent,form);
			divContent.appendChild(divList);
			divContent.appendChild(divEnlace);
			divEnlace.appendChild(cardEnlace);
			divList.textContent=inputValor;
			divContent.classList.add("createList");
			divList.classList.add("divClass");
			divEnlace.classList.add("divEnlace");
			cardEnlace.classList.add("cardEnlace");
			cardEnlace.textContent="Add an card...";

		}

		function desapareceFormulario(){
			var contenedor=document.getElementById("contenedor");
			var form=document.getElementById("fondoForm");
			contenedor.removeChild(form);
			}
	}	
		
});




