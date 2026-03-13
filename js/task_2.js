let box = document.querySelector("div");
let interval;
let count = 0;
function startInterval () {
    if(interval) clearInterval(interval);

    interval = setInterval(function () {
        count++
        box.style.display = "none";
        if(count>=5){
            clearInterval(interval);
        }

    },1000);
    
};
startInterval();

setTimeout(startInterval, 2000);
