function onClickMenu() {
    const menu = document.getElementById('menu');
    menu.classList.toggle('active');

    const list = document.getElementById('nav');
    list.classList.toggle('active');

    const bg = document.getElementById('menu-bg');
    bg.classList.toggle('active-bg');
}