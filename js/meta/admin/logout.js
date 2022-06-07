

logoutForm = document.querySelector('.logout-form');
const urlPost = 'http://127.0.0.1:8000/v1/api/auth/logout';


// logoutForm .addEventListener('click', (e)=>{
//   e.preventDefault();
//   alert('hey')
// })

logoutForm .addEventListener('submit', (e) => {
  e.preventDefault();

  // console.log(uname.value)
  const localstorage_user = JSON.parse(localStorage.getItem('user'));
  const inMemoryToken = localstorage_user.token
  //   fetch(urlPost, {
  //       method:'POST',
  //       headers:{
  //           'Accept':'application/json',
  //           'Content-Type': 'application/json',
  //           //'Authorization': `Basic ${btoa(email)}:${btoa(password)}`
  //           'Authorization':`Token ${inMemoryToken}`
  //       },
  //   })
  //   .then(res => res.json())
  //   .then(res =>{ 
  //     console.log(res);
  //     let inMemoryToken = res.token;

  //     console.log(inMemoryToken)
  //     // window.location.href = "index.html"


  //     if(res.token){

  //     window.location.href = "index.html"
  //     // window.location.replace("ticket.html")
  //     errorDiv.innerHTML = res.message;

  //   }  else{
  //     // alert('Email or Password Not Correct');
  //     errorDiv.innerHTML = res.error;

  //   }
  
  // } )

    



    fetch(urlPost, {
                    
      method:'POST',
      headers:{
          // 'Accept':'application/json',
          // 'Content-Type': 'application/json',
          'Authorization':`Token ${inMemoryToken}`
      },

    })
     window.location.replace('index.html')

      // .then(res => res.json())
      // .then(res => {
      //   // console.log(res)

      //   if(res){
      //       console.log('yes')

      //       // const  inMemoryBlog = res;
      //       // localStorage.setItem('blog', JSON.stringify(inMemoryBlog))
      //       // console.log(localStorage.blog)

      //       // window.location.href = "blog.html"

      //   }
      // })


})
