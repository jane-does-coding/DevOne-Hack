"use client";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

const projects = [
	{ id: 1, src: "/projects/old1.png", title: "First Website" },
	{ id: 2, src: "/projects/old2.png", title: "Tik-tac-toe" },
	{ id: 3, src: "/projects/old3.png", title: "Terminal Game" },
	{ id: 4, src: "/projects/old4.png", title: "To-do list" },
];

const beforeWords = [
	"Lost",
	"Tutorial Hell",
	"Can't pick a language",
	"Wants to learn all",
	"Laptop from 10yo ago",
	"No creativity",
	"Clone projects",
	"Unoriginal",
];

const nowWords = [
	"Confident",
	"Self-taught problem solver",
	"Comfortable with chosen stack",
	"Knows what to focus on",
	"Upgraded setup",
	"Creative thinker",
	"Original projects",
	"Personal style",
];

const Page6 = () => {
	const [selectedProject, setSelectedProject] = useState(null);
	const [tab, setTab] = useState("before");

	const activeProject = projects.find((p) => p.id === selectedProject);
	const words = tab === "before" ? beforeWords : nowWords;
	const peepImg =
		tab === "before" ? "/imgs/peep-blank.png" : "/imgs/peep-happy.png";

	return (
		<div className="flex flex-col items-center justify-center min-h-[90vh] w-[90vw] border-green-300/0 border-2 mx-auto">
			{/* Continue button */}
			<motion.div
				initial={{ opacity: 0, y: 10 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.3, delay: 5.75 }}
				className="absolute cursor-pointer bottom-[10vh] right-[6vw] flex items-center justify-center  w-[10vw] h-[5vh]"
			>
				<img
					src="/imgs/frame1.png"
					className="w-[10vw] h-[5vh] absolute top-0 left-0 z-0 object-cover"
					alt=""
				/>
				<Link
					href={"/outro"}
					className="z-10 text-[2.25vh] flex items-center justify-center w-full h-full handlee font-semibold tracking-[1px] cursor-pointer"
				>
					Continue
				</Link>
			</motion.div>

			{/* Header */}
			<div className="flex flex-col items-center justify-center mb-[5vh]">
				<motion.h2
					className="text-[4vh] handlee font-extrabold"
					initial={{ opacity: 0, y: 10 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.3, delay: 0.75 }}
				>
					I've came a long way...
				</motion.h2>
				<motion.p
					initial={{ opacity: 0, y: 10 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.3, delay: 1 }}
					className="handlee font-medium text-[3vh]"
				>
					Here is where I was years ago, when I started learning
				</motion.p>
			</div>

			{/* Comparison section */}
			<div className="flex items-center justify-center min-w-[20vw] w-full">
				{/* Tabs + Words */}
				<div className="flex flex-col min-w-[17vw]">
					<div className="flex mb-[2.5vh]">
						<button
							onClick={() => setTab("before")}
							className={`w-full py-[0.5vh] border-b-[1px] cursor-pointer handlee font-semibold border-neutral-600 transition 
                ${tab === "before" ? "bg-neutral-200" : "bg-transparent"}`}
						>
							Before
						</button>
						<button
							onClick={() => setTab("now")}
							className={`w-full py-[0.5vh] border-b-[1px] cursor-pointer handlee font-semibold border-neutral-600 transition 
                ${tab === "now" ? "bg-neutral-200" : "bg-transparent"}`}
						>
							Now
						</button>
					</div>
					<AnimatePresence mode="wait">
						<motion.div
							key={tab}
							initial={{ opacity: 0, y: 10 }}
							animate={{ opacity: 1, y: 0 }}
							exit={{ opacity: 0, y: -10 }}
							transition={{ duration: 0.3 }}
							className="flex flex-col"
						>
							{words.map((word, i) => (
								<span
									key={i}
									className="handlee text-[2.25vh] font-semibold py-[0.25vh]"
								>
									{word}
								</span>
							))}
						</motion.div>
					</AnimatePresence>
				</div>

				{/* Middle image with fade swap */}
				<div className="relative min-w-[15vw] pl-[4vw] pr-[5vw]">
					<AnimatePresence mode="wait">
						<motion.img
							key={peepImg}
							src={peepImg}
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
							transition={{ duration: 0.3 }}
							className="w-[16vw]"
							alt="peep"
						/>
					</AnimatePresence>
				</div>

				{/* Projects grid */}
				<div className="w-fit">
					<motion.p
						initial={{ opacity: 0, y: 10 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.3, delay: 1 }}
						className="handlee font-medium text-[2vh] mx-auto text-center"
					>
						{"(Projects back from 2019-2020)"}
					</motion.p>
					<motion.div
						initial={{ opacity: 0, y: 10 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.3, delay: 1.5 }}
						className="grid grid-cols-2 w-fit gap-x-[1.5vw] gap-y-[1.75vh] mx-auto mt-[1vh]"
					>
						{projects.map((project) => (
							<motion.div
								key={project.id}
								whileTap={{ scale: 0.95 }}
								transition={{ type: "spring", stiffness: 400, damping: 6 }}
								onClick={() => setSelectedProject(project.id)}
								className={`border-2 rounded-[2vh] py-[1.5vh] px-[1vw] cursor-pointer transition 
									${
										selectedProject === project.id
											? "border-neutral-600 shadow-md scale-[0.97]"
											: "border-neutral-300"
									}`}
							>
								<img
									src={project.src}
									className="w-[12.5vw] aspect-[5/3] object-cover rounded-[1.5vh] mb-[1vh] mt-[0.5vh] border-[1px] border-neutral-300"
									alt={project.title}
								/>
								<h3 className="text-[2vh] handlee font-semibold text-center">
									{project.title}
								</h3>
							</motion.div>
						))}
					</motion.div>
				</div>
			</div>
		</div>
	);
};

export default Page6;
