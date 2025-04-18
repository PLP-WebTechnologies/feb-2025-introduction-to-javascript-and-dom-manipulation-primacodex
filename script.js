// Change text content
document.getElementById("change-text").addEventListener("click", () => {
  document.getElementById("info-text").textContent =
    "You clicked the button! 🎉";
});

// Change style
document.getElementById("change-style").addEventListener("click", () => {
  document.body.style.backgroundColor = "#e0ffe0";
  document.getElementById("main-heading").style.color = "#007BFF";
});

// Add new element
document.getElementById("add-element").addEventListener("click", () => {
  const newDiv = document.createElement("div");
  newDiv.textContent = "🌟 A new element has been added!";
  document.getElementById("dynamic-area").appendChild(newDiv);
});

// Remove last added element
document.getElementById("remove-element").addEventListener("click", () => {
  const area = document.getElementById("dynamic-area");
  if (area.lastChild) {
    area.removeChild(area.lastChild);
  } else {
    alert("Nothing to remove!");
  }
});
