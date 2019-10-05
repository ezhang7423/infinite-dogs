const DOG_URL = "https://dog.ceo/api/breeds/image/random";


const doggos = document.querySelector(".doggos")
const newDog = document.querySelector(".newDog")
let lastDog;




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
    // setTimeout(resizeDog, 1000)

})
}

// function resizeDog(){
//     lastDog = document.querySelectorAll('.dogger')
//     if (lastDog.length > 1){
//         img = lastDog[lastDog.length-1]
//         lastDog = lastDog[lastDog.length-2]
//         heightRatio = (lastDog.height)/(img.height)
//         console.log('img ratio', img.height/img.width)
//         img.height = img.height*heightRatio
//         img.width = img.width*heightRatio
//         console.log('img ratio', img.height/img.width)
//     }
//     else{
//         img = lastDog[lastDog.length-1]
//         og = img.height
//         img.height = document.body.clientHeight/3
//         img.width *= document.body.clientHeight/og
//     }
// }


newDog.addEventListener("click", addNewDogger)



