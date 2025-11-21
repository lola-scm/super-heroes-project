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

function saveHero() {
    // const addBtn = document.getElementById("add-hero-btn"); 
    // addBtn.addEventListener("click", function(event) {
        const heroname = document.getElementById("heroname").value;
        const age = document.getElementById("age").value;
        const city = document.getElementById("city").value;
        const power = document.getElementById("power").value;
        console.log(heroname);
        console.log(age);
        console.log(city);
        console.log(power);
        const newHero = { heroname, age, city, power };
        console.log(newHero)

        // recupere la valeur heroes du local storage
        // sous forme json (json.parse ou json.stringify)
        // ajouter le newHero à la suite du table
        // ajouter le nouveau tableau dans le local storage
        // avec la forme qui correspond (json.parse ou json.stringify)
    // });
};




let stock = JSON.parse(localStorage.getItem("heroes")) || []
