let fetchData;

let button = document.querySelector(".search-button");
let container= document.querySelector(".container");
let boxcontainer = document.querySelector(".box-container");
let searchInput = document.querySelector(".search-bar");
let box = document.querySelector(".box")
let searchVariable;


async function fetchapi() {
    let fetchPromise = await fetch("https://jsonplaceholder.typicode.com/posts");
    fetchData = await fetchPromise.json()
    console.log(fetchData)
}

fetchapi()

function handleSearch(){
    var searchTerm = searchInput.value
    searchVariable = searchTerm
    console.log(searchVariable)
}

function preciseid(n) {
    box.innerText = JSON.stringify(fetchData[n])
    console.log("Precise-id")
}


// document.addEventListener("DOMContentLoaded", function(){

//     button.addEventListener("click", function(){
//         let div = document.createElement("div");
//         div.classList.add("box");
//         boxcontainer.appendChild(div);
//     })
// })

button.addEventListener('click', () => {
    preciseid(searchVariable);
})
//this is what i add in the file


