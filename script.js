const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");
const btnCopiar = document.querySelector(".btn-copiar");
const contenedorMensaje = document.querySelector(".contenedor-mensaje");
const h3Element = contenedorMensaje.querySelector('h3');
const pElement = contenedorMensaje.querySelector('p');

function btnEncriptar() {
  const textoEncriptado = encriptar(textArea.value)
  mensaje.value = textoEncriptado
  textArea.value = ""
  mensaje.style.backgroundImage = 'none'
  h3Element.style.display = 'none';
  pElement.style.display = 'none';
}


function encriptar(stringEncriptado) {
  let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
  stringEncriptado = stringEncriptado.toLowerCase()

  for (let i = 0; i < matrizCodigo.length; i++) {
    if (stringEncriptado.includes(matrizCodigo[i][0])) {
      stringEncriptado = stringEncriptado.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
    }
    
  }
  return stringEncriptado
}

function btnDesencriptar() {
  const textoEncriptado = textArea.value; 
  const textoDesencriptado = desEncriptar(textoEncriptado);
  mensaje.value = textoDesencriptado;
  textArea.value = ""; 
  mensaje.style.backgroundImage = 'none'
  h3Element.style.display = 'none';
  pElement.style.display = 'none';
}


function desEncriptar(stringDesencriptado) {
  let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
  stringDesencriptado = stringDesencriptado.toLowerCase()

  for (let i = 0; i < matrizCodigo.length; i++) {
    if (stringDesencriptado.includes(matrizCodigo[i][1]) && matrizCodigo[i][1] != "") {
      stringDesencriptado = stringDesencriptado.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])
    }
    
  }
  return stringDesencriptado
}


btnCopiar.addEventListener("click", () => {
  var contenido = document.querySelector(".mensaje");
  if (contenido) {
    navigator.clipboard.writeText(contenido.value)
      .then(() => {
        console.log("Texto copiado: " + contenido.value);
      })
      .catch((error) => {
        console.error('Error al copiar al portapapeles: ', error);
      });
  } else {
    console.error('No se encontró ningún mensaje');
  }
});



