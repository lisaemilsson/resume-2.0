
let url = "/json/index.json"

const workUl = document.getElementById("work");

const educationUl = document.getElementById("education");


async function getSomething() {

    let response = await fetch(url);

    if(response.ok) {
        let data = await response.json();

         let todos = data.resume;


         for(let i = 0; i < todos.length; i++) {

            let type = todos[i].type
  
            for(var key in todos[i]){

                if(key !== "type"){
                    
                    const li = document.createElement("li");
                    li.innerHTML = todos[i][key]
                   
                    if(type === "work"){
    
                        workUl.appendChild(li);
                    }
                    else{
                        educationUl.appendChild(li);
                    }
                }

            }
         }

     

    } else {
        console.log("HTTP-Error: " + response.status);
    }
}

getSomething();


















