const form = document.querySelector("form")
const list = document.querySelector("ul")
let boderColor = ""
let currentItem

const toggleForm = () => {
    document.querySelector("#add_btn").style.display = "inline"
    document.querySelector("#save_btn").style.display = "none"
    form.style.display = form.style.display === "block" ? "none" : "block"
}

const addItem = () => {
    const listItem = createItem()
    list.appendChild(listItem)
    resetForm()
}

const createItem = () => {
    const title = document.querySelector("#title").value
    const date = document.querySelector("#date").value
    const status = document.querySelector("#status").value
    const listItem = document.createElement("li")
    listItem.innerHTML = `<h4>${title}</h4> <p>Deadline: ${date}</p>`
    listItem.classList.add("todo__item")
    switchColor()
    listItem.style.borderLeft = `5px solid ${boderColor}`
    list.appendChild(listItem)
    const editBtn = document.createElement("button")
    editBtn.innerText = "Edit"
    editBtn.addEventListener("click", () => {
        form.style.display = "block"
        document.querySelector("#title").value = title
        document.querySelector("#date").value = date
        document.querySelector("#status").value = status
        currentItem = listItem
        document.querySelector("#add_btn").style.display = "none"
        document.querySelector("#save_btn").style.display = "inline"
    })
    const deleteBtn = document.createElement("button")
    deleteBtn.innerText = "Delete" 
    deleteBtn.addEventListener("click", () =>{
        listItem.remove()
    })
    listItem.appendChild(editBtn)
    listItem.appendChild(deleteBtn)
    resetForm()
    return listItem
}

const insertDeleteBtn = (listItem) => {
    const deleteBtn = document.createElement("button")
        editBtn.innerText = "Delete" 
        listItem.appendChild(deleteBtn)
        deleteBtn.addEventListener("click", () =>{
            listItem.remove()
    })
}

const onEdit = () => {
    const parent = currentItem.parentNode
    const editedItem = createItem()
    parent.replaceChild(editedItem, currentItem)
    resetForm()
    console.log(parent);
}

const resetForm = () => {
    form.style.display = "none"
    document.querySelector("#title").value = ""
    document.querySelector("#date").value = ""
    document.querySelector("#status").value = ""
}

const switchColor = () => {
    const status = document.querySelector("#status").value
    switch (status) {
        case "done":
            boderColor = "green"
            break
        case "in progress":
            boderColor = "red"
            break
        case "not started":
            boderColor = "blue"
            break
        default:
            boderColor = "green"
    }
}