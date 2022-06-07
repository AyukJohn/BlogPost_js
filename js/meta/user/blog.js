




const blogList = document.querySelector('.blogList')

let blogOutput = '';


const localstorage_blog = JSON.parse(localStorage.getItem('blog'));

const id = localstorage_blog.tasks.id

console.log(id)


// const PostSingelurl = 'http://127.0.0.1:8000/v1/api/userArticle_detail';
const PostSingelurl = 'https://dzblog.herokuapp.com/v1/api/userArticle_detail';




const Fetch = fetch(`${PostSingelurl}/${id}`, {
                
    method:'GET',
})
.then(res => res.json())
.then(data => {
    console.log(data.tasks.comments)



        // console.log(post);
    //   <h2>Featured</h2>
        blogOutput += `

                    <div class="container single-col-max-width">
                    <div>${data.tasks.id}</div>
                    <header class="blog-post-header">
                        <h2 class="title mb-2">${data.tasks.title}</h2>
                        <div class="meta mb-3"><span class="date">Published 2 days ago</span><span class="time">5 min read</span><span class="comment"><a  class="text-link" href="#">${data.tasks.comments.length} Comment(s)</a></span></div>
                    </header>
                    
                    <div class="blog-post-body ">
                        <figure class="blog-banner">
                            <a href="${data.tasks.img}"><img class="img-fluid" src="${data.tasks.img}" alt="image"></a>
                            <figcaption class="mt-2 text-center image-caption">Image Credit: <a class="theme-link" href="https://made4dev.com?ref=devblog" target="_blank">made4dev.com (Premium Programming T-shirts)</a></figcaption>
                        </figure>
                        <p>${data.tasks.subtitle},</p>
                        
                        <h3 class="mt-5 mb-3">Main Subject</h3>
                        <p>${data.tasks.body}</p>
                        <pre>
                            <code>

                    </div><!--//blog-comments-section-->
                    
                </div><!--//container-->

        
        `;

    blogList.innerHTML = blogOutput;

})


const commentForm = document.querySelector('.Postcomment')

const commentEmail = document.getElementById('email')

const commentTopic = document.getElementById('commentTopic')

// const PostCommenturl = 'http://127.0.0.1:8000/v1/api/ArticleComment';
// const PostCommenturl = 'https://dzblog.herokuapp.com/v1/api/ArticleComment';

// https://dzblog.herokuapp.com


commentForm.addEventListener('submit', (e)=> {
    e.preventDefault()

    // const b = commentTopic.value
    //         console.log(b)

    fetch(PostCommenturl, {

        method:'POST',
        headers:{
            'Accept':'application/json',
            'Content-Type':'application/json',
        },
        body:JSON.stringify({
            emailAddress:commentEmail.value,
            comments:commentTopic.value,
            article:id,
        })
        
    })
    .then(res => res.json())
    // .then(res => {
    //     if(res.status == 200){
    //         alert('comment send')
    //     }
    //     else{
    //         alert('not')
    //     }
    // })
    commentEmail.value = '',
    commentTopic.value = ''



})