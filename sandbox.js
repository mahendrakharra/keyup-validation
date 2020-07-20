
    //Js file for this project

const main = document.querySelector('.main-div');
const inputs = document.querySelectorAll('input');
const passShow = document.querySelector('#eye');
const pass = document.querySelector('#pass');
const patterns = {
                  name : /^([a-zA-Z]+)\s([a-zA-Z]+)(\s[a-zA-Z]+)?$/,
                  email : /^([a-z\d-\.]+)@([a-z\d\.-]+)\.[a-z]{2,5}(\.[a-z]{2,5})?$/,
                  username : /^[a-zA-Z\d]{5,12}$/,
                  password : /^([\w@-]{8,20})$/,
                  number : /^[\d]{10}$/
                };
   function validateForm(field, regex){
      if(regex.test(field.value)){
          field.className = "valid";
      }else if(field.value === ""){
        field.className = "basic";
      }else{
        field.className = "invalid";

      }
   }
    inputs.forEach(input => {
      input.addEventListener('keyup', e => {
         validateForm(e.target, patterns[e.target.attributes.name.value]);
    });
   });
   passShow.addEventListener('click', e => {
            passShow.className = "fa fa-eye";
            if(pass.type === "password"){
               pass.type = "text";
            }
   });
   passShow.addEventListener('dblclick', e => {
            passShow.className = "fa fa-eye-slash";
            if(pass.type === "text"){
               pass.type = "password";
            }
   });
