const alertContainer = document.querySelector(".alerta-container");
const btnClose = alertContainer.querySelector(".alert-close");
const num = 20;


window.addEventListener("load", () => {
    if (num == 20) {
        executeError();   
    }
})

function executeError() {
    alertContainer.style.transition = "1s all";
    alertContainer.style.transform = "translateX(0)";
    
}

btnClose.addEventListener("click", () => {
    alertContainer.style.transform = "translateX(250px)";
})

