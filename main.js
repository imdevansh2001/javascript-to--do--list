let mainInput = document.getElementById('list-input'); // input field

let plusIcon = document.getElementsByClassName('bi-file-plus-fill')[0]; // add icon

let scrollBox = document.getElementById('items-box'); // scroll-container

let clearButton = document.getElementById('clear-all'); // clear button



plusIcon.addEventListener('click',change=>{

// adding in put text to your box
var paraGraph =document.createElement('p');
paraGraph.innerText = mainInput.value;
scrollBox.appendChild(paraGraph);


// styling

paraGraph.style.fontSize = "1.7rem";
paraGraph.style.backgroundColor = "rgb(159, 255, 209)";
paraGraph.style.textAlign = "center";
paraGraph.style.fontWeight = "bold";
paraGraph.style.color = "black";


// cutting line after work done

paraGraph.addEventListener("click",change=>{

paraGraph.style.textDecoration = "line-through";
    
});


// clearing box when overloads
clearButton.addEventListener("click",change=>{

    scrollBox.removeChild(paraGraph);
    
});


 
});