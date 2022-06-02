let min: number = 18;
let max: number = 41;
let personas: number;
let menores: number = 0;
let mayores: number = 0;
//usar nombres de variables empezando con minuscula y ademas deben ser una accion ej: cargarEdadAleatoria
function cargarEdadesAzar(min: number, max: number) {
  return Math.floor(Math.random() * (max - min)) + min; //los de 40 entran???
}

for (personas = 0; personas < 270; personas++) {
  if (cargarEdadesAzar(min, max) < 21) {
    menores += 1;
  } else mayores += 1;
}
console.log(" El total de menores de 21 años es: ", menores);
console.log(" El total de mayores de 21 años es: ", mayores);
console.log(" El total de personas en el local es: ", menores + mayores);
// esta muy bien tu solucion
