






        fetch(aboutUrl)
        .then(res => res.json())
        .then(data => {
            console.log(data.about)
            
            data.about.forEach(data => {
                // console.log(data);
            //   <h2>Featured</h2>
            adminAboutOutput += `

                    <div class="card">
                        <img class="card-img-top" src="" alt="">

                        <div class="card-body align-center">
                            <h5 class="card-title">Title</h5>
                            <p class="card-text">Content</p>
                        </div>
                        
                    </div>

                
            `;
            });


            
        
            Aboutme.innerHTML = adminAboutOutput;

        })
