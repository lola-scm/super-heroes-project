fetch("heroes.json")
  .then(res => res.json())
  .then(jsonHeroes => {
    console.log("Héros chargés :", jsonHeroes);

    }
  );

