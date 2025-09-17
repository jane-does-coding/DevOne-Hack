"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BsMailbox, BsMailboxFlag } from "react-icons/bs";
import {
	riddles,
	frontendSkills,
	backendSkills,
	toolsDesignSkills,
} from "@/data/skillsAndRiddles";
import Letter from "./Letter";

export default function Page5({ goNext }) {
	const [mailOpened, setMailOpened] = useState(false);
	const [riddleSolved, setRiddleSolved] = useState(false);
	const [selectedAnswer, setSelectedAnswer] = useState(null);
	const [wrongAnswer, setWrongAnswer] = useState(false);

	const [currentRiddle, setCurrentRiddle] = useState(
		riddles[Math.floor(Math.random() * riddles.length)]
	);

	const today = new Date().toLocaleDateString("en-US", {
		year: "numeric",
		month: "long",
		day: "numeric",
	});

	const makeSentence = (arr) =>
		arr.length > 1
			? arr.slice(0, -1).join(", ") + ", and " + arr[arr.length - 1]
			: arr[0];

	const handleAnswer = (choice) => {
		setSelectedAnswer(choice);
		if (choice === currentRiddle.answer) {
			setRiddleSolved(true);
		} else {
			setWrongAnswer(true);
			setTimeout(() => {
				setWrongAnswer(false);
				setSelectedAnswer(null);
				setCurrentRiddle(riddles[Math.floor(Math.random() * riddles.length)]);
			}, 2500);
		}
	};

	return (
		<div className="flex gap-[5vw] items-center justify-center min-h-[90vh] w-[85vw] mx-auto">
			{/* Character + Intro */}
			<div className="flex flex-col max-w-[30vw]">
				<motion.h2
					className="text-[4vh] handlee font-extrabold"
					initial={{ opacity: 0, y: 10 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.3, delay: 0.75 }}
				>
					I know many things!
				</motion.h2>
				<motion.p
					initial={{ opacity: 0, y: 10 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.3, delay: 1 }}
					className="mb-[13vh] handlee font-medium mt-[1.5vh] text-[3vh]"
				>
					Check out the skills I've learned over the years.
				</motion.p>
				<div className="relative w-fit mx-auto">
					<img
						src="/imgs/hat6.png"
						className="w-[2vw] absolute top-[18.5vh] rotate-5 left-[50%] translate-x-[-50%]"
						alt="hat"
					/>
					<img src="/imgs/peep.png" className="w-[17vw]" alt="Character" />
				</div>
			</div>

			{/* Mailbox Section */}
			<div className="w-[45vw] py-[10vh] pb-[15vh] max-h-screen overflow-scroll pr-[2vw] text-center relative">
				<motion.h2
					initial={{ opacity: 0, y: 10 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.3, delay: 1.25 }}
					className="text-[3vh] text-center w-[70%] mx-auto handlee transition"
				>
					You got some mail! Open the mailbox to read it.
				</motion.h2>

				{/* Mailbox Icon + Peep next to it */}
				<div className="flex justify-center items-center gap-6 mt-8">
					<motion.div
						initial={{ opacity: 0, y: 10 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.3, delay: 1.5 }}
						className="text-[8vh] text-black cursor-pointer"
						onClick={() => {
							if (!riddleSolved) {
								setMailOpened(true);
							} else {
								setMailOpened((prev) => !prev);
							}
						}}
					>
						{mailOpened ? (
							<BsMailbox className="transition" />
						) : (
							<BsMailboxFlag className="transition" />
						)}
					</motion.div>

					{/* Small character beside mailbox */}
					<motion.div
						initial={{ opacity: 0, y: 10 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.3, delay: 1.7 }}
					>
						<img
							src="/imgs/peep-blank.png"
							className="w-[8vw] h-auto -scale-x-100"
							alt="Peep Blank"
						/>
					</motion.div>
				</div>

				{/* Riddle Gate */}
				<AnimatePresence>
					{mailOpened && !riddleSolved && (
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							exit={{ opacity: 0, y: 20 }}
							transition={{ duration: 0.4 }}
							className="mt-[3vh] border-2 border-neutral-400 bg-white rounded-lg shadow-md py-[4vh] px-[2.5vw] text-left w-[100%] mx-auto"
						>
							<p className="mb-4 handlee font-semibold text-[2vh] leading-[3.25vh]">
								The mailbox is protected, so only I could open it. Help me
								answer a question about me to see the mail:
							</p>
							<p className="handlee font-bold text-[2.25vh] mb-6">
								{currentRiddle.question}
							</p>

							{!wrongAnswer ? (
								<div className="flex flex-col gap-4 items-center">
									{/* First row with two buttons */}
									<div className="flex gap-6">
										{currentRiddle.choices.slice(0, 2).map((choice, i) => (
											<div
												key={i}
												className="relative w-[10vw] flex items-center justify-center h-[6vh] cursor-pointer"
											>
												<img
													src="/imgs/frame1.png"
													className="w-[10vw] mx-auto h-full absolute top-0 left-0 z-0 object-cover"
													alt=""
												/>
												<button
													onClick={() => handleAnswer(choice)}
													className="z-10 w-[10vw] text-[2vh] flex items-center justify-center h-full handlee font-semibold tracking-[1px] cursor-pointer"
												>
													{choice}
												</button>
											</div>
										))}
									</div>

									{/* Second row with last button */}
									<div className="relative w-[10vw] flex items-center justify-center h-[6vh] cursor-pointer">
										<img
											src="/imgs/frame1.png"
											className="w-[10vw] mx-auto h-full absolute top-0 left-0 z-0 object-cover"
											alt=""
										/>
										<button
											onClick={() => handleAnswer(currentRiddle.choices[2])}
											className="z-10 w-[10vw] text-[2vh] flex items-center justify-center h-full handlee font-semibold tracking-[1px] cursor-pointer"
										>
											{currentRiddle.choices[2]}
										</button>
									</div>
								</div>
							) : (
								<div className="flex flex-col items-center gap-4">
									<p className="handlee font-semibold text-red-600 text-[2vh]">
										Wrong answer! Resetting...
									</p>
								</div>
							)}
						</motion.div>
					)}
				</AnimatePresence>

				{/* Letter */}
				<AnimatePresence mode="wait">
					{mailOpened && riddleSolved && (
						<Letter
							today={today}
							makeSentence={makeSentence}
							frontendSkills={frontendSkills}
							backendSkills={backendSkills}
							toolsDesignSkills={toolsDesignSkills}
							goNext={goNext}
						/>
					)}
				</AnimatePresence>
			</div>
		</div>
	);
}
