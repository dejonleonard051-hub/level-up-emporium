function showMessage() {
    alert("Welcome to Level-Up Emporium!");
}

function toggleDeal() {
    const dealElement = document.getElementById("deal");
    if (dealElement.style.display === "none" || dealElement.style.display === "") {
        dealElement.style.display = "block";
    } else {
        dealElement.style.display = "none";
    }
}