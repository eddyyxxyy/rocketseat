import Router from "./router.js";

const router = new Router();

router.addRoute("/", "/pages/home.html");
router.addRoute("/about", "/pages/about.html");
router.addRoute("/contact", "/pages/contact.html");
router.addRoute(404, "/pages/404.html");

router.handleRoute();

window.router = () => router.getRoute();
window.onpopstate = () => handleRoute();
