import React from 'react'
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';

function About() {
    return (
		<div>
            <Navbar />
			<div className="bg-gray-100 min-h-screen flex items-center justify-center">
				<div className="max-w-3xl px-4 py-8 bg-white shadow-lg rounded-lg">
					<h1 className="text-3xl font-semibold mb-4">
						About Our Online Bookstore
					</h1>
					<p className="text-lg leading-relaxed">
						At our online bookstore, we're dedicated to cultivating
						a haven for all bibliophiles and literary enthusiasts.
						Nestled in the digital realm, our virtual shelves are
						brimming with an eclectic array of books spanning
						genres, eras, and cultures. Whether you're looking for a
						classic novel or a contemporary bestseller, a self-help
						book or a children's book, we've got you covered. Our
						extensive collection is sure to satisfy your literary
						cravings.
					</p>
                    <h3 className="text-2xl font-semibold mb-4">
                        Our Mission
                    </h3>
                    <p className="text-lg leading-relaxed">
                        We're committed to making your book shopping experience
                        as seamless and enjoyable as possible. Our website is
                        designed to be user-friendly, with a simple interface
                        that allows you to browse through our collection with
                        ease. We also offer quick and reliable delivery, so you
                        can get your hands on your new book in no time.
                    </p>
                    <h3 className="text-2xl font-semibold mb-4">
                        Our Story
                    </h3>
					<p className="text-lg leading-relaxed">
						Founded by passionate book lovers, our bookstore was
						born from a vision to celebrate the written word and
						make literature accessible to all. We thrive on the
						belief that every book has the power to ignite
						imagination, broaden horizons, and change lives.
					</p>
                    <h3 className="text-2xl font-semibold mb-4">
                        Our Promise
                        </h3>
                    <p className="text-lg leading-relaxed">
                        We hope you enjoy browsing through our collection and
                        finding your next favorite book!
                    </p>
				</div>
			</div>
            <Footer />
		</div>
	);
    }

export default About