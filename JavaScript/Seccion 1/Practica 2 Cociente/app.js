//Definir variables
let n1, n2, cociente, residuo;

//Entrada de datos
n1 = Number(prompt('Ingrese un numero entero: '));
n2 = Number(prompt('Ingrese otro numero: '));

//Proceso
cociente = n1/n2;
residuo = n1%n2;

//Salida de datos
document.write('Cociente: ', cociente + '<br>');
document.write('Residuo', residuo);