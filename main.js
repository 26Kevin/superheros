// Nickname Generator CYU Assignment Kevin Patel

let superheros;
fetch("superherodata.txt")
  .then((rawData) => rawData.text())
  .then((strData) => (superheros = strData.split(/\r?\n/)));

// Output
let outputEl = document.getElementById("output");

// Button Event Listener
document.getElementById("btn").addEventListener("click", btnClicked);

function btnClicked() {
  let selection = document.getElementById("superhero-select").value;

  // Process Menu Selection
  if (selection === "displayall") {
    traverseDisplayAll();
  } else if (selection === "displayrandom") {
    traverseDisplayRandom();
  } else if (selection === "add") {
    traverseAdd();
  } else if (selection === "removelast") {
    traverseRemoveLast();
  } else if (selection === "removeindex") {
    traverseRemoveIndex();
  }
}

// Menu Option Functions
function traverseDisplayAll() {
  // Input
  // Output Results
  outputEl.innerHTML = "";
  for (let i = 0; i < superheros.length; i++) {
    outputEl.innerHTML += `<p>${i}: ${superheros[i]}</p>`;
  }
}

function traverseDisplayRandom() {
  // Input

  // Output Results
  outputEl.innerHTML = "";
  let randSuperhero = randomElement(superheros);
  outputEl.innerHTML += `<p>"${randSuperhero}"</p>`;
}

function traverseAdd() {
  // Input
  outputEl.innerHTML = "";
  let newSuperhero = prompt("Enter a new superhero: ");

  outputEl.innerHTML += `<p>Added Nickname: ${newSuperhero}`;
  superheros.push(newSuperhero);
}

function traverseRemoveLast() {
  // Input
  let last = superheros.pop();
  outputEl.innerHTML = `<p>Last Superhero Removed: ${last}`;
}

function traverseRemoveIndex() {
  // Input
  let index = +prompt("Enter a number");
  if (index >= 0 && index < superheros.length) {
    let superheroindex = superheros.splice(index, 1);
    outputEl.innerHTML = `<p>Nickname Remove at index ${index}: ${superheroindex}`;
  } else {
    outputEl.innerHTML = `<p>Invalid Index`;
  }
}
