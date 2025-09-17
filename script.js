// =========================
// Part 1: JavaScript Basics
// =========================

// Example: Variables, Conditionals, and Output
document.getElementById("checkAgeBtn").addEventListener("click", function () {
  let age = prompt("Enter your age:");
  age = Number(age);

  if (age >= 18) {
    document.getElementById("basic-output").textContent = "You are an adult ✅";
  } else {
    document.getElementById("basic-output").textContent = "You are a minor 🚸";
  }
});

// =========================
// Part 2: Functions
// =========================

// Function to calculate total price
function calculateTotal(price, quantity) {
  return price * quantity;
}

// Function to format text
function formatString(str) {
  return str.toUpperCase();
}

document.getElementById("calcTotalBtn").addEventListener("click", function () {
  let total = calculateTotal(250, 3);
  let formatted = formatString("Your total is: " + total);
  document.getElementById("function-output").textContent = formatted;
});

// =========================
// Part 3: Loops
// =========================

document.getElementById("loopBtn").addEventListener("click", function () {
  let list = document.getElementById("numberList");
  list.innerHTML = ""; // clear old content

  // Example 1: for loop
  for (let i = 1; i <= 5; i++) {
    let li = document.createElement("li");
    li.textContent = "Number: " + i;
    list.appendChild(li);
  }

  // Example 2: while loop (countdown)
  let countdown = 3;
  while (countdown > 0) {
    let li = document.createElement("li");
    li.textContent = "Countdown: " + countdown;
    list.appendChild(li);
    countdown--;
  }
});

// =========================
// Part 4: DOM Manipulation
// =========================

// Example 1: Toggle a class
document.getElementById("toggleBtn").addEventListener("click", function () {
  document.getElementById("domText").classList.toggle("highlight");
});

// Example 2: Change text dynamically
document.getElementById("domText").addEventListener("mouseover", function () {
  this.textContent = "You hovered over me! 🖱️";
});

document.getElementById("domText").addEventListener("mouseout", function () {
  this.textContent = "I will change when you interact with me!";
});

// Example 3: Create new element
let newPara = document.createElement("p");
newPara.textContent = "✅ DOM element created dynamically!";
document.body.appendChild(newPara);
