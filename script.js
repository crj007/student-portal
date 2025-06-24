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
  const enteredPass = document.getElementById("passwordInput").value.trim();
  const username = document.getElementById("username").value.trim();
  const classSelected = document.getElementById("class").value;

  if (!username || !classSelected || !enteredPass) {
    alert("Please fill all fields");
    return;
  }

  if (enteredPass === generatedPass) {
    // Store user details in sessionStorage
    sessionStorage.setItem("username", username);
    sessionStorage.setItem("class", classSelected);
    window.location.href = "student.html";
  } else {
    alert("Incorrect password");
  }
}
