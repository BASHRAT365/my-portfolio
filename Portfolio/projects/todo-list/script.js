function addTask()
{
    let task =
    document.getElementById("task").value;
    if(task == "")
    {
        alert("Please enter a task.");
        return;
    }
    let li =
    document.createElement("li");
    li.innerHTML =
    task +
    ' <button class="delete" onclick="removeTask(this)">Delete</button>';
    document.getElementById("list").appendChild(li);
    document.getElementById("task").value = "";
}
function removeTask(button)
{
    button.parentElement.remove();
}
