/* const bebidas = ["Coca", "Fernet", "Cerveza"];
bebidas.push("Whisky");
bebidas.push("Vino");

const bebidaBlanca = bebidas.slice(3, 4);

console.log(bebidas)

console.log(bebidaBlanca) */

const bebidas = [];
let   cantidad     = 5;
//Empleo de do...while para cargar nombres en el array por prompt()
do{
   let entrada = prompt("Ingresar bebidas");
   bebidas.push(entrada.toUpperCase());
   console.log(bebidas.length);
}while(bebidas.length != cantidad)

//Salida con salto de línea usando join
alert(bebidas.join("\n"));
