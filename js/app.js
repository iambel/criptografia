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

    texto = texto.replace(/imes/g, "i");
    texto = texto.replace(/ai/g, "a");
    texto = texto.replace(/ober/g, "o");
    texto = texto.replace(/ufat/g, "u");
  }
  textoCriptografado = texto;

  if (texto != "") {
    document.getElementById("imagem-output").style.display = "none";
    document.getElementById("titulo-output").style.display = "none";
    document.getElementById("mensagem-output").innerHTML = textoCriptografado;
  }
}
//--------------------------------------------------

function copiar() {
  let texto = document.getElementById("mensagem-output").innerText;
  navigator.clipboard.writeText(texto);
}
//--------------------------------------------------
let imgTemaClaro = "imgs/sun-light.png";
let imgTemaEscuro = "imgs/moon-dark.png";

let imgLeitorClaro = "imgs/voice-light.png";
let imgLeitorEscuro = "imgs/voice-dark.png";

let imgMenuClaro = "imgs/menu-dark.png";
let imgMenuEscuro = "imgs/menu-light.png";

function trocarImagem() {
  const imgTema = document.getElementById("imagem-tema");
  const imgLeitor = document.getElementById("imagem-voz");
  const imgMenu = document.getElementById("imagem-menu");
  if (document.body.classList.contains("light")) {
    imgTema.src = imgTemaEscuro;
    imgLeitor.src = imgLeitorEscuro;
    imgMenu.src = imgMenuEscuro;
  } else {
    imgTema.src = imgTemaClaro;
    imgLeitor.src = imgLeitorClaro;
    imgMenu.src = imgMenuClaro;
  }
}
//--------------------------------------------------

function trocarTema() {
  document.body.classList.toggle("light");
  trocarImagem();
}
//--------------------------------------------------

const mudarTema = document.getElementById("mudarTema");
mudarTema.addEventListener("click", function () {
  trocarTema();
});
//--------------------------------------------------

function lerTexto(tag, texto) {
  document.querySelector(tag);
  responsiveVoice.speak(texto, "Brazilian Portuguese Female", { rate: 1.2 });
}

//--------------------------------------------------
let ativado = false;
function ativarLeitor() {
  ativado = ativado ? false : true;
  if (ativado) {
    lerTexto(
      ".imagem-leitor-texto",
      "Leitor de texto ativado! Criptografia: digite seu texto por aqui em letras minúsculas e sem acentos! No momento, Nenhuma mensagem foi encontrada! Digite um texto que você deseja criptografar ou descriptografar "
    );
  } else {
    lerTexto(".imagem-leitor-texto", "Leitor de texto desativado");
  }
}
//--------------------------------------------------

const botaoCopiar = document.getElementById("botao-copiar");
botaoCopiar.addEventListener("click", () => {
  copiar();
  if (ativado) {
    lerTexto(".botao", "Copiar!");
  }
});
//--------------------------------------------------
const botaoDescriptografar = document.getElementById("botao-descriptografar");
botaoDescriptografar.addEventListener("click", () => {
  criptografar_descriptografar(1);

  let mensagem =
    "descriptografar. A frase:  " +
    document.getElementById("mensagem-input").value +
    " foi descriptografada para " +
    document.getElementById("mensagem-output").innerHTML;
  if (ativado) {
    lerTexto(".botao", mensagem);
  }
});

//--------------------------------------------------

const botaoCriptografar = document.getElementById("botao-criptografar");
botaoCriptografar.addEventListener("click", () => {
  criptografar_descriptografar(0);
  let mensagem =
    "Criptografar. A frase:  " +
    document.getElementById("mensagem-input").value +
    " foi criptografada para " +
    document.getElementById("mensagem-output").innerHTML;
  if (ativado) {
    lerTexto(".botao", mensagem);
  }
});
//--------------------------------------------------
window.gtranslateSettings = {
  default_language: "pt",
  native_language_names: true,
  languages: ["pt", "en"],
  wrapper_selector: ".gtranslate_wrapper",
};

//site do icone pra nao ser processadakkkkkkk: <a target="_blank" href="https://icons8.com/icon/112468/search">Pesquisar</a> ícone por <a target="_blank" href="https://icons8.com">Icons8</a>
