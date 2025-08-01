import config from "../config";

function Contact() {
    return (
        <div className="relative flex-grow flex flex-col items-center justify-center text-center px-6">
            <div>
                <h1 className="text-black dark:text-white text-5xl font-bold mb-4">
                    {config.contact.heading}
                </h1>
                <p className="text-black dark:text-white text-lg max-w-2xl mx-auto">
                    {config.contact.description}
                </p>
            </div>
        </div>
    );
}

export default Contact;
