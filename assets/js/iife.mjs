const iife = (() => {
  const animalArray = []

  async function obtenerAnimal(nombre) {
    try {
      const response = await fetch("animales.json")
      const data = await response.json()
      const animalData = data.animales.find(animal => animal.name === nombre);
      return animalData

    } catch (error) {
      console.error('Error al obtener la imagen del animal:', error)
    }
  }

  function agregarAnimal(animal) {
    animalArray.push(animal)
  }

  function playSound(src) {
    const audio = new Audio(src);
    audio.play();
  }

  function cardAnimal(animales, id) {
    let cards = animales.map(animal => {
      return `
      <div class="cardAnimal my-2">
        <img src="./assets/imgs/${animal.Img}" alt="${animal.Nombre}" class="card-img-top">
        <div class="card-body text-center">
          <h5 class="card-title">${animal.Nombre}</h5>
          <button class="btn btn-light" onclick="playSound('./assets/sounds/${animal.Sonido}')">Reproducir sonido</button>
        </div>
      </div>
      `
    }).join('')

    document.getElementById(id).innerHTML = cards
  }


  function iifeListoNowPlay() {
    window.playSound = playSound;
  }

  iifeListoNowPlay();


  return {
    obtenerAnimal,
    cardAnimal,
    agregarAnimal,
    animalArray
  }
})()


export { iife }
