import Router from "./router/Router.js";

const router = new Router();

router.addRoute("/", "/pages/home.html");
router.addRoute("/o-universo", "/pages/o-universo.html");
router.addRoute("/exploracao", "/pages/exploracao.html");
router.addRoute(404, "/pages/404.html");

router.handleRoute();
