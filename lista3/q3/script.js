    class Transacao {
      constructor(descricao, valor) {
        this.descricao = descricao;
        this.valor = parseFloat(valor);
      }
    }

    const form = document.getElementById("transaction-form");
    const descriptionInput = document.getElementById("description");
    const amountInput = document.getElementById("amount");
    const transactionList = document.getElementById("transaction-list");
    const totalAmount = document.getElementById("total-amount");

    let saldo = 0;

    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const descricao = descriptionInput.value;
      const valor = amountInput.value;

      if (descricao && valor) {
        const transacao = new Transacao(descricao, valor);
        adicionarTransacao(transacao);
        descriptionInput.value = "";
        amountInput.value = "";
      }
    });

    function adicionarTransacao(transacao) {
      const row = document.createElement("tr");
      const valorCell = document.createElement("td");

      if (transacao.valor > 0) {
        valorCell.textContent = transacao.valor.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
        valorCell.classList.add("positive");
      } else {
        valorCell.textContent = transacao.valor.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
        valorCell.classList.add("negative");
      }

      row.innerHTML = `
        <td>${transacao.descricao}</td>
      `;
      row.appendChild(valorCell);
      transactionList.appendChild(row);

      saldo += transacao.valor;
      atualizarSaldo();
    }

    function atualizarSaldo() {
      totalAmount.textContent = saldo.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
    }
