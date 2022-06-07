        
        
        
        const localstorage_user = JSON.parse(localStorage.getItem('user'));

        const inMemoryToken = localstorage_user.token
        const inMemoryUserName = localstorage_user.user.username

        console.log(inMemoryUserName)


        console.log(inMemoryToken)

        // const postUrl = 'http://127.0.0.1:8000/v1/api/admin_article';
        // const PostSingelurl = 'http://127.0.0.1:8000/v1/api/adminArticle_detail'

        const postUrl = 'https://dzblog.herokuapp.com/v1/api/admin_article';
        const PostSingelurl = 'https://dzblog.herokuapp.com/v1/api/adminArticle_detail'

        

        const table = document.querySelector('.tables')
        const userName = document.querySelector('.userName')
        const modal = document.querySelector('.modaling')


        userName.innerHTML = 'Welcome   ' + inMemoryUserName +  '   click to logOut'



        
        bloggerEdit = '',


        

        blogger = '',

        



        

        fetch(postUrl, {
            headers:{
                'Authorization':`Token ${inMemoryToken}`
            },
        })
        .then(res => res.json())
        .then(data => {
            data.tasks.forEach(post => {
                console.log(post);
                //   <h2>Featured</h2>
                blogger += `

                <div class="table-responsive ">
                <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0" data-id=${post.id}>
                    
                    
                    <tbody>
                    
                        <tr>
                            <td>${post.id}</td>
                            <td data-title=${post.id}>${post.title}</td>
                            <td>${post.subtitle}</td>
                            

                            <td> <a href="#" class="card-link edit" " > <i class="fas fa-edit" id="edit-post"></i> </a> </td>
                            
                            <td> <a href="#" class="card-link delete" > <i class="fas fa-trash" id="delete-post"></i> </a> </td>
                        </tr>


                    </tbody>
                </table>
            </div>
                `;
            });
            table.innerHTML = blogger;
        })

{/* <button type="button" class="btn btn-primary btn-lg" data-toggle="modal" data-target="#modelId">
  Launch
</button> */}


        table.addEventListener('click', (e) => {

            e.preventDefault()

            // location.reload()

            let delButtonIsPressed = e.target.id == 'delete-post';
            let editButtonIsPressed = e.target.id == 'edit-post';
            let viewButtonIsPressed = e.target.id == 'view-post';




            let id = e.target.parentElement.parentElement.parentElement.parentElement.parentElement.dataset.id;

            


               

                //   delete post
                if(delButtonIsPressed){
                    console.log(id)

                    // alert('do wish to delete')
                    
                    fetch(`${PostSingelurl}/${id}`, {
                    
                    method:'DELETE',
                    headers:{
                        'Accept':'application/json',
                        'Content-Type': 'application/json',
                        'Authorization':`Token ${inMemoryToken}`
                    },

                    })

                    .then(res => res.json())
                    location.reload()

                    // .then(() => location.reload())
                }





           




            if(editButtonIsPressed){



                // let id = e.target.parentElement.parentElement.parentElement.parentElement.parentElement.dataset.id;

                const parent =e.target.parentElement.parentElement.parentElement.parentElement.parentElement;
                

                // console.log(parent)


                // let title = parent.querySelector('.title').textContent
                // let subtitle = parent.querySelector('.subtitle').textContent
                // let body = parent.querySelector('.body').textContent
                // let img = parent.querySelector('.img ').textContent

                // console.log(title, subtitle, body, img,)



                // const  inMemoryBlog = parent;
                // localStorage.setItem('blogedit', JSON.stringify(inMemoryBlog))
                // console.log(localStorage.blog)

                // window.location.href = "form.html"

                const Fetch = fetch(`${PostSingelurl}/${id}`, {
                
                    method:'GET',
                     headers:{
                    // //     'Accept':'application/json',
                    // //     'Content-Type': 'application/json',
                        'Authorization':`Token ${inMemoryToken}`
                    },

                })
                .then(res => res.json())
                .then(res => {
                    // console.log(res)

                    if(res){
                        console.log('yes')

                        const  inMemoryBlog = res;
                        localStorage.setItem('blogedit', JSON.stringify(inMemoryBlog))
                        console.log(localStorage.blog)

                        window.location.href = "editForm.html"

                    }
                })

                


            };




            if(viewButtonIsPressed){



                // let id = e.target.parentElement.parentElement.parentElement.parentElement.parentElement.dataset.id;

                const parent =e.target.parentElement.parentElement.parentElement.parentElement.parentElement;

                let id = e.target.parentElement.parentElement.parentElement.parentElement.parentElement.dataset.title;

                console.log(id)




                // const Fetch = fetch(`${PostSingelurl}/${id}`, {
                
                //     method:'GET',
                //      headers:{
                //     // //     'Accept':'application/json',
                //     // //     'Content-Type': 'application/json',
                //         'Authorization':`Token ${inMemoryToken}`
                //     },

                // })
                // .then(res => res.json())
                // .then(res => {
                //     // console.log(res)

                //     if(res){
                //         console.log('yes')

                //         const  inMemoryBlog = res;
                //         localStorage.setItem('blogedit', JSON.stringify(inMemoryBlog))
                //         console.log(localStorage.blog)

                //         window.location.href = "editForm.html"

                //     }
                // })

                


            };

        })