// let count = 10;

// let interval = setInterval(function () {
//     if(count >= 0){
//     console.log(count);
//     count--;
//     }
//     else{
//         clearInterval(interval);
//     }

// }, 1000);

let count = 0;
let second = 5;

let progress = document.querySelector(".progress");
let percent = document.querySelector("#status");

let interval = setInterval(function () {
    if(count < 100){
    count++;
    progress.style.width = `${count}%`;
    percent.textContent = `${count}%`;

    }
    else{
        document.querySelector("h3").textContent = "Downloaded";
        clearInterval(interval);
    }
    

}, (second*1000)/100);


