import React from 'react'
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';

function About() {
    return (
		<div>
			<Navbar />
			<div className="bg-gray-100 min-h-screen flex items-center justify-center py-5">
				<div className="max-w-3xl px-4 py-8 bg-white shadow-lg rounded-lg">
					<h1 className="text-3xl font-semibold mb-4">
						Power Up Your Rig with Cutting-Edge CPUs and GPUs at
						PcGuru
					</h1>
					<p className="text-lg leading-relaxed mb-3">
						Welcome to PcGuru, your premier destination for
						high-performance CPUs and GPUs! We're passionate about
						delivering cutting-edge computing components to fuel
						your gaming, creative endeavors, or professional tasks.
					</p>
					<p className="text-lg leading-relaxed mb-3">
						At PcGuru, we understand the pivotal role that
						processors and graphics cards play in maximizing your
						system's potential. That's why we curate an extensive
						collection of top-tier CPUs and GPUs from leading brands
						like AMD, Intel, NVIDIA, and more. Whether you're a
						hardcore gamer seeking unmatched frame rates, a content
						creator in pursuit of seamless rendering, or a
						professional demanding powerful processing capabilities,
						we have the perfect solution for you.
					</p>
					<p className="text-lg leading-relaxed mb-3">
						Explore our diverse range of products, featuring the
						latest generations of CPUs and GPUs designed to elevate
						your computing experience. From entry-level options
						ideal for casual users to high-end, overclockable models
						tailored for enthusiasts and professionals, we offer a
						comprehensive selection to suit every need and budget.
					</p>
					<p className="text-lg leading-relaxed mb-3">
						Shopping at PcGuru guarantees not only exceptional
						product quality but also a seamless purchasing
						experience. Our knowledgeable team is here to assist
						you, providing expert guidance to help you find the
						ideal CPU or GPU that aligns with your specific
						requirements.
					</p>
					<p className="text-lg leading-relaxed mb-3">
						Revitalize your computer's performance and unlock its
						full potential with our premium range of CPUs and GPUs.
						Join the ranks of satisfied customers who have
						experienced enhanced gaming, smoother workflows, and
						unparalleled computing power thanks to our top-notch
						products.
					</p>
				</div>
			</div>
			<Footer />
		</div>
	);
    }

export default About