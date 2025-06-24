let generatedPass = "";

function generatePassword() {
  const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  generatedPass = "";
  for (let i = 0; i < 8; i++) {
    generatedPass += chars.charAt(Math.floor(Math.random() * chars.length));
  }

  const display = document.getElementById("generatedPassword");
  display.textContent = `Copy this password: ${generatedPass}`;

  // Add bounce animation
  display.classList.remove("password-bounce");
  void display.offsetWidth; // trigger reflow
  display.classList.add("password-bounce");
}

function login() {
  const username = document.getElementById("username").value.trim().toLowerCase();
  const roll = document.getElementById("roll").value.trim();
  const classSelected = document.getElementById("class").value;
  const board = document.getElementById("board").value;
  const enteredPass = document.getElementById("passwordInput").value.trim();

  if (!username || !roll || !classSelected || !board || !enteredPass) {
    alert("Please fill all fields");
    return;
  }

  if (enteredPass === generatedPass) {
    sessionStorage.setItem("username", username);
    sessionStorage.setItem("roll", roll);
    sessionStorage.setItem("class", classSelected);
    sessionStorage.setItem("board", board);

    // Invalidate password so it can't be reused
    generatedPass = "";

    window.location.href = "student.html";
  } else {
    // Shake animation for wrong password
    const input = document.getElementById("passwordInput");
    input.classList.remove("shake");
    void input.offsetWidth;
    input.classList.add("shake");

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
  generatedPass = "";
}
