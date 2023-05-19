function semaforo(){
    let rojobtn = document.getElementById("rojo");
    let amarillobtn = document.getElementById("amarillo");
    let verdebtn = document.getElementById("verde");
    let imgcambio = document.getElementById("imgcambio");
    let titulo = document.getElementById("title")

    rojobtn.onclick = function(){
        imgcambio.src = "images/rojo.jfif";
        titulo.style = "color:red"
    }

    amarillobtn.onclick = function(){
        imgcambio.src = "images/amarillo.jfif";
        titulo.style = "color:yellow"
    }

    verdebtn.onclick = function(){
        imgcambio.src = "images/verde.jfif";
        titulo.style = "color:green"
    }
}

semaforo()