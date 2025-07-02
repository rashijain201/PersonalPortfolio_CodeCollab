import {
	SectionHeading,
	SubHeading,
	CustomButton,
} from "../templates/basicUIComponents";

const Home = () => {
	return (
		<div className="p-8 space-y-6 text-center justify-center items-center flex-grow align-middle bg-gray-150">
			<SectionHeading text="🚀 Welcome to My Portfolio" />
			<SubHeading text="I'm building something amazing!" />
			<CustomButton
				label="Click Me"
				onClick={() => alert("Button Clicked!")}
			/>
			<div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
				{/* Card 1 */}
				<div className="bg-white shadow-md rounded-xl p-6 text-left">
					<h3 className="text-xl font-semibold text-purple-700 mb-2">
						Project 1 Title
					</h3>
					<p className="text-gray-600 mb-4">
						This is a short description of the project.
					</p>
					<button className="px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700 transition">
						View Project
					</button>
				</div>

				{/* Card 2 */}
				<div className="bg-white shadow-md rounded-xl p-6 text-left">
					<h3 className="text-xl font-semibold text-purple-700 mb-2">
						Project 2 Title
					</h3>
					<p className="text-gray-600 mb-4">
						Another placeholder project description.
					</p>
					<button className="px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700 transition">
						View Project
					</button>
				</div>
			</div>
		</div>
	);
};

export default Home;
