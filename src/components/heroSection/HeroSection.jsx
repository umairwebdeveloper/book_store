import React from "react";

function HeroSection() {
	return (
		<div className="relative">
			<img
				src="https://libro-terra.com/wp-content/uploads/2020/01/header_slider_1.png"
				alt="Banner"
				className="w-full"
			/>
			<div className="absolute top-1/3 left-1/4 transform -translate-x-1/3 -translate-y-1/2 bg-slate-500 p-1 md:p-3 rounded-lg">
				<h1 className="text-xl md:text-4xl font-bold text-white">
					Online Book Store
				</h1>

				{/* Additional text or elements can be added here */}
			</div>
		</div>
	);
}

export default HeroSection;
