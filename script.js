let generatedPass = "";

function generatePassword() {
  const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  generatedPass = "";
  for (let i = 0; i < 8; i++) {
    generatedPass += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  document.getElementById("generatedPassword").textContent = `Copy this password: ${generatedPass}`;
}

function login() {
  const username = document.getElementById("username").value.trim();
  sessionStorage.setItem("roll", document.getElementById("roll").value.trim());
  const classSelected = document.getElementById("class").value;
  const board = document.getElementById("board").value;
  const enteredPass = document.getElementById("passwordInput").value.trim();

  if (!username || !classSelected || !board || !enteredPass) {
    alert("Please fill all fields");
    return;
  }

  if (enteredPass === generatedPass) {
    sessionStorage.setItem("username", username);
    sessionStorage.setItem("class", classSelected);
    sessionStorage.setItem("board", board);
    window.location.href = "student.html";
  } else {
    alert("Incorrect password");
  }
}
function clearFields() {
  document.getElementById("roll").value = "";
  document.getElementById("username").value = "";
  document.getElementById("board").value = "";
  document.getElementById("class").value = "";
  document.getElementById("passwordInput").value = "";
  document.getElementById("generatedPassword").textContent = "";
}

