
let url = "/json/index.json"

const workUl = document.getElementById("work");

const educationUl = document.getElementById("education");


async function getSomething() {

    let response = await fetch(url);

    if(response.ok) {
        let data = await response.json();

         let todos = data.resume;


            todos.forEach(todo => {
                console.log(todo)

                const wrapper = document.createElement("div")
                wrapper.className = "resume-item"
                const summary = document.createElement("div")
                summary.className = "summary"
                const name = document.createElement("div")
                name.className = "name"
                const duration = document.createElement("div")
                duration.className = "duration"

                wrapper.appendChild(name)
                wrapper.appendChild(summary)
                wrapper.appendChild(duration)

                name.innerText = todo.name
                summary.innerText = todo.summary

                const startDate = new Date(todo.startDate)
                const endDate = new Date(todo.endDate)

                duration.innerText = startDate.toDateString() + " - " + endDate.toDateString()
            
                if(todo.type === "work"){
                    workUl.appendChild(wrapper)
                }
                if(todo.type === "education"){
                    educationUl.appendChild(wrapper)
                }


            });

        } else {
            console.log("HTTP-Error: " + response.status);
        }
    }
    
    getSomething();



     

  


















