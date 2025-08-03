import {
    createRootRoute,
    createRoute,
    createRouter,
    RouterProvider,
} from "@tanstack/react-router";
import RootLayout from "./rootlayout";
import Home from "./pages/home";
import About from "./pages/about";
import Projects from "./pages/projects";
import TechStack from "./pages/techStack";
import Contact from "./pages/contact";
import NotFound from "./pages/not-found";

const rootRoute = createRootRoute({
    component: RootLayout,
    notFoundComponent: NotFound,
});

const homeRoute = createRoute({
    path: "/",
    getParentRoute: () => rootRoute,
    component: Home,
});
const aboutRoute = createRoute({
    path: "/about",
    getParentRoute: () => rootRoute,
    component: About,
});
const projectsRoute = createRoute({
    path: "/projects",
    getParentRoute: () => rootRoute,
    component: Projects,
});
const techStackRoute = createRoute({
    path: "/techStack",
    getParentRoute: () => rootRoute,
    component: techStack,
});
const contactRoute = createRoute({
    path: "/contact",
    getParentRoute: () => rootRoute,
    component: Contact,
});

const routeTree = rootRoute.addChildren([
    homeRoute,
    aboutRoute,
    projectsRoute,
    contactRoute,
]);

const router = createRouter({ routeTree });

export default function Router() {
    return <RouterProvider router={router} />;
}
