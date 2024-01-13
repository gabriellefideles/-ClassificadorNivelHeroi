// Solicita ao usuário o nome e a quantidade de experiência (XP) do herói
const nomeDoHeroi = prompt("Digite o nome do herói:");
const xpDoHeroi = parseFloat(prompt("Digite a quantidade de experiência (XP) do herói:"));

// Verifica se a entrada de XP é válida
if (isNaN(xpDoHeroi)) {
  console.log("Por favor, insira uma quantidade válida de experiência.");
} else {
  // Classifica o nível do herói com base na XP
  let nivelDoHeroi;

  if (xpDoHeroi < 1000) {
    nivelDoHeroi = "Ferro";
  } else if (xpDoHeroi <= 2000) {
    nivelDoHeroi = "Bronze";
  } else if (xpDoHeroi <= 5000) {
    nivelDoHeroi = "Prata";
  } else if (xpDoHeroi <= 7000) {
    nivelDoHeroi = "Ouro";
  } else if (xpDoHeroi <= 8000) {
    nivelDoHeroi = "Platina";
  } else if (xpDoHeroi <= 9000) {
    nivelDoHeroi = "Ascendente";
  } else if (xpDoHeroi <= 10000) {
    nivelDoHeroi = "Imortal";
  } else {
    nivelDoHeroi = "Radiante";
  }

  // Exibe a mensagem de saída
  console.log(`O Herói de nome ${nomeDoHeroi} está no nível de ${nivelDoHeroi}`);
}

