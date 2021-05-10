const form = document.getElementById("form")
const username = document.getElementById("username")
const email = document.getElementById("email")
const password = document.getElementById("password")
const password2 = document.getElementById("password2")

form.addEventListener('submit' , e =>{
    e.preventDefault();
    checkInputs();
})


function checkInputs(){
    const usernameValue = username.value.trim()
    const emailValue = email.value.trim()
    const passwordValue = password.value.trim()
    const password2Value = password2.value.trim()

    if(usernameValue == ""){
        setError(username , "نام کاربری را وارد کنید")
    }else{
        setSuccess(username)
    }
 
    const mail_reg =/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    if(emailValue == ""){
        setError(email , "ایمیل را وارد کنید")
    }else if(!mail_reg.test(emailValue)){
        setError(email , "ایمیل معتبر وارد کنید")
    }else{
        setSuccess(email)
    }


    const password_regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm;
    if(passwordValue == ""){
        setError(password , "پسورد را وارد کنید")
    }else if(!password_regex.test(passwordValue)){
        setError(password , "پسورد باید شاما حروف کوچک و بزرگ و عدد باشد و بیشتر از 8 کاراکتر باشد")
      }else{
          setSuccess(password)
      }


      if(password2Value == ""){
        setError(password2 , "تکرار پسورد را وارد کنید")
    }else if(passwordValue2 != passwordValue){
        setError(password2 , "پسورد اشتباه وارد شده است")
      }else{
          setSuccess(password2)
      }

}

const setSuccess = (input) =>{
    const formControl = input.parentElement;

    formControl.className = 'form-control success';
}

const setError = (input , msg) =>{
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');


    formControl.className = 'form-control error';
    small.innerText = msg;
}




