const formSelect = document.querySelector("form");
function validationFunction(event) {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;
  if (email.value === "" || password.value === "") {
    return alert("Wypełnij wszystkie wskazane pola !");
  } else {
    let feedback = `email: ${email.value}
password: ${password.value}`;
    console.log(feedback);
  }
  formSelect.reset();
}
formSelect.addEventListener("submit", validationFunction);
