let numero = 80;

while (numero < 0 || numero > 10) {
  numero = parseInt(prompt("Introduce un número entero entre 0 y 10:"));
  if (numero < 0 || numero > 10) {
    alert("El número introducido no es correcto. Por favor, introduzca un número entero entre 0 y 10.");
  }
}

let factorial = 1;
for (let i = 1; i <= numero; i++) {
  factorial *= i;
}

alert("El factorial de " + numero + " es " + factorial + ".");
