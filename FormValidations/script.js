const form = document.querySelector('#form');
const username = document.querySelector('#user-name');
const useremail = document.querySelector('#user-email');
const userphone = document.querySelector('#user-number')
const userpasword = document.querySelector('#user-password');
const usercheckpass = document.querySelector('#usercheckpass');



form.addEventListener('submit', (e) => {
    e.preventDefault();
    validations();

})


function validations() {

     let userName = username.value.trim();
     let userEmail = useremail.value.trim();
     let userPhoneN = userphone.value.trim();
     let userPass = userpasword.value.trim();
     let usercPass = usercheckpass.value.trim();

       if(userName === ""){
         seterr(username, 'username cannto be blank');
       }else if(userName.length <3){
        seterr(username,'usename min 3 char');
       }else{
         setsuccese(username,'username is correct')
       }
       
        if(userEmail === ''){
            seterr(useremail, 'useremail cannto be blank');
        }else{
            setsuccese(useremail,'useremail is correct')
        }
        if(userPhoneN === ''){
            seterr(userphone, 'Phone cannto be blank');
        }
        else if(userPhoneN.length < 10 ){
            seterr(userphone, 'Phone number must be 10 dight');
        }else{
            setsuccese(userphone,'phone number is correct');
        }

        if(userPass === ''){
            seterr(userpasword, 'password cannto be blank');
        }
        else if(userPass.length < 8)
        {
            seterr(userpasword, 'password min 8 digit');
        }else{
            setsuccese(userpasword,'password is correct');
        }

        if(usercPass == ""){
            seterr(usercheckpass, 'password check  cannto be blank');
        }
        else if(( usercPass.length < userPass.length)||(usercPass.length > userPass.length)){
            seterr(usercheckpass, 'Please enter correct password');
        }else if(userPass === usercPass){
            setsuccese(usercheckpass,'password is correct');
        }
        checkSuccess(userName);
}

 function seterr(input, emsg){
    let formBox = input.parentElement;
    let small = formBox.querySelector('small');
    small.innerText = emsg;
    small.style.display = 'block'
    formBox.classList.add('error');
    formBox.classList.remove('succes');


 }

 function setsuccese(input, sussmsg){
    let formBox = input.parentElement;
    let small = formBox.querySelector('small');
    small.innerText = sussmsg;
    small.style.display = 'block'
    formBox.classList.add('succes')
    formBox.classList.remove('error')
 }

 function checkSuccess(username){
    const formBox = document.querySelectorAll('.form-box')
    let count = 0;
    formBox.forEach((formbox)=>{
        if(formbox.classList.contains('succes')){
            count = count + 1;
        }
    })
   if(formBox.length === count){
     alert('Regitrations Successfully Complete');
     swal("Wellcome!"+username, "Regitrations Successfull!", "success");

   }
     username.value =''
     useremail.value=''
 }
