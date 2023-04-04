//Variables
const btnMenu = document.querySelector("#btn__menu");
const btnClose = document.querySelector("#closeIcon");
const showMenu = document.querySelector(".menu__toggle");
const closeMenu = document.querySelectorAll(".link");
const $form = document.querySelector("#form");
const btnSubmitContact = document.querySelector(".formContacto__btn");
const lordIcon = document.querySelectorAll(".icon-lord");

btnMenu.addEventListener("click", toggleMenu)
btnClose.addEventListener("click", toggleMenu)
btnSubmitContact.addEventListener("click", handleSubmit)

function toggleMenu() {
    showMenu.classList.toggle("show-menu__toggle");
    lordIcon.forEach( e => { 
        setInterval(e.classList.toggle("remove__icon"), 8000)
    })
}

closeMenu.forEach( e => {
    e.addEventListener("click", ()=> {
        showMenu.classList.remove("show-menu__toggle");
    })
});

function toggleButton(){
    const name = document.querySelector("#nombre").value;
    const email = document.querySelector("#email").value;
    const subject = document.querySelector("#asunto").value;
    const message = document.querySelector("#mensaje").value;
    if (name && email && subject && message) {
        btnSubmitContact.disabled = false;
        btnSubmitContact.classList.remove("btn--disable");
    } else {
        btnSubmitContact.disabled = true;
        btnSubmitContact.classList.add("btn--disable");
    }
}

async function handleSubmit(e) {
    e.preventDefault();
    const form = new FormData($form);
    const response = await fetch($form.action, {
        method: $form.method,
        body: form,
        headers: {
            "Accept": "application/json"
        }
    })
    console.log("Trabajando");
    if(response.ok){
        $form.reset()
        console.log("funcionando")
        alert("Gracias por contactarme, te escribiré pronto.")
    }
}
