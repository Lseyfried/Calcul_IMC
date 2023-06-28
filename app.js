const BMIData = [
  {
    name: "Maigreur",
    color: "midnightblue",
    range: [0, 18.5],
  },
  {
    name: "Bonne Santé",
    color: "green",
    range: [18.5, 25],
  },
  {
    name: "Surpoids",
    color: "lightcoral",
    range: [30, 35],
  },
  {
    name: "Obésité modérée",
    color: "orange",
    range: [30, 35],
  },
  {
    name: "Obésité sévère",
    color: "crimson",
    range: [35, 40],
  },
  {
    name: "Obésité morbide",
    color: "purple",
    range: 40,
  },
];
const tall = document.getElementById("taille");
const poids = document.getElementById("poids");
const button = document.getElementById("button");
const afficherResultat = document.querySelector(".bmi-value");
const afficherIMC = document.querySelector(".result");

button.addEventListener("click", handleForm);

function handleForm(e) {
  e.preventDefault();
  calculateBMI();
}

function calculateBMI() {
  const tallValue = tall.value;
  const poidsValue = poids.value;
  if (!tallValue || !poidsValue || tallValue <= 0 || poidsValue <= 0) {
    handleError();
    return;
  }
  const BMI = (poidsValue / Math.pow(tallValue / 100, 2)).toFixed(1);
  showResult(BMI);
}

function handleError() {
  afficherResultat.textContent = "Wops";
  afficherResultat.style.color = "inherit";
  afficherIMC.textContent = "Remplissez correctement les inputs";
}

function showResult(BMI) {
  const rank = BMIData.find((data) => {
    if (BMI >= data.range[0] && BMI < data.range[1]) return data;
    else if (typeof data.range === "number" && BMI >= data.range) return data;
  });
  afficherResultat.textContent = BMI;
  afficherResultat.style.color = `${rank.color}`;
  afficherIMC.textContent = `Résultat : ${rank.name}`;
}
