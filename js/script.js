const URL = "https://script.googleusercontent.com/macros/echo?user_content_key=AehSKLiv5YPCFR-6xiUpX0dA87_YzUXS1wIh8F1udAMAlk7otVSFfWMIGyxQgFwlBPVRlx57JGbd1ZSGDC1eLRkWmFDXJkdXIlcfNZBbb8ZWsigDQj7N3SmLhRXDz6xlnFzDlXbe9pxJVrlHwenTXCHjcTBced5JruWIUyzfqagMY_E7xHwKuNKOImd5LcvNWoVRzNp_6hx22fIsCzIYmKL7H66HTh87GsDZckqCfn320RR8b_b9zvSCog-kxEyAPcZjlpr4EWESGS8LmhdixvgtT-U-AtIC4aTKxMXRva2M&lib=MrwAiWkdl8NtnfZ_dHAgO6_i0NU-xAzbT"
const urlParams = new URLSearchParams(window.location.search);
const projectID = urlParams.get('id')
// console.log(projectID);

fetch(URL, { 

    method: 'GET'
    
    })
    
    .then(function(response) { return response.json(); })
    
    .then(function(json) {
     
        for(i=1; i<11; i++){
            // console.log(json.data[i])

            menuItem = `
            
            <li>
            <a href="index.html?id=${i}"> ${json.data[i].title} </a>
            </li>
            
            `

            $("#menu").append(menuItem)


        }

        if(projectID != null){

            images = json.data[projectID].images.split(",").map(url => `<div class="project-image"><img src="/assets/${url}"></div>`).join(" ")


            console.log(images)

            projectContent = `
            
                <div class="projects-wrapper">

                <div class="project-description">
                    ${json.data[projectID].category}    
                </br>
                    ${json.data[projectID].date}    

                </br>
                </br>
                    
                    ${json.data[projectID].desc}    


                </div>

                    ${images}    

                

            </div>
            
            `

            $(".projects").html(projectContent)

        }

    });

