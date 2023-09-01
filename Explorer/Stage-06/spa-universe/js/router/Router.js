export default class Router {
  routes = {};
  app = document.querySelector("#app");
  backgroundClasses = {};

  constructor() {
    this.preventRedirect();
  }

  addRoute(routeName, routePath) {
    this.routes[routeName] = routePath;
  }

  addBackground(routeName, backgroundClassName) {
    this.backgroundClasses[routeName] = backgroundClassName;
  }

  getRoute(event) {
    event.preventDefault();
    window.history.pushState({}, "", event.target.href);
    this.handleRoute();
  }

  handleRoute() {
    const routePath = window.location.pathname;
    const route = this.routes[routePath] ?? this.routes[404];
    fetch(route)
      .then((resp) => resp.text())
      .then((html) => {
        this.handleBackground(routePath);
        this.app.innerHTML = html;
      });
  }

  handleBackground(routePath) {
    const backgroundClass =
      this.backgroundClasses[routePath] ?? this.backgroundClasses["/"];

    const body = document.querySelector("body");

    body.className = backgroundClass;
  }

  preventRedirect() {
    const links = document.querySelectorAll("a.prevent-default");
    for (const link of links) {
      link.addEventListener("click", this.getRoute.bind(this));
    }
  }
}
