let usercheck = /^[a-zA-Z]{6,}$/;
let emailcheck = /^[A-Za-z_]{3,}@[A-Za-z]{3,}[.]{1}[A-Za-z.]{3,5}$/;
let pswcheck = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9@#$%^&*]{8,}$/;
let phonecheck = /^[\+234]{4}[0-9]{10}$/
let username;
let emails;
let phone;
let psw;
let psw_repeat;
let code = (Math.floor(100000+Math.random()*900000));
function captch(){
  captchaCode.value = code;
  console.log(code.toString().split(''));
}
captch()
function check(){
    username = document.getElementById('usernames').value;
    email = document.getElementById('emails').value;
    phone = document.getElementById('phones').value;
    psw = document.getElementById('psw').value;
    psw_repeat = document.getElementById('psw_repeat').value;

    validate()
}

function validate(){
    if (usercheck.test(username)) {
        document.getElementById('user').innerHTML = `<span style="color: green;">Valid</span>`;
      } else {
        document.getElementById('user').innerHTML = `<strong>Invalid Username</strong>`;
      }
        if (emailcheck.test(email)) {
        document.getElementById('mail').innerHTML = `<span style="color: green;">Valid</span>`;
      } else {
        document.getElementById('mail').innerHTML = `<strong>Invalid Email</strong>`;
      }
        if (phonecheck.test(phone)) {
        document.getElementById('phone').innerHTML =  `<span style="color: green;">Valid</span>`;
      } else {
        document.getElementById('phone').innerHTML = `<strong>Invalid Phone Number</strong>`;
      }
        if (pswcheck.test(psw)) {
        document.getElementById('psw').innerHTML = `<span style="color: green;">Valid</span>`;
      } else {
        document.getElementById('psw').innerHTML = `<strong>Invalid Password</strong>`;
      }
      if(captchaInp.value == captchaCode.value){ 
        captchap.innerHTML = '' 
        captchap.innerHTML = `<strong class="text-success">Valid captcha</strong>`
       } else {
        captchaInp.value=''
        captchap.innerHTML = `Please enter the correct captcha`
        code = (Math.floor(100000+Math.random()*900000));
        captch()
       }
       if (passwordInp.value == confirmPass.value){
        if (passregex.test(passwordInp.value)){
            pwordp.innerHTML = `<strong class="text-success">Valid password</strong>`
            confirmp.innerHTML = `<strong class="text-success">Valid password</strong>`
        } else{
            pwordp.innerHTML = `<strong>Password too weak...</strong>`
            confirmPass.value = ''
            captchaInp.value=''
            captchap.innerHTML = ''
            code = (Math.floor(100000+Math.random()*900000));
            captch()
        }
   } else{
    confirmp.innerHTML=`<strong>Passwords do not match</strong>`
    confirmPass.value = ''
    captchaInp.value=''
    captchap.innerHTML = ''
    code = (Math.floor(100000+Math.random()*900000));
    captch()
   }
  }b