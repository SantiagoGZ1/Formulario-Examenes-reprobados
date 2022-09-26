const envio = document.querySelector('#check');
const name = document.querySelector('#name');
const mail = document.querySelector('#mail');
const subject1= document.querySelector('#subjects1');
const subject2 = document.querySelector('#subjects2');
const submit = document.querySelector('#containerSubmit');

envio.addEventListener('click', (e)=>{
  let nameValue = console.log(e,name.value);
  console.log(e,mail.value);
  let sibjetValue1 = console.log(e,subject1.value);
  let sibjetValue2 = console.log(e,subject2.value);
  if (name.value == ("Cofla") && e,mail.value == e,mail.value.includes ("@") && e,mail.value.includes (".com") ){
    alert("Bienvenido Cofla");
    if (subject1.value != subject2.value){
      alert(`Se elegieron ${e,subject1.value} y ${e,subject2.value} con exito.`);
      alert("Presione en el boton submit para enviar los datos.");
      containerSubmit.innerHTML = `<button style="color:red" type="submit" id="submit">Submit</button>`;
      submit.addEventListener('click', (e)=>{
        alert(`Los datos fueron enviados con exito. \nLe llegara un mail a "${e,mail.value}" con la información.`);
      });
    }else{
      alert("No se puede elegir dos veces la misma materia \nPor favor elija materias diferentes.");
    }
  }else{
    alert("Datos incorrectos");
  }
});


