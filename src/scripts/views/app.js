import UrlParser from '../routes/url-parser';
import routes from '../routes/routes';
import logoutInitiator from '../utils/logoutInitiator';

class App {
  constructor({ button, drawer, content, logoutBtn }) {
    this._button = button;
    this._drawer = drawer;
    this._content = content;
    this._logoutBtn = logoutBtn;

    this._initialAppShell();
  }

  _initialAppShell() {
    logoutInitiator.init({
      logoutBtn: this._logoutBtn
    })
  }

  async renderPage() {
    const url = UrlParser.parseActiveUrlWithCombiner();
    const page = routes[url];
    this._content.innerHTML = await page.render();
    await page.afterRender();
  }
}

export default App;
