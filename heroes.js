fetch("heroes.json")
  .then(res => res.json())
  .then(jsonHeroes => {
    console.log("Héros chargés :", jsonHeroes);
    }
  );

function storeHeroes(heroes) {
  localStorage.setItem('heroes', JSON.stringify(heroes));
}

const heroes = JSON.parse(localStorage.getItem('heroes')) || [];
console.log("Sauvegardé:" , heroes);

