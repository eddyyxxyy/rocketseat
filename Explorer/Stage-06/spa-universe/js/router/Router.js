export default class Router {
  routes = {};
  app = document.querySelector("#app");

  constructor() {
    this.preventRedirect();
  }

  addRoute(routeName, routePath) {
    this.routes[routeName] = routePath;
  }

  getRoute(event) {
    event.preventDefault();
    window.history.pushState({}, "", event.target.href);
    this.handleRoute();
  }

  handleRoute() {
    const routePath = window.location.pathname;
    const route = this.routes[routePath] ?? this.routes[404];
    console.log(route, routePath);
    fetch(route)
      .then((resp) => resp.text())
      .then((html) => (this.app.innerHTML = html));
  }

  preventRedirect() {
    const links = document.querySelectorAll("a.prevent-default");
    for (const link of links) {
      link.addEventListener("click", this.getRoute.bind(this));
    }
  }
}
