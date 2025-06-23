import { RouterProvider } from "@tanstack/react-router";
import { router } from "./Router";

function App() {
	return <RouterProvider router={router} />;
}

export default App;
