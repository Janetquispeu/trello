window.addEventListener("load",function(){
	var addList=document.getElementById("addList");

	addList.addEventListener("click", function(){
		desaparecerElemento();
		aparecerFormulario();
	});

	function desaparecerElemento(){
		addList.style.display="none";
	}

	function aparecerFormulario(){
		var form=document.getElementById("form");
		var inputText=document.createElement("input");
		var boton=document.createElement("button");
		var btnRemove=document.createElement("button")

		form.appendChild(inputText);
		form.appendChild(boton);
		form.appendChild(btnRemove);

		form.classList.add("fondoForm")
		form.style.background="#E2E4E6"; 
		boton.textContent= "Save";
		inputText.classList.add("inputText");
		inputText.setAttribute("placeholder","Add an List...")
		boton.setAttribute("type","button")
		boton.classList.add("boton");
		btnRemove.classList.add("icon-cross");
		inputText.focus();

		boton.addEventListener("click",function(){
			imprimir();
			desapareceFormulario();
			addList();

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
			divList.value="";

			divContent.classList.add("createList");
			divList.classList.add("divClass");
			divEnlace.classList.add("divEnlace");
			cardEnlace.classList.add("cardEnlace");
			cardEnlace.textContent="Add an card...";

			divEnlace.addEventListener("click",function(){
				/* eliminar divEnlace */
				divEnlace.style.display="none";
				var divTextArea=document.createElement("form");
				var textArea=document.createElement("textarea");
				var botonAdd=document.createElement("button");
				var btnRemovep=document.createElement("button");

				divContent.appendChild(divTextArea);
				divTextArea.appendChild(textArea);
				divTextArea.appendChild(botonAdd);
				divTextArea.appendChild(btnRemovep);
				botonAdd.textContent="Add";

				divTextArea.classList.add("divTextArea");
				textArea.classList.add("textArea");
				botonAdd.classList.add("botonAdd");
				btnRemovep.classList.add("icon-cross");

				botonAdd.addEventListener("click", function(ev){
					ev.preventDefault();
					divTextArea.style.display="none";
					var divCard=document.createElement("div");
					divContent.insertBefore(divCard,divEnlace);
					divCard.classList.add("divCard");
					divCard.textContent=textArea.value;
					divEnlace.style.display="block";

				
				});
			});

		}
		function divEnlace(){

		}

		function eliminarFormTextarea(){
			document.querySelector("divTextArea").classList.remove("textArea"); 
		}

		function desapareceFormulario(){
			inputText.style.display="none";
			boton.style.display="none";
			btnRemove.style.display="none";
			form.style.background="none";

			}
		function addList(){
			var addList=document.getElementById("addList");
			addList.style.display="block";

		}
	}			
});




