const screen = document.querySelector(".screen");

const Botones = document.querySelectorAll(".btn");

Botones.forEach((boton) => {
    boton.addEventListener("click", ()=>{
        const botonApretado = boton.textContent;

        if(boton.id === "c"){
            screen.textContent = "0";
            return;
        }

        if(boton.id === "delete"){
            if(screen.textContent.length === 1){
                screen.textContent = "0";
        
            }else{
                screen.textContent = screen.textContent.slice(0,-1);
            }
            return;
        }



        if (screen.textContent === "0") {
            screen.textContent = botonApretado;

        }else {
            screen.textContent += botonApretado;
        }

 
    })
})



