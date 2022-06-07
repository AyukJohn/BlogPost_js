      
     
      
      const localstorage_user = JSON.parse(localStorage.getItem('user'));
      const inMemoryToken = localstorage_user.token


      


      



      const makePost = document.querySelector('.addForm')
      // const correctPost = document.querySelector('.Forme')

      const btnSubmit = document.querySelector('.btnSubmit');


      const title = document.getElementById('title')
      const subTitle = document.getElementById('subtitle')
      const body = document.getElementById('body')
      const image = document.getElementById('image')



    //  let id = localstorage_blogedit.tasks.id

    //   console.log(localstorage_blogedit.tasks.id)

    //   title.value = localstorage_blogedit.tasks.title
    //   subTitle.value = localstorage_blogedit.tasks.subtitle
    //   body.value = localstorage_blogedit.tasks.body
      // image.value = localstorage_blogedit.tasks.image







      // let urlPost = 'http://127.0.0.1:8000/v1/api/admin_article'
      let urlPost = 'https://dzblog.herokuapp.com/v1/api/admin_article'

     

      // const Puturl = 'http://127.0.0.1:8000/v1/api/article_detail';





      



      // const img = document.getElementById('image')
      // let reader = new FileReader();
      // reader.onload = logFile;
      // reader.readAsDataURL(img.files[0]);


      // const formData = new FormData(makePost);
      // formData.append('topic', title);
      // formData.append('subTitle', document.getElementById('subTitle'));
      // formData.append('body', document.getElementById('body'));
      // formData.append('image', image.files[0]);




        makePost.addEventListener('submit', (e) => {
          e.preventDefault();

          // let makePost = e.targ

          // 

          // console.log(...formData)

          // const data = new FormData(e.target);

          // const value = data.get('title');
          // console.log({ value });

          

          let myForm = e.target;
          let formData = new FormData(myForm);

          // console.log(...fd)


          // console.log(serializeForm)

          // for (let key of formData.keys()) {
          //     console.log(key, formData.get(key));
          //   }

            fetch(urlPost, {
              method:'POST',
              headers:{
                  'Authorization':`Token ${inMemoryToken}`
              },
              body: formData
            })
        
            .then(res => res.json())
            .then(res => {
                console.log(res)
                if(res){
                    window.location.href = "adminTables.html"
                }
            })

            
          title.value='';
          subTitle.value='';
          body.value='';
        })






      //   correctPost.addEventListener('submit', (e) => {

      //     e.preventDefault();


      //     let myForm = e.target;
      //     console.log(myForm);

      //   //   let fd = new FormData(myForm);

      //   //   console.log('postUpdated');

      //   //   fetch(`${Puturl}/${id}`, {

      //   //       method:'PUT',
      //   //       headers:{
      //   //           // 'Accept':'application/json',
      //   //           // 'Content-Type': 'application/json',
      //   //           'Authorization':`Token ${inMemoryToken}`
      //   //       },

      //   //       body: fd

      //   //   })

      //   //   .then(res => res.json())
      //   //  .then(() => location.reload())

      // })