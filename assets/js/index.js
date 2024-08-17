import { Aguila } from "./clases/Aguila.mjs";
import { Leon } from "./clases/Leon.mjs";
import { Lobo } from "./clases/Lobo.mjs";
import { Oso } from "./clases/Oso.mjs";
import { Serpiente } from "./clases/Serpiente.mjs";
import { iife } from "./iife.mjs";

const instanciaAnimal = { Aguila, Leon, Lobo, Oso, Serpiente}

document.getElementById('btnRegistrar').addEventListener('click', async () => {
  const nombre = document.getElementById('animal').value;
  const edad = document.getElementById('edad').value;
  const comentarios = document.getElementById('comentarios').value;
  const { imagen, sonido } = await iife.obtenerAnimal(nombre);
  
  if (!nombre || !edad || !comentarios) { //condicional para que se rellenen todos los campos
    alert('Por favor, complete todos los campos.');
    return;
  }
  
  //instancia de animal
  let animal = new instanciaAnimal[nombre](nombre, edad, imagen, comentarios, sonido);
  
  //se agrega un animal a la lista
  iife.agregarAnimal(animal)
  
  iife.cardAnimal(iife.animalArray, 'Animales')
})

document.getElementById('animal').addEventListener("change", async (event) => {
  const { imagen, sonido } = await iife.obtenerAnimal(event.target.value); // -> animal seleccionado
  const nombreAnimal = event.target.value;

  const preview = document.getElementById('preview');
  preview.innerHTML = `
    <img src="assets/imgs/${imagen}" class="img-fluid rounded h-100 object-fit-cover" alt="${nombreAnimal}">
  `;
})

