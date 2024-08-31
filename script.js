const list = document.querySelector("ul");
const input = document.querySelector("input");
const button = document.querySelector("button");

button.addEventListener("click", () => {
    //stores user list item and clears text field
    const shoppingItem = input.value; 
    button.onclick = input.value = '';

    //Adding typed item to the ul below.
    const listItem = document.createElement("li");
    listItem.setAttribute("id", shoppingItem);

    //Added item text next to the delete button
    const span = document.createElement("span");
    span.textContent = shoppingItem;

    //Adds delete button
    const clear = document.createElement("button");
    clear.innerHTML = "Delete";

    //Appends span and clear as child of listItem
    listItem.appendChild(span);
    listItem.appendChild(clear);

    //list is appended with listItem
    list.appendChild(listItem);

    //Adds delete functionality to list button
    clear.addEventListener("click", () => {
        list.removeChild(listItem);
    });

    input.focus();
});

