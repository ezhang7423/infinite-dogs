const DOG_URL = "https://dog.ceo/api/breeds/image/random";


const doggos = document.querySelector(".doggos")
const newDog = document.querySelector(".newDog")



function addNewDogger(){
const promise = fetch(DOG_URL)
promise
.then(function(res){
    const processingPromise = res.json();
    return processingPromise;
})
.then(function(processedResponse) {
    const img = document.createElement("img");
    img.src = processedResponse.message;
    img.alt = 'dogger'
    img.className = 'dogger'
    doggos.appendChild(img);
})
}
newDog.addEventListener("click", addNewDogger)
