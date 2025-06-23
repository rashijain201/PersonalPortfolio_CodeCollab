import {
	createRootRoute,
	createRoute,
	createRouter,
} from "@tanstack/react-router";
import Home from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/contact";
import Projects from "./pages/projects";
import NotFound from "./pages/not-found";
import RootLayout from "./rootlayout";

const rootRoute = createRootRoute({
	component: RootLayout,
	notFoundComponent: NotFound,
});

const indexRoute = createRoute({
	path: "/",
	getParentRoute: () => rootRoute,
	component: Home,
});

const aboutRoute = createRoute({
	path: "/about-me",
	getParentRoute: () => rootRoute,
	component: About,
});

const contactRoute = createRoute({
	path: "/contact-me",
	getParentRoute: () => rootRoute,
	component: Contact,
});

const projectsRoute = createRoute({
	path: "/projects",
	getParentRoute: () => rootRoute,
	component: Projects,
});

const routeTree = rootRoute.addChildren([
	indexRoute,
	aboutRoute,
	contactRoute,
	projectsRoute,
]);

export const router = createRouter({ routeTree });
