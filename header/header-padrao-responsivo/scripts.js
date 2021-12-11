const btnMobile = document.getElementById('btn-mobile');

function toggleMenu($event) {
    if ($event.type === 'touchstart') {
        //o event de touchstart gera um evento default em seguida, do tipo click, preventDefault evita esse comportamento
        $event.preventDefault();
    }
    const nav = document.getElementById('nav');
    nav.classList.toggle('active');

    const active = nav.classList.contains('active');
    $event.currentTarget.setAttribute('aria-expanded', active);

    if (active) {
        $event.currentTarget.setAttribute('aria-label', 'Fechar Menu');
    } else {
        $event.currentTarget.setAttribute('aria-label', 'Abrir Menu');
    }
}

btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener('touchstart', toggleMenu);