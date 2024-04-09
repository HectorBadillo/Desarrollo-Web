// Definir variables
let vv= 0, IVA=0, pv=0;

// Entrada de datos
vv = Number(prompt('Ingrese valor de venta: '));

//Proceso
IVA = vv*(0.19);
pv = vv+IVA;

// Salida de datos
/*
document.write('Valor de venta: ', vv, '<br>');
document.write('IVA: ', IVA, '<br>');
document.write('Precio de venta: ', pv);
*/
document.write(`Valor de venta: ${vv} <br>Iva: ${IVA} <br>Precio de venta: ${pv}`);

document.write(`<pre>
                Valor de venta:     ${vv}
                Iva:                ${IVA}
                Precio de venta:    ${pv}
                </pre>`);