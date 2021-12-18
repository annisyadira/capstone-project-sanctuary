const DrawerInitiator = {
    init({ button, drawer, content }) {
      button.addEventListener('click', (event) => {
        this._openDrawer(event, drawer, button);
      });
   
      content.addEventListener('click', (event) => {
        this._closeDrawer(event, drawer, button);
      });
    },
   
    _openDrawer(event, drawer, button) {
      event.preventDefault();
      event.stopPropagation();
      drawer.classList.toggle('responsive');
      button.classList.toggle('responsive');
    },
   
    _closeDrawer(event, drawer, button) {
      event.stopPropagation();
      drawer.classList.remove('responsive');
      button.classList.toggle('responsive');
    },
  };
   
  export default DrawerInitiator;