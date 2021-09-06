const inputText = document.getElementById("inputToDo");
const addButton = document.getElementById("buttonToDo");
const toDoArea = document.getElementById("listToDo");

addButton.addEventListener("click", function(){
    const newParagraph = document.createElement("p");
    newParagraph.classList.add("paragraph");
    newParagraph.innerText = inputText.value;

    const buttonTrash = document.createElement("button");
    buttonTrash.classList.add("btnTrash")
    buttonTrash.innerText = "Delete";

    if(inputText.value == ""){
        alert("You must enter text!");
    }
    else
    {
        newParagraph.appendChild(buttonTrash);
        toDoArea.appendChild(newParagraph);
    }
    
    inputText.value = "";

    newParagraph.addEventListener("click", function(){
        newParagraph.style.textDecoration = "line-through";
    })

    buttonTrash.addEventListener("click", function(){
        newParagraph.remove();
    })
})