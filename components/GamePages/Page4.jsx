"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const projects = [
	{
		id: 1,
		src: "/projects/project1.png",
		title: "Daily Bites",
		desc: "Website to post, share, and explore recipes.",
		links: [
			{ label: "Live Demo", url: "https://cooking-website-two.vercel.app/" },
			{
				label: "GitHub",
				url: "https://github.com/jane-does-coding/DailyBites",
			},
		],
	},
	{
		id: 2,
		src: "/projects/project2.png",
		title: "Specify",
		desc: "Website made specifically for students to manage their assignments.",
		links: [
			{ label: "GitHub", url: "https://github.com/jane-does-coding/Specify" },
			{ label: "Demo", url: "https://specify.vercel.app/" },
			{
				label: "Dribbble",
				url: "https://dribbble.com/shots/24077513-Specify-Task-Manager",
			},
		],
	},
	{
		id: 3,
		src: "/projects/project3.png",
		title: "Pomodoro",
		desc: "Pomodoro Timer with a video background.",
		links: [
			{
				label: "GitHub",
				url: "https://github.com/jane-does-coding/Productivity-App",
			},
			{
				label: "Demo",
				url: "https://productivity-app-umber.vercel.app/",
			},
			{
				label: "Dribbble",
				url: "https://dribbble.com/shots/23752831-Pomodoro-Timer",
			},
		],
	},
	{
		id: 4,
		src: "/projects/project4.png",
		title: "Mediblob",
		desc: "Mediblob is a modern medical portal that connects patients and doctors.",
		links: [
			{ label: "GitHub", url: "https://github.com/jane-does-coding/Mediblob" },
			{ label: "Demo", url: "https://mediblob-gv6d.vercel.app/" },
			{
				label: "Dribbble",
				url: "https://dribbble.com/shots/26324353-Mediblob",
			},
		],
	},
	{
		id: 5,
		src: "/projects/project5.png",
		title: "Lumea",
		desc: "Lumea calculates your carbon footprint based on lifestyle.",
		links: [
			{
				label: "GitHub",
				url: "https://github.com/jane-does-coding/lumea-techpals",
			},
			{
				label: "Demo",
				url: "https://lumea-techpals.vercel.app/",
			},
		],
	},
];

export default function Page4({ goNext }) {
	const [selectedProject, setSelectedProject] = useState(null);
	const activeProject = projects.find((p) => p.id === selectedProject);

	const clickSoundRef = useRef(null);

	useEffect(() => {
		clickSoundRef.current = new Audio("/sounds/click.wav");
	}, []);

	const playClick = () => {
		if (clickSoundRef.current) {
			clickSoundRef.current.currentTime = 0;
			clickSoundRef.current.play();
		}
	};

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
			<p className="text-[2.5vh] text-gray-600 mt-2 handlee text-center">
				{displayedText}
			</p>
		);
	};

	return (
		<div className="flex gap-[5vw] items-center justify-center min-h-[90vh] w-[85vw] mx-auto relative">
			{/* Continue button */}
			<motion.div
				initial={{ opacity: 0, y: 10 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.3, delay: 5.75 }}
				className="absolute cursor-pointer bottom-[10vh] right-0 flex items-center justify-center w-[10vw] h-[5vh] bg-white rounded-[1vh]  z-[55]"
				onClick={playClick}
			>
				<img
					src="/imgs/frame1.png"
					className="w-[10vw] h-[5vh] absolute top-0 left-0 z-0 object-cover"
					alt=""
				/>
				<Link
					href={"/page5"}
					className="z-10 text-[2.25vh] flex items-center justify-center w-full h-full handlee font-semibold tracking-[1px]"
				>
					Continue
				</Link>
			</motion.div>

			{/* Left Section */}
			<div className="flex flex-col max-w-[30vw]">
				<motion.h2
					className="text-[4vh] handlee font-extrabold"
					initial={{ opacity: 0, y: 10 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.3, delay: 0.75 }}
				>
					I can create anything... Right...?
				</motion.h2>
				<motion.p
					initial={{ opacity: 0, y: 10 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.3, delay: 1 }}
					className="mb-[7.5vh] handlee font-medium mt-[1.5vh] text-[3vh]"
				>
					With great power, comes great responsibility. Take a look at what I've
					built with my power of creating websites
				</motion.p>
				<div className="relative w-fit mx-auto">
					<img
						src="/imgs/peep-smirking.png"
						className="w-[20vw]"
						alt="Character"
					/>
				</div>
			</div>

			{/* Right Section */}
			<div className="w-[45vw] pb-[3vh]">
				<motion.h2
					initial={{ opacity: 0, y: 10 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.3, delay: 1.25 }}
					className="text-[3vh] text-center w-[70%] mx-auto handlee"
				>
					Explore my Projects
				</motion.h2>

				{/* Project Gallery */}
				<motion.div
					initial={{ opacity: 0, y: 10 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.3, delay: 1.5 }}
					className="grid grid-cols-3 gap-x-[1.5vw] gap-y-[1.75vh] mx-auto w-full mt-8"
				>
					{projects.map((project) => (
						<motion.div
							key={project.id}
							whileTap={{ scale: 0.95 }}
							transition={{ type: "spring", stiffness: 400, damping: 6 }}
							onClick={() => {
								setSelectedProject(project.id);
								playClick();
							}}
							className={`border-2 rounded-[2vh] py-[1.5vh] px-[1vw] cursor-pointer transition 
								${
									selectedProject === project.id
										? "border-neutral-600 shadow-md scale-[0.97]"
										: "border-neutral-300"
								}`}
						>
							<img
								src={project.src}
								className="w-full aspect-[5/3] object-cover rounded-[1.5vh] mb-[1vh] mt-[0.5vh] border-[1px] border-neutral-300"
								alt={project.title}
							/>
							<h3 className="text-[2vh] handlee font-semibold text-center">
								{project.title}
							</h3>
						</motion.div>
					))}
				</motion.div>

				{/* Active Project Info */}
				<AnimatePresence mode="wait">
					{activeProject && (
						<motion.div
							key={activeProject.id}
							initial={{ opacity: 0, y: 10 }}
							animate={{ opacity: 1, y: 0 }}
							exit={{ opacity: 0, y: -10 }}
							transition={{ duration: 0.3 }}
							className="mt-[5vh] text-center"
						>
							<h3 className="font-semibold text-[3vh] pb-[0vh] handlee">
								{activeProject.title}
							</h3>
							<TypewriterText text={activeProject.desc} />
							<div className="flex gap-4 justify-center mt-[3vh]">
								{activeProject.links.slice(0, 2).map((link, i) => (
									<div
										key={i}
										onClick={playClick}
										className="relative cursor-pointer hover:scale-95 transition w-[10vw] h-[5vh] flex items-center justify-center"
									>
										<img
											src="/imgs/frame1.png"
											className="w-full h-full absolute top-0 left-0 z-0 object-cover"
											alt="Link frame"
										/>
										<a
											href={link.url}
											target="_blank"
											rel="noopener noreferrer"
											className="z-10 text-[2vh] handlee font-semibold tracking-[1px] text-neutral-800 hover:text-neutral-600 transition"
										>
											{link.label}
										</a>
									</div>
								))}
							</div>
							<div className="flex gap-4 justify-center mt-[1.5vh]">
								{activeProject.links.slice(2, 4).map((link, i) => (
									<div
										key={i}
										onClick={playClick}
										className="relative cursor-pointer hover:scale-95 transition w-[10vw] h-[5vh] flex items-center justify-center"
									>
										<img
											src="/imgs/frame1.png"
											className="w-full h-full absolute top-0 left-0 z-0 object-cover"
											alt="Link frame"
										/>
										<a
											href={link.url}
											target="_blank"
											rel="noopener noreferrer"
											className="z-10 text-[2vh] handlee font-semibold tracking-[1px] text-neutral-800 hover:text-neutral-600 transition"
										>
											{link.label}
										</a>
									</div>
								))}
							</div>
						</motion.div>
					)}
				</AnimatePresence>
			</div>
		</div>
	);
}
