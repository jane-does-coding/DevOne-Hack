"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const hats = [
	{
		id: 1,
		src: "/imgs/hat1.png",
		title: "Creativity",
		desc: "Think outside the box and generate innovative ideas.",
	},
	{
		id: 2,
		src: "/imgs/hat2.png",
		title: "Problem Solving",
		desc: "Approach challenges with structured thinking.",
	},
	{
		id: 3,
		src: "/imgs/hat3.png",
		title: "Collaboration",
		desc: "Work effectively with others to achieve goals.",
	},
	{
		id: 4,
		src: "/imgs/hat4.png",
		title: "Leadership",
		desc: "Guide, inspire, and support a team.",
	},
	{
		id: 5,
		src: "/imgs/hat5.png",
		title: "Adaptability",
		desc: "Stay flexible and thrive in changing environments.",
	},
	{
		id: 6,
		src: "/imgs/hat6.png",
		title: "Professionalism",
		desc: "Maintain integrity, accountability, and respect.",
	},
];

export default function Page1({ goNext }) {
	const [selectedHat, setSelectedHat] = useState(null);
	const activeHat = hats.find((h) => h.id === selectedHat);

	const TypewriterText = ({ text }) => {
		const [displayedText, setDisplayedText] = useState("");

		React.useEffect(() => {
			setDisplayedText("");
			let timeouts = [];
			for (let i = 0; i < text.length; i++) {
				const timeout = setTimeout(() => {
					setDisplayedText((prev) => prev + text[i]);
				}, i * 20);
				timeouts.push(timeout);
			}
			return () => timeouts.forEach((t) => clearTimeout(t));
		}, [text]);

		return (
			<p className="text-[3vh] text-gray-600 mt-1 handlee text-center">
				{displayedText}
			</p>
		);
	};

	return (
		<div className="flex gap-[7.5vw] items-center justify-center min-h-[90vh] w-[85vw] border-green-300/0 border-2 mx-auto">
			<motion.div
				initial={{ opacity: 0, y: 10 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.3, delay: 5.75 }}
				className="absolute cursor-pointer bottom-[5vh] right-[6vw] flex items-center justify-center  w-[10vw] h-[5vh]"
			>
				<img
					src="/imgs/frame1.png"
					className="w-[10vw] h-[5vh] absolute top-0 left-0 z-0 object-cover"
					alt=""
				/>
				<button
					onClick={goNext}
					className="z-10 text-[2.25vh] flex items-center justify-center w-full h-full handlee font-semibold tracking-[1px] cursor-pointer"
				>
					Continue
				</button>
			</motion.div>

			<div className="flex flex-col border-2 border-amber-300/0 max-w-[32.5vw]">
				<motion.h2
					className="text-[4vh] handlee font-extrabold"
					initial={{ opacity: 0, y: 10 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.3, delay: 0.75 }}
				>
					A good worker should be able to wear many hats...
				</motion.h2>
				<motion.p
					initial={{ opacity: 0, y: 10 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.3, delay: 1 }}
					className="mb-[13vh] handlee font-medium mt-[1.5vh] text-[3vh]"
				>
					As a worker you will often need to adapt to different roles and
					responsibilities.
				</motion.p>
				<div className="relative w-fit mx-auto">
					<AnimatePresence mode="wait">
						{activeHat && (
							<motion.div
								key={activeHat.id}
								initial={{ opacity: 0, y: -10 }}
								animate={{ opacity: 1, y: 0 }}
								exit={{ opacity: 0 }}
								transition={{ duration: 0.2 }}
							>
								{activeHat.id <= 4 && (
									<img
										src={activeHat.src}
										className="w-[7.5vw] absolute ml-[45%] translate-x-[-50%] top-[-9.25vh] rotate-[-6deg]"
										alt="Selected Hat"
									/>
								)}
								{activeHat.id === 5 && (
									<img
										src={activeHat.src}
										className="w-[7.75vw] absolute ml-[45%] translate-x-[-50%] top-[-6vh] rotate-[9deg]"
										alt="Hat 5 Special"
									/>
								)}
								{activeHat.id === 6 && (
									<img
										src={activeHat.src}
										className="w-[2.25vw] absolute ml-[51%] translate-x-[-50%] top-[19vh] rotate-[6deg]"
										alt="Hat 6 Special"
									/>
								)}
							</motion.div>
						)}
					</AnimatePresence>
					<img src="/imgs/peep.png" className="w-[17vw]" alt="Character" />
				</div>
			</div>
			<div className="w-[30vw] border-0 border-b-blue-300/0 pb-[3vh]">
				<motion.h2
					initial={{ opacity: 0, y: 10 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.3, delay: 1.25 }}
					className="text-[3vh] text-center w-[70%] mx-auto handlee transition"
				>
					Click on different hats to see what I can do!
				</motion.h2>
				<motion.div
					initial={{ opacity: 0, y: 10 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.3, delay: 1.5 }}
					className="grid grid-cols-3 gap-x-[1.5vw] w-fit gap-y-[1.75vh] mx-auto mt-8 transition"
				>
					{hats.map((hat) => (
						<motion.div
							key={hat.id}
							whileTap={{ scale: 0.95 }}
							transition={{ type: "spring", stiffness: 400, damping: 17 }}
							onClick={() => setSelectedHat(hat.id)}
							className="flex items-center justify-center cursor-pointer"
						>
							<img
								src={hat.src}
								alt={hat.title}
								className={`w-[7vw] aspect-[1] rounded-lg transition p-[1vh] 
        ${
					selectedHat === hat.id
						? "border-2 border-neutral-600 shadow-md"
						: "border-2 border-neutral-200"
				}`}
							/>
						</motion.div>
					))}
				</motion.div>

				<AnimatePresence mode="wait">
					{activeHat && (
						<motion.div
							key={activeHat.id}
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
							transition={{ duration: 0.25 }}
							className="mt-[5vh] text-center relative"
						>
							<h3 className="font-semibold text-[4vh] pb-[3vh] handlee">
								{activeHat.title}
							</h3>
							<div className="absolute top-[6vh] text-center">
								<TypewriterText text={activeHat.desc} />
							</div>
						</motion.div>
					)}
				</AnimatePresence>
			</div>
		</div>
	);
}
