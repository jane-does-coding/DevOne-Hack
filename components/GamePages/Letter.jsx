"use client";
import React from "react";
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
import {
	SiNextdotjs,
	SiTailwindcss,
	SiTypescript,
	SiExpress,
	SiMongodb,
	SiFirebase,
	SiMui,
	SiJquery,
	SiFramer,
	SiPostman,
	SiVercel,
	SiPrisma,
	SiShadcnui,
	SiAxios,
} from "react-icons/si";
import { FaArrowRightLong } from "react-icons/fa6";

export default function Letter({
	today,
	makeSentence,
	frontendSkills,
	backendSkills,
	toolsDesignSkills,
	goNext,
}) {
	return (
		<motion.div
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			exit={{ opacity: 0, y: 20 }}
			transition={{ duration: 0.4 }}
			className="mt-[3vh] border-2 border-neutral-400 bg-white rounded-lg shadow-md py-[4vh] px-[2.5vw] text-left w-[100%] mx-auto"
		>
			<p className="text-[1.75vh] handlee font-semibold text-gray-500 mb-2">
				{today}
			</p>
			<p className="mb-4 handlee font-semibold text-[2vh] leading-[3.25vh]">
				Dear Friend,
			</p>
			<p className="mb-4 handlee font-semibold text-[2vh] leading-[3.25vh]">
				This is a letter to inform you of what skills and technologies I know!
				This might be lengthy but I know a lot of things, so please feel free to
				look through it all.
			</p>
			<p className="mb-4 handlee font-semibold text-[2vh] leading-[3.25vh]">
				On the frontend, I’ve learned {makeSentence(frontendSkills)}.
			</p>
			<p className="mb-4 handlee font-semibold text-[2vh] leading-[3.25vh]">
				On the backend, I’ve worked with {makeSentence(backendSkills)}.
			</p>
			<p className="mb-4 handlee font-semibold text-[2vh] leading-[3.25vh]">
				For tools & design, I use {makeSentence(toolsDesignSkills)}.
			</p>
			<p className="mb-4 handlee font-semibold text-[2vh] leading-[3vh]">
				Sincerely, <br /> The Character
			</p>

			{/* Icons */}
			<div className="flex flex-wrap justify-center gap-4 text-[4vh] mt-[3vh]">
				<FaHtml5 className="text-orange-500" />
				<FaCss3Alt className="text-blue-600" />
				<FaJs className="text-yellow-500" />
				<SiTypescript className="text-blue-500" />
				<FaReact className="text-cyan-500" />
				<SiNextdotjs className="text-black" />
				<FaNodeJs className="text-green-600" />
				<SiExpress className="text-gray-700" />
				<SiTailwindcss className="text-cyan-500" />
				<FaSass className="text-pink-400" />
				<SiShadcnui className="text-violet-500" />
				<SiMui className="text-blue-500" />
				<SiFramer className="text-pink-500" />
				<SiJquery className="text-blue-400" />
				<SiAxios className="text-purple-500" />
				<SiMongodb className="text-green-700" />
				<SiPrisma className="text-black" />
				<SiFirebase className="text-yellow-500" />
				<FaFigma className="text-pink-600" />
				<FaGitAlt className="text-red-500" />
				<FaGithub className="text-black" />
				<SiVercel className="text-black" />
				<SiPostman className="text-orange-500" />
			</div>

			{/* Continue Button */}
			<motion.div
				initial={{ opacity: 0, y: 10 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.3, delay: 0.5 }}
				className="flex items-center justify-center w-[10vw] h-[5vh] bg-white rounded-[2vh] cursor-pointer mx-auto mt-6 relative"
			>
				<button
					onClick={goNext}
					className="z-10 underline text-[2.25vh] flex items-center justify-center w-full h-full handlee font-semibold tracking-[1px] cursor-pointer"
				>
					Continue <FaArrowRightLong className="ml-[1vw] text-[2vh]" />
				</button>
			</motion.div>
		</motion.div>
	);
}
