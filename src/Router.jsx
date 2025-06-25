import { createRootRoute, createRoute, createRouter, RouterProvider } from '@tanstack/react-router'
import { lazy } from 'react'
import RootLayout from './RootLayout'
import Home from './pages/home'
import About from './pages/about'
import Projects from './pages/projects'
import Contact from './pages/contact'

const rootRoute = createRootRoute({ component: RootLayout })

const homeRoute = createRoute({ path: '/', getParentRoute: () => rootRoute, component: Home })
const aboutRoute = createRoute({ path: '/about', getParentRoute: () => rootRoute, component: About })
const projectsRoute = createRoute({ path: '/projects', getParentRoute: () => rootRoute, component: Projects })
const contactRoute = createRoute({ path: '/contact', getParentRoute: () => rootRoute, component: Contact })

const routeTree = rootRoute.addChildren([
  homeRoute,
  aboutRoute,
  projectsRoute,
  contactRoute,
])

const router = createRouter({ routeTree })

export default function Router() {
  return <RouterProvider router={router} />
}
