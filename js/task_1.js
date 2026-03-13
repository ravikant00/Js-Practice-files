// Select all <li> elements and print their texts using a loop

let lis = document.querySelectorAll("li");

// lis.forEach(function(val){
//     console.log(val.textContent);
// });

for(i=0; i<lis.length; i++){
    console.log(lis[i].textContent);
}