let lista = JSON.parse(localStorage.getItem("lista")) || [];

function atualizarLocalStorage(lista) {
  localStorage.setItem("lista", JSON.stringify(lista)); 
}

export function adicionar(produto) {
  lista.push(produto);
  atualizarLocalStorage(lista);
}

export function remover(produto) {
  const indice = lista.findIndex((item) => item.nome === produto);
  if (indice !== -1) {
    lista.splice(indice, 1);
    atualizarLocalStorage(lista);
  }
}

export function marcarOuDesmarcar(produto, marcado) {
  lista.forEach((item) => {
    if (item.nome === produto) {
      item.comprado = marcado;
    }
  });
  atualizarLocalStorage(lista);
}

function criarBotao(texto, evento) {
  const botao = document.createElement("button");
  botao.textContent = texto;
  botao.addEventListener("click", evento);
  return botao;
}

export function iniciarLista() {
}
