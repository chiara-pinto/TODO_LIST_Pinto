// definizione di variabili DOM, tra cui un bottone che chiamiamo "insertButton"

let todos = []; // lista dei task

const render = () => {

   // codice che genera l'html da todos

}

const send = (todo) => {
    return new Promise((resolve, reject) => {
        fetch("/todo/add", {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(todo)
        })
        .then((response) => response.json())
        .then((json) => {
            resolve(json); // risposta del server all'aggiunta
        })
    })
}
 
