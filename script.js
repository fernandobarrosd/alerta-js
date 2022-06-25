const alertContainer = document.querySelector(".alerta-container");
const btnClose = alertContainer.querySelector(".alert-close");


window.addEventListener("load", () => {
    executeError();
})

function executeError() {
    alertContainer.style.transition = "1s all";
    alertContainer.style.transform = "translateX(0)";
    
}

btnClose.addEventListener("click", () => {
    alertContainer.style.transform = "translateX(250px)";
})