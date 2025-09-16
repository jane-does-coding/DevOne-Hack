"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const Intro = ({ goNext }) => {
	const [peeps, setPeeps] = useState([]);

	useEffect(() => {
		// Generate randomness only on client
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

			<div className="flex flex-col items-center justify-center relative z-10 max-w-[60vw]">
				<h1 className="text-[5vh] handlee font-extrabold text-center mb-[0.85vh]">
					Welcome to My world!
				</h1>
				<p className="text-[2.35vh] font-medium text-center handlee text-neutral-600 mb-[0.85vh] flex flex-col">
					<span>Welcome to another website of mine, if you</span>
					<span>
						are here I would guess you want to learn more about me. This website
					</span>
					<span>
						will tell you a bit about my skills and personality, but there is
						always more to it.
					</span>
				</p>
				<p className="text-[2.35vh] font-medium text-center handlee text-neutral-600 mb-[2.25vh] flex flex-col">
					<span>
						This website's idea and concept were inspired by the work of Nicky
						case, specifically
					</span>
					<span>
						the game "The Evolution of Trust". while the sode and artwork are
						still my original work
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
						This website isn't just pixels on the page telling you random facts
						about me.
					</span>
					<span>
						This website is what represents me through my passion in web dev
					</span>
				</p>
				<div className="flex gap-[1vw] mt-[2vh]">
					<motion.button
						initial={{ opacity: 0, y: 10 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.3, delay: 0 }}
						className="relative cursor-pointer flex items-center justify-center  w-[10vw] h-[5vh]"
					>
						<img
							src="/imgs/frame1.png"
							className="w-[10vw] h-[5vh] absolute top-0 left-0 z-0 object-cover opacity-50"
							alt=""
						/>
						<span className="z-10 text-[2.25vh] text-neutral-500 flex items-center justify-center w-full h-full handlee font-semibold tracking-[1px]">
							Quick Tour
						</span>
					</motion.button>
					<motion.div
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
						<button
							onClick={goNext}
							className="z-10 text-[2.25vh] flex items-center justify-center w-full h-full handlee font-semibold tracking-[1px] cursor-pointer"
						>
							Start
						</button>
					</motion.div>
				</div>
			</div>
		</div>
	);
};

export default Intro;
