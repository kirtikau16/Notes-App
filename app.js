const notesContainer = document.querySelector(".notes-container");
const createBtn = document.querySelector(".btn");
let notes = document.querySelectorAll(".input-box");

function showNotes(){
    notesContainer.innerHTML = localStorage.getItem("notes");
}

function updateStorage() {
    localStorage.setItem("notes", notesContainer.innerHTML);
}

createBtn.addEventListener("click", () => {
    let inputBox = document.createElement("p");
    let img = document.createElement("img");
    inputBox.className = "input-box";
    inputBox.setAttribute("contenteditable", "true");
    img.src = "img/delete-notes.png";
    notesContainer.appendChild(inputBox).appendChild(img);
})

notesContainer.addEventListener("click", function (e) {
    if (e.target.tagName === "IMG") {
        e.target.parentElement.remove();
        updateStorage();
    }
    else if (e.target.tagName === "P") {
        notes = document.querySelectorAll(".input-box");
        notes.forEach((note) => {
            note.onkeyup = function () {
                updateStorage();
            }
        });
    }
});


const containerStyle = {
    width: "100%",
    minHeight: "100vh",
     background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
     padding: "4% 0 0 10%"
}
const containerH1Styles = {
  display: "flex",
  alignItems: "center",
  fontSize: "35px",
  fontWeight: 600
};