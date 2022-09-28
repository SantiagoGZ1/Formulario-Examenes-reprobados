const name = document.getElementById('name');
const email = document.getElementById('email');
const subjet = document.getElementById('subjet');
const boton = document.getElementById('btn-enviar');
//const resultado = querySelector("resultado")

boton,addEventListener("click",(e)=>{//Cuando al botón se le de click
  e.preventDefault();//Cancela el evento por defecto, en este caso el submit
  let erro = validarCampos();
  if(error[0]){
    document.querySelector("resultado").innerHTML = error[1];
  }else{
    resultado.innerHTML = "Solictud enviada";
    resultado.classList.add("add");
  }
})
const validarCampos=()=>{
  let error = [];
  if (nombre.lenght <5){
    error[0] = true;
    error[1] = "El nombre no puede contener menos de 5 caracteres";
    return error;
  }else if (nombre.lenght >40){
    error[0] = true;
    error[1] = "El nombre no puede contener mas de 40 caracteres";
    return error;
  }
}