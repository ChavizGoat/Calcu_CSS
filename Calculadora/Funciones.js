function borrar() {
    // Limpiar los valores de los inputs y el resultado
    document.getElementById('numero1').value = '';
    document.getElementById('numero2').value = '';
    document.getElementById('resultado').innerHTML = ''; // Borra el resultado anterior
}

function mostrarResultado(operacion, resultado) {
    const resultadoDiv = document.getElementById('resultado');
    resultadoDiv.innerHTML = `Resultado de la ${operacion}: ${resultado}`;
}

function suma() {
    const num1 = parseFloat(document.getElementById('numero1').value);
    const num2 = parseFloat(document.getElementById('numero2').value);
    const resultado = num1 + num2;
    mostrarResultado('suma', resultado);
}

function resta() {
    const num1 = parseFloat(document.getElementById('numero1').value);
    const num2 = parseFloat(document.getElementById('numero2').value);
    const resultado = num1 - num2;
    mostrarResultado('resta', resultado);
}

function division() {
    const num1 = parseFloat(document.getElementById('numero1').value);
    const num2 = parseFloat(document.getElementById('numero2').value);
    const resultado = num1 / num2;
    mostrarResultado('división', resultado);
}

function multiplicacion() {
    const num1 = parseFloat(document.getElementById('numero1').value);
    const num2 = parseFloat(document.getElementById('numero2').value);
    const resultado = num1 * num2;
    mostrarResultado('multiplicación', resultado);
}

// Añadiendo eventos a los botones
document.getElementById('suma').addEventListener('click', suma);
document.getElementById('resta').addEventListener('click', resta);
document.getElementById('division').addEventListener('click', division);
document.getElementById('multiplicacion').addEventListener('click', multiplicacion);
document.getElementById('borrar').addEventListener('click', borrar);
