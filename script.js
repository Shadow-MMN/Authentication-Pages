const showPasswordContainer = document.getElementById(
  "show-password-container"
);
const showPasswordContainerForConfrimPassword = document.getElementById(
  "show-password-container-for-confirm-password"
);
const password = document.getElementById("Password");
const confrimPassword = document.getElementById("Confrim-Password");
const showPassword = `<i class="fa-solid fa-eye text-gray-300"></i>`;
const hidePassword = `<i class="fa-solid fa-eye-slash text-gray-300"></i>`;
function toggleShowPassword() {
  showPasswordContainer.innerHTML === showPassword
    ? (showPasswordContainer.innerHTML = hidePassword)
    : (showPasswordContainer.innerHTML = showPassword);
  if (showPasswordContainer.innerHTML === showPassword) {
    password.type = "text";
  } else if (showPasswordContainer.innerHTML === hidePassword) {
    password.type = "password";
  }
}
function toggleShowPasswordForConfirmPassword() {
  showPasswordContainerForConfrimPassword.innerHTML === showPassword
    ? (showPasswordContainerForConfrimPassword.innerHTML = hidePassword)
    : (showPasswordContainerForConfrimPassword.innerHTML = showPassword);
  if (showPasswordContainerForConfrimPassword.innerHTML === showPassword) {
    confrimPassword.type = "text";
  } else if (
    showPasswordContainerForConfrimPassword.innerHTML === hidePassword
  ) {
    confrimPassword.type = "password";
  }
}
showPasswordContainer.addEventListener("click", toggleShowPassword);
showPasswordContainerForConfrimPassword.addEventListener(
  "click",
  toggleShowPasswordForConfirmPassword
);
