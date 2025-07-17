import { useState } from "react";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";

const ContactSection = () => {
	const [copiedEmail, setCopiedEmail] = useState(false);

	const handleEmailClick = () => {
		navigator.clipboard.writeText("carol.bruggeman92@gmail.com");
		setCopiedEmail(true);
		setTimeout(() => setCopiedEmail(false), 2000);
	};

	return (
		<section id="contact" className="py-20 pb-32">
			<div className="container mx-auto px-6">
				<div className="text-center mb-16">
					<h2 className="text-4xl md:text-5xl font-bold mb-6">
						Get In <span className="text-gradient">Touch</span>
					</h2>
					<div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 mx-auto mb-8"></div>
					<p className="text-gray-300 text-lg max-w-2xl mx-auto">
						Ready to collaborate on your next project? Let's connect and create
						something amazing together.
					</p>
				</div>

				<div className="max-w-2xl mx-auto">
					<Card className="bg-gray-900/50 border-gray-800 backdrop-blur-sm card-hover">
						<CardContent className="p-8">
							<div className="text-center mb-8">
								<div className="w-20 h-20 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-full flex items-center justify-center text-2xl font-bold text-white mx-auto mb-4 pulse-glow">
									<svg
										className="w-8 h-8"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
										/>
									</svg>
								</div>
								<h3 className="text-2xl font-bold text-white mb-2">
									Let's Talk!
								</h3>
								<p className="text-gray-300">
									I'm always open to discussing new opportunities and
									interesting projects.
								</p>
							</div>

							<div className="space-y-6">
								<div className="flex flex-col sm:flex-row gap-4">
									<Button
										onClick={handleEmailClick}
										className="flex-1 accent-gradient hover:scale-105 transition-transform duration-300 px-6 py-3"
									>
										<svg
											className="w-5 h-5 mr-2"
											fill="none"
											stroke="currentColor"
											viewBox="0 0 24 24"
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth={2}
												d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
											/>
										</svg>
										{copiedEmail ? "Email Copied!" : "Copy Email"}
									</Button>

									<Button
										variant="outline"
										className="flex-1 border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white transition-all duration-300 px-6 py-3"
										onClick={() =>
											window.open(
												"https://www.linkedin.com/in/carolbruggemandeveloper/",
												"_blank"
											)
										}
									>
										<svg
											className="w-5 h-5 mr-2"
											fill="currentColor"
											viewBox="0 0 24 24"
										>
											<path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.771v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
										</svg>
										LinkedIn Profile
									</Button>
								</div>

								<div className="text-center pt-4">
									<p className="text-gray-400">
										<span className="text-emerald-400">
											carol.bruggeman92@gmail.com
										</span>
									</p>
								</div>
							</div>
						</CardContent>
					</Card>
				</div>

				{/* <div className="text-center mt-16">
					<p className="text-gray-400">
						Built with ❤️ using React, TypeScript, and Tailwind CSS
					</p>
				</div> */}
			</div>
		</section>
	);
};

export default ContactSection;
