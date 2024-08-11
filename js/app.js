function criptografar_descriptografar(opcao) {
  criptografar = 0;
  descriptografar = 1;
  let texto = document.getElementById("mensagem-input").value;
  if (opcao == criptografar) {
    texto = texto.replace(/e/g, "enter");
    texto = texto.replace(/a/g, "ai");
    texto = texto.replace(/i/g, "imes");
    texto = texto.replace(/o/g, "ober");
    texto = texto.replace(/u/g, "ufat");
  } else if (opcao == descriptografar) {
    texto = texto.replace(/enter/g, "e");
    texto = texto.replace(/ai/g, "a");
    texto = texto.replace(/imes/g, "i");
    texto = texto.replace(/ober/g, "o");
    texto = texto.replace(/ufat/g, "u");
  }
  textoCriptografado = texto;
  document.getElementById("mensagem-output").innerHTML = textoCriptografado;
  document.getElementById("titulo-output").style.display = "none";
  document.getElementById("imagem-output").style.display = "none";
}
function copiar() {
  let texto = document.getElementById("mensagem-output").innerText;
  navigator.clipboard.writeText(texto);
}
/*botao pra mudar o tema */
let imgTemaClaro = "imgs/sun-light.png";
let imgTemaEscuro = "imgs/moon-dark.png";
function trocarImagem() {
  const img = document.getElementById("imagem-tema");
  if (document.body.classList.contains("light")) {
    img.src = imgTemaEscuro;
  } else {
    img.src = imgTemaClaro;
  }
}
function trocarTema() {
  document.body.classList.toggle("light");
  trocarImagem();
}
const mudarTema = document.getElementById("mudarTema");
mudarTema.addEventListener("click", function () {
  trocarTema();
});

//site do icone pra nao ser processadakkkkkkk: <a target="_blank" href="https://icons8.com/icon/112468/search">Pesquisar</a> ícone por <a target="_blank" href="https://icons8.com">Icons8</a>
