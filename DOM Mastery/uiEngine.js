const studentId = document.getElementById("studentInput")
const addBtn = document.getElementById("addBtn")
const outputList = document.getElementById("outputList")

addBtn.addEventListener('click', () =>{
    const name = studentId.value

    if(name.trim() ===""){
        alert("Please enter a name")
        return
    }

    const listItem = document.createElement("li")
    listItem.textContent = `${name}` 
    outputList.appendChild(listItem)

    studentId.value = ""
})