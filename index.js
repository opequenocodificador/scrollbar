// Créer un événément au scroll

// Cacher la navbar si l'utilisateur comment à descendre et la sortir quand il remonte

// Stocker la valeur du précédent niveau de scroll pour savoir si l'on est monté ou descendu

// Connaitre niveau de scroll (window.scrollY)

// Enable hidden nav bar
{
  const nav = document.querySelector(".nav");
  let lastScrollY = window.scrollY;

  window.addEventListener("scroll", () => {
    if (lastScrollY < window.scrollY) {
      nav.classList.add("nav--hidden");
    } else {
      nav.classList.remove("nav--hidden");
    }

    lastScrollY = window.scrollY;
  });
}

//window.addEventListener("scroll", () => {
//if (window.scrollY > 50) {
//} else {
//nav.style.top = "-500px";
//}
//if (window.scrollY < 1807) {
//} else {
//nav.style.top = "+0px";
//}

//if ((window.scrollY = 0)) {
//} else {
//nav.style.top = "+0px";
//}
//});
