let min: number = 18;
let max: number = 40;
let personas: number;
let menores: number = 0;
let mayores: number = 0;

function Edades(min: number, max: number) {
  return Math.floor(Math.random() * (max - min)) + min;
}

for (personas = 0; personas < 270; personas++) {
  if (Edades(min, max) < 21) {
    menores += 1;
  } else mayores += 1;
}
console.log(" El total de menores de 21 años es: ", menores);
console.log(" El total de mayores de 21 años es: ", mayores);
console.log(" El total de personas en el local es: ", menores + mayores);
