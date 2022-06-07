

    const localstorage_blogedit = JSON.parse(localStorage.getItem('blogedit'));
    const inMemoryblog = localstorage_blogedit

    const localstorage_user = JSON.parse(localStorage.getItem('user'));
      const inMemoryToken = localstorage_user.token
        
        
        
        
      const title = document.getElementById('title')
      const subTitle = document.getElementById('subtitle')
      const body = document.getElementById('body')
      const image = document.getElementById('image')


      let correctPost = document.querySelector('.edit')

      const Puturl = 'http://127.0.0.1:8000/v1/api/adminArticle_detail';



     let id = localstorage_blogedit.tasks.id

      console.log(localstorage_blogedit.tasks.title)

      title.value = localstorage_blogedit.tasks.title
      subTitle.value = localstorage_blogedit.tasks.subtitle
      body.value = localstorage_blogedit.tasks.body
    //   image.value = localstorage_blogedit.tasks.image



    //   correctPost.addEventListener('submit', (e) => {
    //       e.preventDefault()
    //       console.log('hey')
    //   })
        
        
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
                headers:{
                    // 'Accept':'application/json',
                    // 'Content-Type': 'application/json',
                    'Authorization':`Token ${inMemoryToken}`
                },
  
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

                    window.location.href = "adminTables.html"

                }
            })
  
    })