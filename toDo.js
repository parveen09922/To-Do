const input = document.querySelector("#add");
const button = document.querySelector("#btn");
const addData = document.getElementById("addData");

button.addEventListener("click", pushData);

function showMessage(msg) {
    const message = document.getElementById("message");
    const success = document.createElement("p");
    success.textContent = msg;
    success.id = "successNote";
    message.innerHTML = ""; 
    message.appendChild(success); 
}

function pushData() {
    const text = input.value.trim(); 

    if (text !== "") { 
        const createNotes = document.createElement("span");
        createNotes.id = "newText";
        
        createNotes.innerHTML = `
            <input type="checkbox" name="interest" value="${text}" class="checkbox">
            <h4>${text}</h4>
            <button class="edit"><i class="fa-solid fa-pen"></i></button>
            <button class="delete"><i class="fa-solid fa-trash-can"></i></button>
        `;

        addData.appendChild(createNotes); 
        input.value = ""; 

        const edit = createNotes.querySelector(".edit");
        const dele = createNotes.querySelector(".delete");
        const checkbox = createNotes.querySelector(".checkbox");
        const h4 = createNotes.querySelector("h4");

        checkbox.addEventListener("change", (e) => {
            if (checkbox.checked) {
                h4.style.textDecoration = "line-through"; 
                showMessage("Task is completed...");
            } else {
                h4.style.textDecoration = "none"; 
                showMessage(""); //
            }
        });

        dele.addEventListener("click", (e) =>{
            e.target.closest("#newText").remove();
        });

        edit.addEventListener("click", editText);
    }
}

function editText() {
    const h4 = this.parentNode.querySelector("h4"); // Use 'this' to access the button
    let newText = prompt("Enter new text:");
    
    if (newText !== null && newText.trim() !== "") { // Check if the user entered valid text
        h4.textContent = newText;
    }
}

