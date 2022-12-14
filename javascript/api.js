let portfolioUl = document.getElementById("image-gallery");

const loadingDiv = document.getElementById('loading');

function showSpinner() {
loadingDiv.style.visibility = 'visible';
}

function hideSpinner() {
loadingDiv.style.visibility = 'hidden';
}

async function getRepos() {
    const url = "https://api.github.com/users/lisaemilsson/repos";

    showSpinner()
    await new Promise(r => setTimeout(r, 600));

    let repos = await fetch(url)
        .then(response => response.json());

        repos.forEach(repo => {

            const li = document.createElement("li")
            const img = document.createElement("img")

            if(repo.name === 'js-number-guessing-game'){
                img.src = "../img/guessing.JPG"
            }
            if(repo.name === 'resume-page'){
                img.src = "../img/img_resume..png";
            }
            if(repo.name === 'js-sicssor-papper-rock'){
                img.src = "../img/sicssor_papper_rock.JPG";
            }
            if(repo.name === 'resume-2.0'){
                img.src = '../img/resume2.png';
            }

            img.alt = "projekt pictures";

            const div = document.createElement("div")

            div.className = "overlay"

            const a = document.createElement("a")
            a.target = "_blank"
            a.href = repo.html_url;
            a.text = repo.name;

            const p = document.createElement("p");

            p.innerText = repo.description

            li.appendChild(img);
            li.appendChild(div);
            a.appendChild(p);
            div.appendChild(a);

            portfolioUl.appendChild(li)
            hideSpinner()
        })

}

getRepos()