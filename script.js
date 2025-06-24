let generatedPass = "";

function generatePassword() {
  const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  generatedPass = "";
  for (let i = 0; i < 8; i++) {
    generatedPass += chars.charAt(Math.floor(Math.random() * chars.length));
  }

  sessionStorage.setItem("generatedPass", generatedPass);
  sessionStorage.removeItem("usedPass");

  const passwordDisplay = document.getElementById("generatedPassword");
  passwordDisplay.textContent = `Copy this password: ${generatedPass}`;

  // Re-trigger animation
  passwordDisplay.classList.remove("bounce");
  void passwordDisplay.offsetWidth;  // Force DOM reflow
  passwordDisplay.classList.add("bounce");
}



function login() {
  const username = document.getElementById("username").value.trim();
  const roll = document.getElementById("roll").value.trim();
  const classSelected = document.getElementById("class").value;
  const board = document.getElementById("board").value;
  const enteredPass = document.getElementById("passwordInput").value.trim();

  if (!username || !roll || !classSelected || !board || !enteredPass) {
    alert("Please fill all fields");
    return;
  }

  const storedPass = sessionStorage.getItem("generatedPass");
  const usedOnce = sessionStorage.getItem("usedPass");

  if (enteredPass === storedPass && !usedOnce) {
    sessionStorage.setItem("usedPass", enteredPass);
    sessionStorage.setItem("username", username);
    sessionStorage.setItem("roll", roll);
    sessionStorage.setItem("class", classSelected);
    sessionStorage.setItem("board", board);
    window.location.href = "student.html";
  } else if (usedOnce) {
    alert("❌ This password has already been used. Please generate a new one.");
  } else {
    alert("Incorrect password");
  }
}

function clearFields() {
  document.getElementById("roll").value = "";
  document.getElementById("username").value = "";
  document.getElementById("class").value = "";
  document.getElementById("board").value = "";
  document.getElementById("passwordInput").value = "";
  document.getElementById("generatedPassword").textContent = "";
}
