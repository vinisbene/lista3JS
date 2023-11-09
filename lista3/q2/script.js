window.addEventListener("load", () => {
    let ul = document.querySelector("ul");

    const ClienteBanco = [
      { nome: "Vinicius", documento: "121212", saldo: 100 },
      { nome: "Rebeca", documento: "1213535", saldo: 100 },
      { nome: "Matheus", documento: "0101001", saldo: 100 },
    ];

    function exibirClientes(ClienteBanco) {
      ul.replaceChildren(...[]);
      ClienteBanco.forEach((cliente, index) => {
        let novoItemlista = document.createElement("li");
        novoItemlista.textContent = `Cliente: ${cliente.nome} || Saldo: ${cliente.saldo}`;
        ul.appendChild(novoItemlista);

        let botaoAdicionar = document.createElement("button");
        botaoAdicionar.textContent = "Add 100";
        botaoAdicionar.addEventListener("click", () => adicionarSaldo(index));
        novoItemlista.appendChild(botaoAdicionar);

        let botaoRemover = document.createElement("button");
        botaoRemover.textContent = "Rm 100";
        botaoRemover.addEventListener("click", () => removerSaldo(index));
        novoItemlista.appendChild(botaoRemover);
      });
    }

    function adicionarSaldo(index) {
      ClienteBanco[index].saldo += 100;
      exibirClientes(ClienteBanco);
    }

    function removerSaldo(index) {
      ClienteBanco[index].saldo -= 100;
      exibirClientes(ClienteBanco);
    }

    exibirClientes(ClienteBanco);
  });