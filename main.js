// login button
const btnLogin = document.getElementById("btnLogin");

// events
btnLogin.onclick = () => {
  window.location.href = "./home.html";
};

const signupBtn = document.getElementById("signup-modal");

function signUpTrigger() {
  signupBtn.style.display = "flex";
}
function signUpTriggerClose() {
  signupBtn.style.display = "none";
}
