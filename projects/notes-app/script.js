// Get HTML elements
const noteInput = document.getElementById("noteInput");
const addButton = document.getElementById("addButton");
const notesContainer = document.getElementById("notesContainer");


// Load saved notes when page opens
let notes = JSON.parse(localStorage.getItem("notes")) || [];


// Show all notes
function displayNotes() {

    notesContainer.innerHTML = "";

    notes.forEach(function(note, index) {

        const noteElement = document.createElement("div");

        noteElement.classList.add("note");

        noteElement.innerHTML = `
            <span>${note}</span>
            <button class="delete-btn" onclick="deleteNote(${index})">
                Delete
            </button>
        `;

        notesContainer.appendChild(noteElement);

    });

}


// Add a new note
function addNote() {

    const noteText = noteInput.value.trim();

    if (noteText === "") {

        alert("Please write a note first.");

        return;

    }

    notes.push(noteText);


    // Save notes in Local Storage
    localStorage.setItem(
        "notes",
        JSON.stringify(notes)
    );


    noteInput.value = "";

    displayNotes();

}


// Delete a note
function deleteNote(index) {

    notes.splice(index, 1);


    // Update Local Storage
    localStorage.setItem(
        "notes",
        JSON.stringify(notes)
    );


    displayNotes();

}


// Add note when button is clicked
addButton.addEventListener("click", addNote);


// Add note when Enter key is pressed
noteInput.addEventListener("keypress", function(event) {

    if (event.key === "Enter") {

        addNote();

    }

});


// Display saved notes when page loads
displayNotes();