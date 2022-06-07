
const postsList = document.querySelector('.postList');


const Posturl = 'http://127.0.0.1:8000/v1/api/userArticle';
const PostSingelurl = 'http://127.0.0.1:8000/v1/api/userArticle_detail';


let postOutput = '';



// fetching api from server
fetch(Posturl)
  .then(res => res.json())
  .then(data => {
      console.log(data.tasks)
        data.tasks.forEach(post => {
          console.log(post.comments.length);
            //   <h2>Featured</h2>
          postOutput += `

                <div class="item mb-5" data-id=${post.id}>
                
                    <div class="row g-3 g-xl-0">
                        <div class="col-2 col-xl-3">
                        
                            <img  src='${post.img}' alt="..." class="img-fluid post-thumb" alt="Responsive image">
                        </div>
                        <div class="col">
                            <div>${post.id}</div>
                            <h3 class="title mb-1"><a class="text-link" href="blog-post.html">${post.title}</a></h3>
                            <div class="meta mb-1"><span class="date">Published 3 months ago</span><span class="time">3 min read</span><span class="comment"><a class="text-link" href="#">${post.comments.length} comments</a></span></div>
                            <div class="intro">${post.subtitle} </div>
                          

                            <a class="text-link readMore" id="readMore" href="#">Read more &rarr;</a>
                        </div><!--//col-->
                    </div><!--//row-->
                </div><!--//item-->






            
          `;
        });
      postsList.innerHTML = postOutput;
  })



    postsList.addEventListener('click', (e) => {
        e.preventDefault();

        //   console.log('hey')

        let readmoreButton = e.target.id == 'readMore'


        let id = e.target.parentElement.parentElement.parentElement.dataset.id;

        if(readmoreButton){
            // const parent =e.target.parentElement.parentElement.parentElement.parentElement.parentElement;
            console.log(id)

            const Fetch = fetch(`${PostSingelurl}/${id}`, {
                
                    method:'GET',
                    // headers:{
                    //     'Accept':'application/json',
                    //     'Content-Type': 'application/json',
                    //     'Authorization':`Bearer ${inMemoryToken}`
                    // },

            })
                .then(res => res.json())
                .then(res => {
                    // console.log(res)

                    if(res){
                        console.log('yes')

                        const  inMemoryBlog = res;
                        localStorage.setItem('blog', JSON.stringify(inMemoryBlog))
                        console.log(localStorage.blog)

                        window.location.href = "blog.html"

                    }
                })


        }

    })