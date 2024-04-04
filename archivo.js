// function recorrer_lista(list){
//     var lista = document.getElementById("lista")
//     for(const l of list){
//         var li = document.createElement("li")
//         li.textContent = l
//         lista.appendChild(li)
//         console.log(li)
//     }

// }


async function hacer_lista(){
    var promesa = await fetch(src = "https://dog.ceo/api/breeds/image/random")
    if(promesa.ok){
        const data = await promesa.json();
        mostrarImagen(data.message);
    }
    else{
        alert("Error!");
    }
    // promesa.then(resp => resp.json()).then(resp => lista.appendChild(resp))
}

function mostrarImagen(url) {
    const lista = document.getElementById("lista");
    lista.innerHTML = "";
    const imagen = document.createElement("img");
    imagen.src = url;
    lista.appendChild(imagen);
}