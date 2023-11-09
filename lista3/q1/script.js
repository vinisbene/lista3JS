window.addEventListener("load" ,() => {
    
    let botao = document.querySelector("button");
    let inputDate = document.querySelector("#date");
    let inputEvento = document.querySelector("#evento");
    let arrayTarefas = []
    
    botao.addEventListener("click" , () => {
        let evento = inputEvento.value;
        let date = new Date(inputDate.value);
        let hora = date.getHours();
        let dia = date.getDate();
        let minutos = date.getMinutes();
        
        const tarefa = {
            'tarefa' : evento,
            'dia' : dia,
            'hora': hora, 
            'minutos' : minutos
        }
  
        arrayTarefas.push(tarefa);
        console.log(arrayTarefas);
  
        let ol = document.querySelector("ol");
        let novoItemlista = document.createElement("li");
        novoItemlista.textContent = `Tarefa: ${tarefa.tarefa} às ${tarefa.hora} horas e ${tarefa.minutos} minutos`;
        ol.appendChild(novoItemlista);
    })
  })