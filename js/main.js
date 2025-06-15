const screen = document.querySelector(".screen");

const Botones = document.querySelectorAll(".btn");


function procesarPotencias(expresion) {
    // Reemplaza todas las ocurrencias de a^b por Math.pow(a,b)
    return expresion.replace(/([0-9.]+)\^([0-9.]+)/g, (match, base, exponente) => {
        return `Math.pow(${base},${exponente})`;
    });
}

function procesarVariable(expresion) {
    if (expresion.includes('x')) {
        let valorX = prompt("Introduce el valor de x:");
        if (valorX === null || valorX.trim() === "") return expresion;
        // Paso 1: Agrega * entre número y x (por ejemplo, 5x -> 5*x)
        expresion = expresion.replace(/(\d)(x)/g, '$1*$2');
        // Paso 2: Reemplaza todas las x por el valor ingresado (por ejemplo, x -> (9))
        return expresion.replace(/x/g, `(${valorX})`);
    }
    return expresion;
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
            let expresion = screen.textContent;
            // 1. Procesa la variable x primero (muestra el prompt si hay x)
            expresion = procesarVariable(expresion);
            // 2. Reemplaza los símbolos por operadores válidos de JS
            expresion = expresion
                .replace(/÷/g, "/")
                .replace(/\*/g, "*")
                .replace(/-/g, "-")
                .replace(/\+/g, "+");
            // 3. Procesa potencias
            expresion = procesarPotencias(expresion);
            // 4. Evalúa la expresión final
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



