// Defining the variable and function
const form = document.getElementById("form");
const email = document.getElementById("email");
const regex = /^[a-zA-Z]+@[a-zA-Z.-]+.[a-z]{2,4}$/;
const setErrorMsg = (parent, whatEl, msg, className) => {
  // Defining the variable and function
  const newElement = document.createElement(whatEl);
  newElement.innerText = msg;
  newElement.classList.add(className);
  setTimeout(() => {
    newElement.classList.add("show");
  }, 100);

  // Procede...
  return parent.appendChild(newElement);
};

// Procede...
form.addEventListener("submit", (e) => {
  const isValid = regex.test(email.value);

  if (!isValid) {
    e.preventDefault();
    // errorMsg.className = "show";
    setErrorMsg(form, "small", "Oops! Please check your email", "error-msg");
  } else {
    e.submit();
  }
});
