const form=document.getElementById("form");
        const username=document.getElementById("username");
        const email=document.getElementById("email");
        const password=document.getElementById("password");
        const password2=document.getElementById("password2");

        form.addEventListener('submit',e=>
        {
            e.preventDefault();
            checkInput()
        });
           
        function checkInput()
        {
            const usernameValue=username.value.trim();
            const emailValue=email.value.trim();
            const passwordValue=password.value.trim();
            const password2Value=password2.value.trim();

            if(usernameValue==='')
            {
                setError(username,'Username is blank');
            }
            else
            {
                setSuccess(username);
            }

            if(emailValue==='')
            {
                setError(email,'email is blank');
            }
            else if(!isEmail(emailValue))
            {
                setError(email,'it is not a valid Email');
            }
            else
            {
                setSuccess(email);
            }
        

        if(passwordValue==='')
            {
                setError(password,'password is blank');
            }
            else
            {
                setSuccess(password);
            }

            if(password2Value==='')
            {
                setError(password2,'password is blank');
            }
            else if(passwordvalue!==password2Value)
            {
                setError(password2,'Password does not match')
            }
            else
            {
                setSuccess(password2);
            }
        }

        function setError(input,message){
            const formControl =input.parentElement;
            const small=formcontrol.querySelector('small');
            formControl.className='form-control error';
            small.innerText=message;
        }

        function setSuccess(input){
            const formControl =input.parentElement;
            formControl.className='form-control success';
            
        }

        function isEmail(email){
            return /^(([^<>()\\.,;:\@s"]))
        }