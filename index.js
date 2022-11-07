

let url = "/index.json"

const ul = document.getElementById("work" , "education");

async function getSomething() {

    let response = await fetch(url);

    if(response.ok) {
        let data = await response.json();
         //console.log(data);

         //console.log(data.todos)

         let todos = data.todos;


         for(let i = 0; i < todos.length; i++) {

              //console.log(todos[i].desc);
              //console.log(todos[i].completed);

              const li = document.createElement("li");
              li.innerHTML = todos[i].desc;
              ul.appendChild(li);

              if(todos[i].completed === true) {
                 li.classList.add("done");
              } else {
                li.classList.add("undone");
              }

         }

     

    } else {
        console.log("HTTP-Error: " + response.status);
    }
}

getSomething();


















