import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";

const Contact = () => {
	return (
		<>
			<Navbar />

			<div className="bg-gray-100 py-8">
				<h2 className="text-3xl font-bold text-center mb-6">
					Contact page
				</h2>

				<div className="flex justify-center mb-8">
					<iframe
						src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2174034.0520403134!2d-7.102162090492409!3d53.65065120193067!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x25a3b1142c791a9%3A0xc4f8a0433288257a!2sUnited%20Kingdom!5e0!3m2!1sen!2s!4v1701676477671!5m2!1sen!2s"
						width="80%"
						height="400"
						style={{ border: 0 }}
						allowFullScreen=""
						loading="lazy"
						title="map"
						referrerPolicy="no-referrer-when-downgrade"
					></iframe>
				</div>

				<div className="container mx-auto">
					<div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-md">
						<form action="#" className="space-y-4">
							<input
								type="text"
								placeholder="Username"
								name="username"
								required
								autoComplete="off"
								className="block w-full border-gray-300 rounded-md p-3 focus:outline-none focus:border-blue-500"
							/>

							<input
								type="email"
								name="email"
								placeholder="Email"
								autoComplete="off"
								required
								className="block w-full border-gray-300 rounded-md p-3 focus:outline-none focus:border-blue-500"
							/>

							<textarea
								name="message"
								cols="30"
								rows="6"
								required
								autoComplete="off"
								placeholder="Enter your message"
								className="block w-full border-gray-300 rounded-md p-3 focus:outline-none focus:border-blue-500"
							></textarea>

							<button
								type="submit"
								className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors duration-300"
							>
								Send
							</button>
						</form>
					</div>
				</div>
			</div>
			<Footer />
		</>
	);
};

export default Contact;
