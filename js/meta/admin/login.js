let loginForm = document.querySelector('.login-form')

const userName = document.getElementById('username')

const passWord = document.getElementById('password')

// const loginApiUrl = 'http://127.0.0.1:8000/v1/api/auth/login'
const loginApiUrl = 'https://dzblog.herokuapp.com/v1/api/auth/login'




loginForm.addEventListener('submit', (e) => {

    e.preventDefault();

    // alert('hy')

    // console.log(email.value,userName.value)

    fetch(loginApiUrl, {
        method:'POST',
        headers:{
            'Accept':'application/json',
            'Content-Type': 'application/json',
            // //'Authorization': `Basic ${btoa(email)}:${btoa(password)}`
            // 'Authorization':'Bearer TOKEN'
        },
        body: JSON.stringify({
          username:userName.value,
          password:passWord.value,
        })
    })
    .then( res => res.json())
    .then( res => {
        console.log(res)
        // console.log(res.token)
        let inMemoryToken = res;

        localStorage.setItem('user', JSON.stringify(res))
        console.log(inMemoryToken)

        if(res.token){
            window.location.replace("adminDashboard.html")
        // console.log(inMemoryToken)

        }
        else{
            alert(res.non_field_errors)
        }

    })
    // .catch(console.error(err));
    userName.value = '',
    passWord.value = '';

})