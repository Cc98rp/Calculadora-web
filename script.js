function agregarValor(valor) {
  const pantalla = document.getElementById("resultado");
  pantalla.value += valor;
}

function borrar() {
  const pantalla = document.getElementById("resultado");
  pantalla.value = "";
}

function calcularResultado() {
  const pantalla = document.getElementById("resultado");
  try {
    pantalla.value = eval(pantalla.value.replace("÷", "/").replace("×", "*"));
  } catch {
    pantalla.value = "Error";
  }
}