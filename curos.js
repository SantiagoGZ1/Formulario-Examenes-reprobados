const envio = document.querySelector('#check');
const name = document.querySelector('#name');
const mail = document.querySelector('#mail');
const subject = document.querySelector('#subjects');


envio.addEventListener('click', (e)=>{
  let nameValue = console.log(e,name.value);
  console.log(e,mail.value);
  let sibjetValue = console.log(e,subject.value);
  if (e,mail.value == e,mail.value.includes('@')){
    console.log("q");
  }else{
    console.log("si hay algo");
  }
});


//const mailRegex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
//name.value == "Cofla" && 