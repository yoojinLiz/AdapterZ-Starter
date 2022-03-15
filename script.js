const proposalButton = document.querySelector(".intro-proposal");

function openContactPopup() {
    window.open("popup.html","contactPopup","top=300, left=1000, width=300, height=300, status=no, menubar=no, toolbar=no, resizable=no, location=no")
}

proposalButton.addEventListener("click",openContactPopup)