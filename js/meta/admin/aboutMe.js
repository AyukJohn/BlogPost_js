

        const About = document.querySelector('.about');
        const Aboutme = document.querySelector('.adminAbout');
        const AboutmeEdit = document.querySelector('.aboutMe');





        aboutOutput =''
        adminAboutOutput =''


        const aboutUrl = 'http://127.0.0.1:8000/v1/api/aboutMe'

        const editUrl = 'http://127.0.0.1:8000/v1/api/aboutDetail'


        
        fetch(aboutUrl)
        .then(res => res.json())
        .then(data => {
            console.log(data.about)
            
            data.about.forEach(data => {
                // console.log(data);
            //   <h2>Featured</h2>
            aboutOutput += `

            <article class="about-section py-5">
            <div class="container">
                <h2 class="title mb-3">About Me</h2>
                
                <p>
                ${data.aboutMe}
                </p>

                <img class="card-img-top" src="${data.img}" alt="">
                <h5 class="mt-5">About The Blog</h5>

                <p>${data.aboutBlog},
                </p>
                <h5 class="mt-5">My Skills and Experiences</h5>
                <p>${data.mySkills}.</p>
                
                <h5 class="mt-5">Side Projects</h5>
                <p>${data.myProjects}.</p>
                
                
            </div>
        </article>

        

                
            `;
            });


            
        
            About.innerHTML = aboutOutput;

        })




        fetch(aboutUrl)
        .then(res => res.json())
        .then(data => {
            console.log(data.about)
            
            data.about.forEach(data => {
                // console.log(data);
            //   <h2>Featured</h2>
            adminAboutOutput += `

                    <div class="card aboutMe"data-id=${data.id} >
                    
                        <img class="card-img-top" src="${data.img}" alt="">

                        <div class="card-body align-center">
                        <h5 class="card-title">AboutMe</h5>
                        <p class="card-text">${data.aboutMe}</p>



                        <h5 class="card-title">AboutBlog</h5>
                        <p class="card-text">${data.aboutBlog}</p>


                        <h5 class="card-title">MySkills</h5>
                        <p class="card-text">${data.mySkills}</p>
                        

                        <h5 class="card-title">MyProjects</h5>
                        <p class="card-text">${data.myProjects}</p>

                        <a href="#" class="card-link edit" > <i class="fas fa-edit" id="edit-post"> Edit</i></a>
                        
                    </div>

                
            `;
            });


            
        
            Aboutme.innerHTML = adminAboutOutput;

        })




        Aboutme.addEventListener('click', (e) => {

            e.preventDefault()

            // location.reload()

           
            let editButtonIsPressed = e.target.id == 'edit-post';
            
            // console.log('hey')



            let id = e.target.parentElement.parentElement.parentElement.dataset.id;


            if(editButtonIsPressed){


                console.log(id)
                // let id = e.target.parentElement.parentElement.parentElement.parentElement.parentElement.dataset.id;

                const parent =e.target.parentElement.parentElement.parentElement.parentElement.parentElement;
                
                console.log(parent)


                fetch(`${editUrl}/${id}`, {
                
                    method:'GET',
                    //  headers:{
                    // // //     'Accept':'application/json',
                    // // //     'Content-Type': 'application/json',
                    //     'Authorization':`Token ${inMemoryToken}`
                    // },

                })
                .then(res => res.json())
                .then(res => {
                    // console.log(res)

                    if(res){
                        console.log('yes')

                        const  inMemoryBlog = res;
                        localStorage.setItem('aboutEdit', JSON.stringify(inMemoryBlog))
                        console.log(localStorage.aboutEdit)

                        window.location.href = "editAbout.html"

                    }
                })

                


            };

        })


       

