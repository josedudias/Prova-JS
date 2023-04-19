function prova() {
  let anos = Number(document.getElementById("anos").value);
  let linguagem = document.getElementById("linguagem").value;

  let salario = 0;

  if (anos <= 0) {
    document.getElementById("resultado").innerHTML = `Digite um valor válido`;
  } else if (anos < 5) {
    switch (linguagem) {
      case "javascript":
        salario = 3000;
        break;
      case "react":
        salario = 5000;
        break;
      case "node":
        salario = 4000;
        break;
    }
  } else if (anos >= 5) {
    switch (linguagem) {
      case "javascript":
        salario = 6000;
        break;
      case "react":
        salario = 8000;
        break;
      case "node":
        salario = 7000;
        break;
    }
  }

  if (salario == 0) {
    document.getElementById("resultado").innerHTML = `Digite um valor válido`;
  } else if (salario < 4500) {
    document.getElementById("resultado").innerHTML = `Salário: R$ ${salario}`;
    document.getElementById(
      "expectativa"
    ).innerHTML = `Expectativa de Vaga é alta`;
  } else if (salario >= 4500 && salario <= 6000) {
    document.getElementById("resultado").innerHTML = `Salário: R$ ${salario}`;
    document.getElementById(
      "expectativa"
    ).innerHTML = `Expectativa de Vaga é média`;
  } else if (salario > 6000) {
    document.getElementById("resultado").innerHTML = `Salário: R$ ${salario}`;
    document.getElementById(
      "expectativa"
    ).innerHTML = `Expectativa de Vaga é baixa`;
  }
}
