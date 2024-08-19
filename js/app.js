function criptografar_descriptografar(opcao) {
  let texto = document.getElementById("mensagem-input").value;
  let textoCriptografado = "";
  if (opcao == 0) {
    texto = texto
      .replace(/e/g, "enter")
      .replace(/a/g, "ai")
      .replace(/i/g, "imes")
      .replace(/o/g, "ober")
      .replace(/u/g, "ufat");
  } else if (opcao == 1) {
    texto = texto
      .replace(/enter/g, "e")
      .replace(/imes/g, "i")
      .replace(/ai/g, "a")
      .replace(/ober/g, "o")
      .replace(/ufat/g, "u");
  }
  textoCriptografado = texto;

  if (texto != "") {
    document.getElementById("imagem-output").style.display = "none";
    document.getElementById("titulo-output").style.display = "none";
    document.getElementById("mensagem-output").innerHTML = textoCriptografado;
  }
}

const botaoCopiar = document.getElementById("botao-copiar");
botaoCopiar.addEventListener("click", () => {
  let texto = document.getElementById("mensagem-output").innerText;
  navigator.clipboard.writeText(texto);
  if (ativado) {
    lerTexto(".botao", "Copiar!");
  }
});

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

function trocarImagem() {
  const imgTema = document.getElementById("imagem-tema");
  const imgLeitor = document.getElementById("imagem-voz");
  const imgMenu = document.getElementById("imagem-menu");

  if (document.body.classList.contains("light")) {
    imgTema.src = "imgs/moon-dark.png";
    imgLeitor.src = "imgs/voice-dark.png";
    imgMenu.src = "imgs/menu-light.png";
  } else {
    imgTema.src = "imgs/sun-light.png";
    imgLeitor.src = "imgs/voice-light.png";
    imgMenu.src = "imgs/menu-dark.png";
  }
}
function trocarTema() {
  document.body.classList.toggle("light");
  trocarImagem();
}
document.getElementById("mudarTema").addEventListener("click", trocarTema);

function lerTexto(tag, texto) {
  document.querySelector(tag);
  responsiveVoice.speak(texto, "Brazilian Portuguese Female", { rate: 1.2 });
}
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

window.gtranslateSettings = {
  default_language: "pt",
  native_language_names: true,
  languages: ["pt", "en"],
  wrapper_selector: ".gtranslate_wrapper",
};
