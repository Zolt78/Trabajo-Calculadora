const screen = document.querySelector(".screen");

const Botones = document.querySelectorAll(".btn");


function procesarPotencias(expresion) {
    // Reemplaza todas las ocurrencias de a^b por Math.pow(a,b)
    return expresion.replace(/([0-9.]+)\^([0-9.]+)/g, (match, base, exponente) => {
        return `Math.pow(${base},${exponente})`;
    });
}



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

        if (boton.id === "equal"){
            try {
                let expresion = screen.textContent
                    .replace(/÷/g, "/")
                    .replace(/x/g, "*")
                    .replace(/-/g, "-")
                    .replace(/\+/g, "+");
                // Procesa potencias
                expresion = procesarPotencias(expresion);
                screen.textContent = eval(expresion);
            } catch {
                screen.textContent = "Error!";
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



