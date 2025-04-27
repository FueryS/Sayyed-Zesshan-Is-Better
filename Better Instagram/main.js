let pictures=[];
let mainBody=document.getElementById("MainBody");
function getContetns(){
    for (let i of mainBody.children) {
   
    if (i.tagName=="DIV") {
         pictures.push(i);
     }
    }
}

getContetns();

//I will use this to track the element being dragged
let draggedElement = null;


mainBody.addEventListener("drop", (e) => {
    e.preventDefault();
    if (draggedElement && e.target.tagName === "IMG") {
        const targetParent = e.target.parentElement;
        const draggedParent = draggedElement.parentElement;

        // Swap the images
        targetParent.appendChild(draggedElement);
        draggedParent.appendChild(e.target);

        draggedElement = null;
    } 
    else if (draggedElement && e.target.tagName === "DIV") {
        e.target.appendChild(draggedElement);
        draggedElement = null;
    }});

mainBody.addEventListener("dragstart", (e) => {
    if (e.target.tagName === "IMG") {
        draggedElement = e.target;
        e.dataTransfer.effectAllowed = "move";
    }});

mainBody.addEventListener("dragover", (e) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = "move";
});

mainBody.addEventListener("drop", (e) => {
    e.preventDefault();
    if (draggedElement && e.target.tagName === "DIV") {
        e.target.appendChild(draggedElement);
        draggedElement = null;
    }
});


//Debugging purposes
console.log(mainBody.children);
console.log(pictures.length);