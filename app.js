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

button.addEventListener("click", (e) => {
  e.preventDefault();
  const tallValue = tall.value;
  const poidsValue = poids.value;
  let BMI = Number((poidsValue * (tallValue / 100)) / 2);
  return showResult(BMI);
});

const showResult = (IMC) => {
  const rank = BMIData.find((data) => {
    if (IMC >= data.range[0] && IMC < data.range[1]) return data;
  });
  afficherIMC.textContent = IMC;
  afficherIMC.style.color = rank.color;
  afficherResultat.textContent = `${rank.name}`;
};
