const jokeContainer = document.getElementById("joke");
const button = document.getElementById("btn");
const load = document.querySelector(".loading");
const url = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,explicit&type=single&idRange=0-300";
let count =1;

let getJoke = () => {
    setInterval( () => {
        if(count < 100){
            count++;
            load.innerText=count;
        }
    },1)
    jokeContainer.classList.remove("fade");
     setTimeout( () => {
        fetch(url)
        .then(data => data.json())
        .then(item => {
            jokeContainer.textContent = `${item.joke}`;
            jokeContainer.classList.add("fade");
            load.innerText = "";
        })
        
    }, 400);
    
}
button.addEventListener("click",getJoke);
// getJoke();