

    const localstorage_aboutEdit = JSON.parse(localStorage.getItem('aboutEdit'));
    const inMemoryAbout = localstorage_aboutEdit

    const localstorage_user = JSON.parse(localStorage.getItem('user'));
      const inMemoryToken = localstorage_user.token

      console.log(inMemoryAbout.tasks)
        
        
        
        
      const aboutMe = document.getElementById('aboutMe')
      const aboutBlog = document.getElementById('aboutBlog')
    //   const mySkills = document.getElementById('mySkills')
    //   const myProjects = document.getElementById('mySkills')
    //   const image = document.getElementById('image')


      let correctPost = document.querySelector('.editAbout')

      const Puturl = 'http://127.0.0.1:8000/v1/api/aboutDetail';



     let id = inMemoryAbout.tasks.id

      console.log(inMemoryAbout.tasks.id)

      aboutMe.value = inMemoryAbout.tasks.aboutMe
      aboutBlog.value = inMemoryAbout.tasks.aboutBlog
      myProjects.value = inMemoryAbout.tasks.myProjects
      mySkills.value = inMemoryAbout.tasks.mySkills

    //   image.value = localstorage_blogedit.tasks.image



      correctPost.addEventListener('submit', (e) => {
          e.preventDefault()
          console.log('hey')
      })
        
        
    correctPost.addEventListener('submit', (e) => {

            e.preventDefault();
  
  
            let myForm = e.target;
            console.log(myForm);

            // title.value='';
            // subTitle.value='';
            // body.value='';
  
            let fd = new FormData(myForm);


  
            console.log(...fd);
  
            fetch(`${Puturl}/${id}`, {
  
                method:'PUT',
                // headers:{
                //     // 'Accept':'application/json',
                //     // 'Content-Type': 'application/json',
                //     'Authorization':`Token ${inMemoryToken}`
                // },
  
                body: fd
  
            })
  
            .then(res => res.json())
            .then(res => {
                // console.log(res)

                if(res){
                    console.log('yes')

                    // const  inMemoryBlog = res;
                    // localStorage.setItem('blogedit', JSON.stringify(inMemoryBlog))
                    // console.log(localStorage.blog)

                    window.location.href = "aboutMeAdmin.html"

                }
            })
  
    })