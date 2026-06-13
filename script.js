


// =====================
// CONTADOR
// =====================

const weddingDate = new Date("Mar 27, 2027 18:00:00").getTime();
const countdown = document.getElementById("countdown");

function updateCountdown() {

    const now = new Date().getTime();
    const distance = weddingDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));

    const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24))
        / (1000 * 60 * 60)
    );

    const minutes = Math.floor(
        (distance % (1000 * 60 * 60))
        / (1000 * 60)
    );

    if (countdown) {
        countdown.innerHTML =
            `${days} días ${hours} hs ${minutes} min`;
    }
}

setInterval(updateCountdown, 1000);
updateCountdown();


// =====================
// MENU MOBILE
// =====================

const menuBtn = document.getElementById("menu-btn");
const navLinks = document.querySelector(".nav-links");

if (menuBtn) {

    menuBtn.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });

}


// =====================
// SOBRE INICIAL
// =====================

const carta = document.getElementById("carta");
const intro = document.getElementById("intro");
const content = document.getElementById("main-content");

if (carta) {

    carta.addEventListener("click", () => {

        intro.style.opacity = "0";

        setTimeout(() => {

            intro.style.display = "none";

            content.classList.add("show");

        }, 1000);

    });

}



// =====================
// FORMULARIO RSVP
// =====================
const asisteSelect =
document.getElementById("asiste");

const acompanantes =
document.getElementById("acompanantes");

asisteSelect.addEventListener("change", () => {

    if(asisteSelect.value === "Si"){

        acompanantes.style.display = "block";

    }else{

        acompanantes.style.display = "none";

    }

});
const form = document.getElementById("rsvpForm");

if (form) {

    form.addEventListener("submit", async (e) => {

        e.preventDefault();

const data = {

    nombre:
        document.getElementById("nombre").value,

    asiste:
        document.getElementById("asiste").value,

    adultos:
        document.getElementById("adultos").value,

    ninos:
        document.getElementById("ninos").value,

    alimentacion:
        document.getElementById("alimentacion").value,

    cancion:
        document.getElementById("cancion").value,

    mensaje:
        document.getElementById("mensaje").value

};

acompanantes.style.display = "flex";

console.log("DATOS:", data);
        try {

            await fetch(
                "https://script.google.com/macros/s/AKfycbzNtWfHRTEa9wZIDIYOM8d2_QF0eyFuHu6MT5G3EQiiilx4dlo0oqFeQMjnMB3mpE-c/exec",
                {
                    method: "POST",
                    mode: "no-cors",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(data)
                }
            );

            document.getElementById("mensajeConfirmacion").innerHTML =
"✓ ¡Gracias por confirmar tu asistencia!";

            form.reset();

        } catch (error) {

            console.error(error);

            alert("Error al enviar la confirmación");

        }

    });

}

const modal =
document.getElementById("videoModal");

const openVideo =
document.getElementById("openVideo");

const closeModal =
document.querySelector(".close-modal");

openVideo.addEventListener("click", (e) => {

    e.preventDefault();

    modal.style.display = "flex";

});

closeModal.addEventListener("click", () => {

    modal.style.display = "none";

});

window.addEventListener("click", (e) => {

    if(e.target === modal){

        modal.style.display = "none";

    }

});

const copiarBtn = document.querySelector(".copiar-alias");

if(copiarBtn){

    copiarBtn.addEventListener("click", () => {

        navigator.clipboard.writeText(
            "camila.matias.boda"
        );

        copiarBtn.innerHTML = "✓ Alias copiado";

    });

}