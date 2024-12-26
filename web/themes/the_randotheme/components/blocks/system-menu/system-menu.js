const menu = document.getElementsByClassName('main-nav')[0];
if (menu) {
  const toggleExpand = document.getElementById('toggle-expand');
  const menuWrapper = menu.getElementsByClassName('menu-wrapper')[0];

  // Mobile Menu Show/Hide.
  toggleExpand.addEventListener('click', (e) => {
    toggleExpand.classList.toggle('toggle-expand--open');
    menuWrapper.classList.toggle('menu-wrapper--open');
    e.preventDefault();
  });

  /* Expose mobile sub menu on click.
    @todo: This is not necessary.
  const expandMenu = menu.getElementsByClassName('menu-wrapper')[0];
  Array.from(expandMenu).forEach((item) => {
    item.addEventListener('click', (e) => {
      const menuItem = e.currentTarget;
      const subMenu = menuItem.nextElementSibling;

      menuItem.classList.toggle('expand-sub--open');
      subMenu.classList.toggle('main-menu--sub-open');
    });
  });
  */
}
