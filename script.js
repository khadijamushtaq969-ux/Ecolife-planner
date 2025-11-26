let treeCount = 0;
const treeArea = document.getElementById("treeArea");
const progressFill = document.getElementById("progressFill");
const ecoLevelText = document.getElementById("ecoLevel");
const messageBox = document.getElementById("actionMessage");

// Plant Tree button
function plantTree() {
    document.getElementById("emptyMsg")?.remove();
    const tree = document.createElement("div");
    tree.classList.add("tree");
    tree.style.left = Math.random() * 80 + "%";
    treeArea.appendChild(tree);

    treeCount++;
    updateProgress();
    showMessage("🌳 You planted a tree! Earth thanks you.");
}

// Save Water button
function saveWater() {
    showMessage("💧 You saved water today! Every drop counts.");
    updateProgress(1);
}

// Reduce Waste button
function reduceWaste() {
    showMessage("♻️ You reduced waste! Cleaner Earth.");
    updateProgress(1);
}

// Update Progress Bar and Eco Level
function updateProgress(add = 0) {
    let percent = Math.min(treeCount * 10 + add * 5, 100);
    progressFill.style.width = percent + "%";
    ecoLevelText.textContent = percent + "%";
}

// Show floating message for actions
function showMessage(msg) {
    messageBox.textContent = msg;
    messageBox.style.opacity = 0;
    messageBox.style.transition = "opacity 0.5s";
    setTimeout(() => { messageBox.style.opacity = 1; }, 50);
}

// Floating leaves/water animation
const floatingElements = [
    {src: "https://cdn-icons-png.flaticon.com/512/765/765207.png", className:"leaf", left:"10%", delay:0},
    {src: "https://cdn-icons-png.flaticon.com/512/765/765207.png", className:"leaf", left:"40%", delay:3},
    {src: "https://cdn-icons-png.flaticon.com/512/414/414974.png", className:"drop", left:"70%", delay:1},
    {src: "https://cdn-icons-png.flaticon.com/512/414/414974.png", className:"drop", left:"90%", delay:5},
];

floatingElements.forEach(el => {
    const img = document.createElement("img");
    img.src = el.src;
    img.className = el.className;
    img.style.left = el.left;
    img.style.animationDelay = el.delay + "s";
    document.body.appendChild(img);
});
