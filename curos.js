//Cofla 9
const nombre = document.getElementById("name");
const email = document.getElementById("email");
const subjet = document.getElementById("subjet");
const boton = document.getElementById("btn-enviar");
const resultado = document.querySelector(".resultado");

boton.addEventListener("click", (e) => {
  //Cuando al botón se le de click
  e.preventDefault(); //Cancela el evento por defecto, en este caso el submit
  let error = validarCampos();
  if (error[0]) {
    //Si hay error (true)
    resultado.innerHTML = error[1];
    resultado.classList.add("red");
  } else {
    resultado.innerHTML = "Solictud enviada";
    resultado.classList.add("green");
    resultado.classList.remove("red");
  }
});

const validarCampos = () => {
  let error = [];
  if (nombre.value.lenght < 5 || nombre.value.lenght > 40) {
    error[0] = true;
    error[1] = "El nombre es invalido";
    return error;
  } else if (
    email.value.lenght < 5 ||
    email.value.lenght > 40 ||
    email.value.indexOf("@") == -1 ||
    email.value.indexOf(".") == -1
  ) {
    error[0] = true;
    error[1] = "El email es incorrecto";
    return error;
  } else if (subjet.value.lenght < 4 || subjet.value.lenght > 40) {
    error[0] = true;
    error[1] = "La materia es incorrecta";
    return error;
  }

  error[0] = false;
  return error;
};
