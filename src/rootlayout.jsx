import { Outlet } from "@tanstack/react-router";
import Navbar from "./pages/navbar";
import Footer from "./pages/footer";

function RootLayout() {
	return (
		<div>
			<Navbar />
			<Outlet />
			<Footer />
		</div>
	);
}

export default RootLayout;
