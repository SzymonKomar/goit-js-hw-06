const formSelect = document.querySelector("form");
const User = {
  email: "",
  password: "",
};
function validationFunction(event) {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;
  if (email.value === "" || password.value === "") {
    return alert("Wypełnij wszystkie wskazane pola !");
  } else {
    const newUser = Object.create(User);
    newUser.email = email.value;
    newUser.password = password.value;
    console.log(newUser);
  }
  formSelect.reset();
}
formSelect.addEventListener("submit", validationFunction);
