const menu = document.getElementById('pages');
const content = document.getElementById('content');

// toggle between showing and hiding page links when clicking on 'hamburger' menu div and menu items
function toggleMenu() {
  if (menu.style.maxHeight === '300px') {
    menu.style.maxHeight = '0';
    menu.removeEventListener('click', closeMenu);
    content.removeEventListener('click', closeMenu);
  } else {
    menu.style.maxHeight = '300px';
    menu.addEventListener('click', closeMenu);
    content.addEventListener('click', closeMenu);
  }
}

// close menu when clicking on menu item or page content
function closeMenu() {
  menu.style.maxHeight = '0';
  menu.removeEventListener('click', closeMenu);
  content.removeEventListener('click', closeMenu);
}
