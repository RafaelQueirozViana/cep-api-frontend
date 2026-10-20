const button = document.getElementById("btn-carregar");
const list = document.getElementById("lista-tarefas");

button.addEventListener('click', carregarDados);

async function carregarDados() {

    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/todos?_limit=10");
        const tarefas = await response.json();

        list.innerHTML = '';

        tarefas.forEach(element => {
            console.log(element)
            const paragraph = document.createElement('li');
            paragraph.textContent = `${element.title}: completo: ${element.completed == false ? 'não' : 'sim'}`
            list.appendChild(paragraph);

            if (element.completed == false) {
                paragraph.classList.add("red")
            }

            else {
                paragraph.classList.add("green")
            }
        });

    }
    catch (erro) {
        alert(erro)
    }




}