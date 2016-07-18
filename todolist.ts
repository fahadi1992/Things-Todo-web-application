function todoList() {
    var item:any = (<HTMLInputElement>document.getElementById("todoInput")).value;
    let text:any = document.createTextNode(item)
    let newItem:any = document.createElement("li");
    newItem.appendChild(text);
    document.getElementById("todoList").appendChild(newItem)
}