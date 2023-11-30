import {
  adicionar,
  remover,
  marcarOuDesmarcar
} from "./lista.js";

window.addEventListener("load", () => {
  listar(); // Ao carregar a página, lista os produtos na tabela

  let botaoAdicionar = document.querySelector("#botao-adicionar");
  botaoAdicionar.addEventListener("click", () => {
    const preco = document.querySelector("#input-preco").value;
    const nome = document.querySelector("#input-nome").value;
    const produto = {
      nome: nome,
      preco: preco,
      comprado: false
    };
    adicionar(produto);
    listar(); // Após adicionar um produto, lista novamente para atualizar a tabela
  });
});

function atualizarTabela() {
  const corpoTabela = document.querySelector("#corpo-tabela");
  corpoTabela.innerHTML = ''; // Limpa a tabela antes de atualizar

  const lista = JSON.parse(localStorage.getItem("lista")) || [];

  lista.forEach((item) => {
    const tr = document.createElement("tr");

    const colunaProduto = document.createElement("td");
    colunaProduto.textContent = item.nome;

    const colunaPreco = document.createElement("td");
    colunaPreco.textContent = item.preco;

    const colunaComprado = document.createElement("td");
    colunaComprado.textContent = item.comprado ? "Sim" : "Não";

    const colunaAcoes = document.createElement("td");
    const botaoRemover = document.createElement("button");
    botaoRemover.textContent = "Remover";
    botaoRemover.addEventListener("click", () => {
      remover(item.nome);
      listar(); // Após remover um produto, lista novamente para atualizar a tabela
    });

    colunaAcoes.appendChild(botaoRemover);

    tr.appendChild(colunaProduto);
    tr.appendChild(colunaPreco);
    tr.appendChild(colunaComprado);
    tr.appendChild(colunaAcoes);

    corpoTabela.appendChild(tr);
  });
}
function listar(){
  atualizarTabela();
}
