
     const aboutMeCreate = document.querySelector('.aboutMeForm')

    //  const aboutUrl = 'http://127.0.0.1:8000/v1/api/aboutMe'
    const aboutUrl = 'https://dzblog.herokuapp.com/v1/api/aboutMe'


    //  https://dzblog.herokuapp.com


     aboutMeCreate.addEventListener('submit', (e) =>{
         e.preventDefault();

        //  console.log('pressed!')

         let form = e.target

         let formData = new FormData(form)

         console.log(...formData)

         fetch(aboutUrl, {
             method:'POST',

             headers:{
                'Accept':'application/json',
                // 'Content-Type': 'application/json',
             },
             
             body:formData
         })
         .then(res => res.json())
         .then(res => {
             console.log(res)
             if(res){
                 window.location.href = "aboutMeAdmin.html"
             }
         })
     })