
// console.log("Hello")
// console.log(document.getElementById("carousel"))

const carousel = document.getElementById("carousel");
const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");

btn2.onclick = function () {
    carousel.scrollLeft += 400;
};

btn1.onclick = function () {
    carousel.scrollLeft -= 400;
};

function validateForm() {
  let isValid = true;
  document.getElementById("formError").innerText = "";
  ["name", "email","number"].forEach((field) => {
    const input = document.getElementById(field);
    if (input.value.trim() === "") {
      document.getElementById(field + "Error").innerText =
        "This field is required";
      isValid = false;
    }
  });

  const email = document.getElementById("email").value.trim();
  if (email !== "" && !email.endsWith("@gmail.com")) {
    document.getElementById("emailError").innerText = "Invalid email id";
    isValid = false;
  }

  if (!isValid) {
    document.getElementById("formError").innerText =
      "Fill all the required fields";
  }

  return isValid;
}

function clearError(id) {
  document.getElementById(id).innerText = "";
}

function checkEmpty(id) {
  const input = document.getElementById(id);
   if (input.value.trim() === "") {
    document.getElementById(id + "Error").innerText =
      "This field is required";
  } else if (
    id === "email" &&
    !input.value.trim().endsWith("@gmail.com")
  ) {
    document.getElementById("emailError").innerText =
      "Invalid email id";
  }
}









