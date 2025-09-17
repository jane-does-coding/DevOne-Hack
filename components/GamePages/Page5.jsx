"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import {
	FaReact,
	FaJs,
	FaHtml5,
	FaCss3Alt,
	FaGitAlt,
	FaNodeJs,
	FaSass,
	FaGithub,
	FaFigma,
} from "react-icons/fa";
import { SiNextdotjs, SiMongodb } from "react-icons/si";

export default function Page1({ goNext }) {
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

	// Pick 10 skills
	const skills = [
		{ name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
		{ name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
		{ name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
		{ name: "React", icon: <FaReact className="text-sky-400" /> },
		{ name: "Next.js", icon: <SiNextdotjs className="text-black" /> },
		{ name: "Node.js", icon: <FaNodeJs className="text-green-600" /> },
		{ name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
		{ name: "Sass", icon: <FaSass className="text-pink-400" /> },
		{ name: "GitHub", icon: <FaGithub className="text-gray-800" /> },
		{ name: "Figma", icon: <FaFigma className="text-purple-500" /> },
	];

	return (
		<div className="flex flex-col gap-[2.5vw] items-center justify-center min-h-[90vh] w-[85vw] border-green-300/0 border-2 mx-auto">
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

			<div className="w-[55vw] flex flex-col border-0 border-b-blue-300/0 pb-[3vh]">
				<motion.h2
					initial={{ opacity: 0, y: 10 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.3, delay: 1.25 }}
					className="text-[3vh] text-center w-[70%] mx-auto handlee transition"
				>
					Look at all the cool things I know!
				</motion.h2>

				{/* Skills grid */}
				<motion.div
					initial={{ opacity: 0, y: 10 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.3, delay: 1.75 }}
					className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 mt-6 w-fit gap-x-[2vw] gap-y-[3vh] mx-auto"
				>
					{skills.map((skill, i) => (
						<div
							key={i}
							className="flex flex-col items-center justify-center text-center"
						>
							<div className="text-[5vh]">{skill.icon}</div>
						</div>
					))}
				</motion.div>
			</div>

			<div className="flex border-2 border-amber-300/0 max-w-[55vw]">
				<motion.p
					initial={{ opacity: 0, y: 10 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.3, delay: 1 }}
					className="handlee font-medium mt-[1.5vh] text-[3vh]"
				>
					I focus on fullstack web development, because I find it fun to do.
				</motion.p>
				<div className="relative min-w-[17vw] mx-[4vw]">
					<img src="/imgs/peep.png" className="w-[17vw]" alt="Character" />
				</div>
				<motion.p
					initial={{ opacity: 0, y: 10 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.3, delay: 1 }}
					className="handlee font-medium mt-[1.5vh] pl-[2vw] text-[3vh]"
				>
					While I still do web designing to make my websites even better
				</motion.p>
			</div>
		</div>
	);
}
