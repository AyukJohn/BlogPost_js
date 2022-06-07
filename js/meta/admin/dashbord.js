const localstorage_user = JSON.parse(localStorage.getItem('user'));
const inMemoryToken = localstorage_user.token
const inMemoryUserName = localstorage_user.user.username



// if(inMemoryToken ){
//   window.location.href="admin.html"
 
// }
// else if(inMemoryToken){
//   window.location.href="adminLogin.html"
// }
// else{
//     window.location.href = "index.html"
//     // window.location.replace("adminLogin.html")
//     // console.log('hello')
//   }








console.log(inMemoryToken)
console.log(inMemoryUserName)






const postCount = document.querySelector('.post')

const commentCount = document.querySelector('.comment')

const userName = document.querySelector('.userName')

const newsList = document.querySelector('.newsList');

// const postUrl = 'http://127.0.0.1:8000/v1/api/admin_article';

// const commentUrl = 'http://127.0.0.1:8000/v1/api/ArticleComment';

const postUrl = 'https://dzblog.herokuapp.com/v1/api/admin_article';

const commentUrl = 'https://dzblog.herokuapp.com/v1/api/ArticleComment';

// https://dzblog.herokuapp.com



userName.innerHTML = 'Welcome   ' + inMemoryUserName +  '   click to logOut'



let newsOutput = '';


 

// fetching api from server
  fetch(postUrl, {
    headers:{
      'Authorization':`Token ${inMemoryToken}`
  },
  })
  .then(res => res.json())
  .then(data => {


    
    

    data.tasks.forEach(element => {
    console.log(element)

    // console.log(element.comments.length)
     
    // const newCount = element.id
    const new_post_count = element.count_assigned
    // console.log(newCount)

    postCount.innerHTML = new_post_count
      
    });

  
  })

  
  // fetching api from server
  fetch(commentUrl)
  .then(res => res.json())
  .then(data => {


    data.forEach(element => {
      console.log(element)

      const new_comment_count = element.count_assigned

      commentCount.innerHTML = new_comment_count 
      // console.log(newCount)
    })
    

  
  })

  