const input = document.getElementById("student-input");
const addBtn = document.getElementById("add-student-btn");
const StudentList = document.getElementById("student-list");
const Remove = document.getElementById("remove-btn");

addBtn.addEventListener("click", () => {
  const stdName = input.value.trim();

  if (stdName === "") {
    alert("Please enter a name");
    return;
  }

  const listItem = document.createElement("li");
  listItem.textContent = `${stdName}`;

  const removeBtn = document.createElement("button");
  removeBtn.textContent = "remove";
  removeBtn.className = "remove";
  removeBtn.onclick = () => {
    listItem.remove();
  };

  listItem.appendChild(removeBtn);
  StudentList.appendChild(listItem);

  input.value = "";
});
