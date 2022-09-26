const envio = document.querySelector('#check');
const name = document.querySelector('#name');
const mail = document.querySelector('#mail');
const subject1= document.querySelector('#subjects1');
const subject2 = document.querySelector('#subjects2');


envio.addEventListener('click', (e)=>{
  let nameValue = console.log(e,name.value);
  console.log(e,mail.value);
  let sibjetValue1 = console.log(e,subject1.value);
  let sibjetValue2 = console.log(e,subject2.value);
  if (name.value == ("Cofla") && e,mail.value == e,mail.value.includes ("@") && e,mail.value.includes (".com") ){
    alert("Bienvenido Cofla");
    if (subject1.value != subject2.value){
      alert(`Se elegieron ${e,subject1.value} y ${e,subject2.value} con exito. \nDebe estar pendiente de su correo "${e,mail.value}" para recibir mas informacion`);
    }else{
      alert("No se puede elegir dos veces la misma materia \n Por favor elija otra materia");
    }
  }else{
    alert("Datos incorrectos");
  }
});


