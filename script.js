document.getElementById("calculateBtn").addEventListener("click", calculateDowry);

function calculateDowry() {
  let base = 100;

  const education = parseFloat(document.getElementById("education").value);
  const netWorth = parseFloat(document.getElementById("netWorth").value);
  const casteBonus = parseFloat(document.getElementById("caste").value);

  const ageRadios = document.querySelectorAll("input[name='age']");
  let ageCoefficient = 1;
  ageRadios.forEach(radio => {
    if (radio.checked) ageCoefficient = parseFloat(radio.value);
  });

  let skills = document.querySelectorAll(".skill");
  let skillBonus = 0;
  skills.forEach(skill => {
    if (skill.checked) skillBonus += parseFloat(skill.value);
  });

  let repCoef = 1;
  let repBoxes = document.querySelectorAll(".reputation");
  repBoxes.forEach(box => {
    if (box.checked) repCoef *= parseFloat(box.value);
  });

  let gossipPenalty = 0;
  let gossips = document.querySelectorAll(".gossip");
  gossips.forEach(g => {
    if (g.checked) gossipPenalty += parseFloat(g.value);
  });

  let finalPrice = base * education * netWorth * ageCoefficient * repCoef;
  finalPrice += casteBonus + skillBonus + gossipPenalty;

  const result = document.getElementById("result");
  result.innerText = "Final Price: $" + finalPrice.toFixed(2);

  result.style.color = finalPrice >= 150 ? "green" : "red";
}
