document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");

  form.addEventListener("submit", function (e) {
    const camposObrigatorios = [
      "nome",
      "cnpj",
      "endereco",
      "telefone",
      "email",
      "cidade",
      "estado"
    ];

    let formularioValido = true;

    camposObrigatorios.forEach((id) => {
      const campo = document.getElementById(id);
      if (!campo.value.trim()) {
        campo.style.border = "2px solid red";
        formularioValido = false;
      } else {
        campo.style.border = "1px solid #ccc";
      }
    });

    if (!formularioValido) {
      e.preventDefault();
      alert("Por favor, preencha todos os campos obrigatórios.");
    }
  });
});
