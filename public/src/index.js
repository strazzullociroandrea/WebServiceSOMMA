const primoNumero = document.getElementById("primoNumero");
const secondoNumero = document.getElementById("secondoNumero");
const somma = document.getElementById("somma");
const result = document.getElementById("result");

/**
 * Gestione click conferma input per la somma dei numeri inseriti
 */
somma.onclick = () =>{
    fetch("/sum", {
        method: "POST",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify({
            'primoNumero': primoNumero.value != "" ? primoNumero.value : '0',
            'secondoNumero': secondoNumero.value != "" ? secondoNumero.value : '0'
        })
    })
    .then(response => response.json())
    .then(response => result.innerText = "La somma è  ..... " + response.result);
}