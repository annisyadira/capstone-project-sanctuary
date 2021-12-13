const DrawerInitiator = {
    init({ button, drawer, content }) {
      button.addEventListener('click', (event) => {
        this._openDrawer(event, drawer);
      });
   
      content.addEventListener('click', (event) => {
        this._closeDrawer(event, drawer);
      });
    },
   
    _openDrawer(event, drawer) {
      event.preventDefault();
      event.stopPropagation();
      drawer.classList.toggle('responsive');
    },
   
    _closeDrawer(event, drawer) {
      event.stopPropagation();
      drawer.classList.remove('responsive');
    },
  };
   
  export default DrawerInitiator;