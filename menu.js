// toggle between showing and hiding page links when clicking on 'hamburger' menu div and menu items
function toggleMenu() {
  var x = document.getElementById('pages');
  if (x.style.maxHeight === '300px') {
    x.style.maxHeight = '0';
    x.removeEventListener('click', closeMenu);
    document.getElementById('content').removeEventListener('click', closeMenu);
  } else {
    x.style.maxHeight = '300px';
    x.addEventListener('click', closeMenu);
    document.getElementById('content').addEventListener('click', closeMenu);
  }
}

// close menu when clicking on menu iteme or page content
function closeMenu() {
  var x = document.getElementById('pages');
  x.style.maxHeight = '0';
  x.removeEventListener('click', closeMenu);
  document.getElementById('content').removeEventListener('click', closeMenu);
}
