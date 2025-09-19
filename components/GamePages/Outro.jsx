"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";

const Outro = () => {
	const [peeps, setPeeps] = useState([]);

	useEffect(() => {
		const generated = Array.from({ length: 70 }, (_, i) => ({
			id: i,
			distance: 120 + Math.random() * 70,
			size: 2 + Math.random() * 3,
			orbitDuration: 50 + Math.random() * 30,
			spinDuration: 20 + Math.random() * 20,
			startAngle: Math.random() * 360,
			direction: Math.random() > 0.5 ? 1 : -1,
			delay: -Math.random() * (50 + Math.random() * 30),
		}));
		setPeeps(generated);
	}, []);

	return (
		<div className="relative flex items-center justify-center min-h-[95vh] mx-auto overflow-hidden">
			{/* Floating peeps */}
			{peeps.map((p) => (
				<div
					key={p.id}
					className="absolute animate-orbit"
					style={{
						width: `${p.distance}vh`,
						height: `${p.distance}vh`,
						animationDuration: `${p.orbitDuration}s`,
						animationDirection: p.direction === 1 ? "normal" : "reverse",
						animationDelay: `${p.delay}s`,
						transform: `rotate(${p.startAngle}deg)`,
					}}
				>
					<img
						src="/imgs/peep-blank.png"
						alt=""
						className="absolute animate-spin-slow opacity-50"
						style={{
							width: `${p.size}vw`,
							top: "0",
							left: "50%",
							transform: "translateX(-50%)",
							animationDuration: `${p.spinDuration}s`,
							animationDelay: `${-Math.random() * p.spinDuration}s`,
						}}
					/>
				</div>
			))}

			{/* Content */}
			<div className="flex flex-col items-center justify-center relative z-10 max-w-[60vw]">
				<h1 className="text-[5vh] handlee font-extrabold text-center mb-[0.85vh]">
					Thank you for joining me!
				</h1>

				<p className="text-[2.35vh] font-medium text-center handlee text-neutral-600 mb-[0.85vh] flex flex-col">
					<span>Be creative and be you!</span>
					<span>Always pursue your passions and interests. This portfolio</span>
					<span>
						was made to show my love to design an programming, and inspire
						others
					</span>
				</p>

				<p className="text-[2.35vh] font-medium text-center handlee text-neutral-600 mb-[2.25vh] flex flex-col">
					<span>
						In this portfolio website, you've learned about me from what I've
						said and from
					</span>
					<span>
						the way that I created and showed this website, to show how I like
						things done
					</span>
				</p>

				<p className="text-[2.35vh] font-semibold text-center handlee text-neutral-900 mb-[2.25vh] flex flex-col bg-gradient-to-r from-white via-slate-100 border-y-[1px] border-neutral-200 py-[0.75vh] to-white w-full">
					<span>
						It's not just the content of the website that tells you who I am and
					</span>
					<span>what I'm like, but also how I choose to present it.</span>
				</p>

				<p className="text-[2.35vh] font-medium text-center handlee text-neutral-600 flex flex-col">
					<span>
						You can explore more about me, in case I left out something from my
						links below!
					</span>
					<span>You can view my linkedin or download my resume</span>
				</p>

				{/* Buttons */}
				<div className="flex gap-[1vw] mt-[2vh]">
					{/* Resume download button */}
					<motion.a
						href="/resume.pdf"
						download="Janey-Resume.pdf"
						initial={{ opacity: 0, y: 10 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.3, delay: 0 }}
						className="relative cursor-pointer flex items-center justify-center w-[10vw] h-[5vh]"
					>
						<img
							src="/imgs/frame1.png"
							className="w-[10vw] h-[5vh] absolute top-0 left-0 z-0 object-cover"
							alt=""
						/>
						<span className="z-10 text-[2.25vh] text-neutral-900 flex items-center justify-center w-full h-full handlee font-semibold tracking-[1px]">
							Resume
						</span>
					</motion.a>

					{/* LinkedIn button */}
					<motion.a
						href="https://www.linkedin.com/in/yevheniia-simaka/"
						target="_blank"
						rel="noopener noreferrer"
						initial={{ opacity: 0, y: 10 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.3, delay: 0 }}
						className="relative cursor-pointer flex items-center justify-center w-[10vw] h-[5vh]"
					>
						<img
							src="/imgs/frame1.png"
							className="w-[10vw] h-[5vh] absolute top-0 left-0 z-0 object-cover rotate-[180deg]"
							alt=""
						/>
						<span className="z-10 text-[2.25vh] text-neutral-900 flex items-center justify-center w-full h-full handlee font-semibold tracking-[1px]">
							LinkedIn
						</span>
					</motion.a>
				</div>
			</div>
		</div>
	);
};

export default Outro;
