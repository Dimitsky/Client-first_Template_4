let trigger = document.querySelector( '#burger');
let menu = document.querySelector( '#header-nav ul' );
let body = document.querySelector( 'body' );

function openMenu() {
  trigger.setAttribute( 'aria-expanded', 'true' );
  menu.classList.add( 'open' );
  body.style.overflowX = 'hidden';
}

function closeMenu() {
  trigger.setAttribute( 'aria-expanded', 'false' );
  menu.classList.remove( 'open' );
  body.style.overflowX = '';
}

function menuEvent() {
  let isExpanded = trigger.getAttribute( 'aria-expanded' ) == 'true' ? true : false;

  if ( isExpanded )
    closeMenu();
  else 
    openMenu();
}

trigger.addEventListener( 'click', menuEvent );