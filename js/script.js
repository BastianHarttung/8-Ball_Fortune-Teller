let menuOpen = false;

/**
 * Öffne Menü beim Klick auf 3 Balken
 */
function openMenu() {
    if (!menuOpen) {
        menuOpen = true;
        document.getElementById('nav').classList.add('nav-active')
    }
    else if (menuOpen) {
        menuOpen = false;
        document.getElementById('nav').classList.remove('nav-active')
    }
}