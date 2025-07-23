import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import headshot from "../assets/images/headshot-tiny.jpg";

const AboutSection = () => {
	return (
		<section id="about" className="py-20">
			<div className="container mx-auto px-6">
				<div className="text-center mb-16">
					<h2 className="text-4xl md:text-5xl font-bold mb-6">
						About <span className="text-gradient">Me</span>
					</h2>
					<div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 mx-auto mb-8"></div>
				</div>

				<div className="max-w-4xl mx-auto">
					<Card className="bg-gray-900/50 border-gray-800 backdrop-blur-sm card-hover">
						<CardContent className="p-8">
							<div className="flex items-start space-x-6">
								<div className="flex-shrink-0">
									<div className="w-24 h-24 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-full flex items-center justify-center text-2xl font-bold text-white pulse-glow">
										{/* CB */}
										<img
											src={headshot}
											alt="Carol Bruggeman"
											className="rounded-full w-full h-full object-cover"
										/>
									</div>
								</div>
								<div className="flex-1">
									<div className="flex items-center space-x-4 mb-6">
										<Badge className="bg-emerald-500/20 text-emerald-400 border-emerald-500/30">
											Frontend Developer
										</Badge>
										<Badge className="bg-teal-500/20 text-teal-400 border-teal-500/30">
											Healthcare Professional
										</Badge>
									</div>

									<p className="text-gray-300 leading-relaxed text-lg mb-6">
										Frontend-focused developer with a background in emergency
										medicine and a passion for building intuitive, scalable web
										applications. I bring hands-on experience developing web
										applications using React.js, Next.js, TypeScript, Tailwind
										CSS, and Supabase.
									</p>

									<p className="text-gray-300 leading-relaxed text-lg mb-6">
										Currently contributing to diabetes care software at{" "}
										<span className="text-emerald-400 font-semibold">
											Palisaid
										</span>{" "}
										and building a data-driven genetics health platform MVP at{" "}
										<span className="text-emerald-400 font-semibold">
											Perimeter Health
										</span>
										.{" "}
										{/* Former Physician Assistant with 3+ years of frontline
										emergency medicine experience at a Level 1 trauma center. */}
										As a former emergency medicine Physician Assistant, I bring
										a calm-under-pressure mindset and user-centered approach to
										software development.
									</p>

									<p className="text-gray-300 leading-relaxed text-lg">
										My ability to translate real-world complexity into clear,
										user-friendly digital experiences helps teams build
										practical, impactful software—whether for clinicians,
										customers, or end users in any industry.
									</p>
								</div>
							</div>
						</CardContent>
					</Card>
				</div>
			</div>
		</section>
	);
};

export default AboutSection;
