const todo = document.querySelector("#todo");
const progress = document.querySelector("#progress");
const done = document.querySelector("#done");

let dragEvent = null;

// console.log(todo, progress, done);

const tasks = document.querySelectorAll(".task");

tasks.forEach((task) => {
  task.addEventListener("drag", (e) => {
    e.preventDefault();
    // console.log("dragging", e);
    dragEvent = task;

  });
});

function addDragEventOnColumn(column) {

    column.addEventListener("dragenter", (e) => {
      e.preventDefault();
      column.classList.add("hover-over");
    });

    column.addEventListener("dragleave", (e) => {
      e.preventDefault();
      column.classList.remove("hover-over");
    });

    column.addEventListener("dragover", (e)=> {
        e.preventDefault();
    })

    column.addEventListener("drop", (e)=> {
        e.preventDefault();
        // console.log("dropped", dragEvent, column)

        column.appendChild(dragEvent);
        column.classList.remove("hover-over");
    })


}

addDragEventOnColumn(todo);
addDragEventOnColumn(progress);
addDragEventOnColumn(done);



