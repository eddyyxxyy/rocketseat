class Router {
  routes = {};
  app = document.getElementById("app");

  addRoute(routeName, uriPath) {
    this.routes[routeName] = uriPath;
  }

  getRoute(event) {
    event = event || window.event;
    event.preventDefault();

    window.history.pushState({}, "", event.target.href);

    this.handleRoute();
  }

  handleRoute() {
    const { pathname } = window.location;
    const route = this.routes[pathname] ?? this.routes[404];
    fetch(route)
      .then((resp) => resp.text())
      .then((html) => {
        app.innerHTML = html;
      });
  }
}

export default Router;
