"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaVirusCovid, FaRegFolder, FaRegFolderOpen } from "react-icons/fa6";

export default function Page3({ goNext }) {
	const [progress, setProgress] = useState(40);
	const [virusMode, setVirusMode] = useState(false);
	const [loading, setLoading] = useState(false);
	const [peepImg, setPeepImg] = useState("/imgs/peep.png");

	// folders state
	const [folders, setFolders] = useState(
		[...Array(6)].map(() => ({ open: false, virus: false }))
	);
	const [virusIndex] = useState(() => Math.floor(Math.random() * 6));
	const [virusDeleted, setVirusDeleted] = useState(false);
	const [deletingVirus, setDeletingVirus] = useState(false);
	const [deleteProgress, setDeleteProgress] = useState(0);

	useEffect(() => {
		// place virus in exactly one folder
		setFolders((prev) =>
			prev.map((f, i) => ({ ...f, virus: i === virusIndex }))
		);
	}, [virusIndex]);

	const handleDownload = () => {
		setLoading(true);
		setPeepImg("/imgs/peep-happy.png");
		setProgress(0);

		let current = 0;
		const interval = setInterval(() => {
			current += 2;
			setProgress(current);
			if (current >= 100) {
				clearInterval(interval);
				setTimeout(() => {
					setPeepImg("/imgs/peep-crying.png");
					setVirusMode(true);
					setLoading(false);
				}, 300);
			}
		}, 60);
	};

	const handleFolderClick = (index) => {
		// prevent closing if deleting
		if (deletingVirus) return;
		setFolders((prev) =>
			prev.map((f, i) => (i === index ? { ...f, open: !f.open } : f))
		);
	};

	const handleDeleteVirus = () => {
		setDeletingVirus(true);
		setDeleteProgress(0);

		let current = 0;
		const interval = setInterval(() => {
			current += 5;
			setDeleteProgress(current);
			if (current >= 100) {
				clearInterval(interval);
				setTimeout(() => {
					setDeletingVirus(false);
					setVirusDeleted(true);
					setPeepImg("/imgs/peep-happy.png");
				}, 300);
			}
		}, 100);
	};

	return (
		<div className="flex gap-[5vw] items-center justify-center min-h-[90vh] w-[85vw] mx-auto">
			{virusDeleted && (
				<motion.div
					initial={{ opacity: 0, y: 10 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.3 }}
					className="absolute cursor-pointer bottom-[5vh] right-[6vw] flex items-center justify-center  w-[10vw] h-[5vh]"
				>
					<img
						src="/imgs/frame1.png"
						className="w-[10vw] h-[5vh] absolute top-0 left-0 z-0 object-cover"
						alt=""
					/>
					<button
						onClick={goNext}
						className="z-10 text-[2.25vh] flex items-center justify-center w-full h-full handlee font-semibold tracking-[1px]"
					>
						Continue
					</button>
				</motion.div>
			)}

			<div className="flex flex-col max-w-[30vw]">
				<motion.h2
					className="text-[4vh] handlee font-extrabold"
					initial={{ opacity: 0, y: 10 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.3, delay: 0.75 }}
				>
					Let's download and view my projects!
				</motion.h2>
				<motion.p
					initial={{ opacity: 0, y: 10 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.3, delay: 1 }}
					className="mb-[7.5vh] handlee font-medium mt-[1.5vh] text-[3vh]"
				>
					Click the download button
				</motion.p>

				<div className="relative w-fit mx-auto">
					<AnimatePresence mode="wait">
						<motion.img
							key={peepImg}
							src={peepImg}
							className="w-[20vw]"
							alt="Character"
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
							transition={{ duration: 0.25 }}
						/>
					</AnimatePresence>
				</div>
			</div>

			<div className="w-[45vw] pb-[3vh]">
				<motion.h2
					initial={{ opacity: 0, y: 10 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.3, delay: 1.25 }}
					className={`text-[3vh] text-center w-[70%] mx-auto handlee ${
						virusDeleted
							? "text-black"
							: virusMode
							? "text-red-600 flex items-center gap-2 justify-center"
							: ""
					}`}
				>
					{virusDeleted ? (
						"The virus has been cleared!"
					) : virusMode ? (
						<>
							Oh no you downloaded a virus <FaVirusCovid />
						</>
					) : (
						"Download my Projects!"
					)}
				</motion.h2>

				<motion.h2
					initial={{ opacity: 0, y: 10 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.3, delay: 1.5 }}
					className="text-[2.25vh] text-neutral-600 text-center w-[70%] mx-auto handlee"
				>
					{"(5 projects to explore)"}
				</motion.h2>

				<AnimatePresence>
					{virusDeleted && (
						<motion.p
							initial={{ opacity: 0, y: 10 }}
							animate={{ opacity: 1, y: 0 }}
							exit={{ opacity: 0 }}
							transition={{ duration: 0.3, delay: 0.25 }}
							className="text-[3vh] max-w-[20vw] mx-auto mt-[5vh] text-black-700 text-center font-semibold handlee"
						>
							Now you can continue to explore the projects!{" "}
							<span className="px-[0.5vw]"></span> {":D"}
						</motion.p>
					)}
				</AnimatePresence>

				<AnimatePresence>
					{loading && (
						<motion.div
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
							transition={{ duration: 0.3 }}
							className="w-full h-[3.5vh] rounded-[3vh] bg-neutral-100 border-2 border-neutral-200 mt-[5vh] relative overflow-hidden"
						>
							<div
								className="absolute top-0 left-0 bg-yellow-300/80 h-[3vh] rounded-[3vh] border-2 border-yellow-400/80 transition-all duration-75"
								style={{ width: `${progress}%` }}
							></div>
						</motion.div>
					)}
				</AnimatePresence>

				{!virusMode && (
					<div
						onClick={handleDownload}
						className="relative cursor-pointer hover:scale-95 transition w-[10vw] h-[5vh] flex items-center justify-center mx-auto mt-[3vh]"
					>
						<img
							src="/imgs/frame1.png"
							className="w-full h-full absolute top-0 left-0 z-0 object-cover"
							alt="Link frame"
						/>
						<span className="z-10 text-[2vh] handlee font-semibold tracking-[1px] text-neutral-800 hover:text-neutral-600 transition ">
							Download
						</span>
					</div>
				)}

				{virusMode && !virusDeleted && (
					<div className="relative mt-[3vh] border-2 border-neutral-300 rounded-lg p-4 w-[70%] mx-auto overflow-hidden">
						<h3 className="text-center mb-3 handlee text-[2.5vh] font-semibold">
							File Explorer
						</h3>
						<div className="grid grid-cols-3 gap-6">
							{folders.map((folder, i) => (
								<div
									key={i}
									className="flex flex-col items-center cursor-pointer"
									onClick={() => handleFolderClick(i)}
								>
									{folder.open ? (
										<FaRegFolderOpen className="text-[6vh] text-yellow-500" />
									) : (
										<FaRegFolder className="text-[6vh] text-yellow-500" />
									)}
									<p className="text-[1.75vh] mt-1 handlee">Folder {i + 1}</p>

									{folder.open && (
										<div className="mt-2 text-center text-[1.75vh] w-[8vw]">
											{folder.virus ? (
												<>
													{deletingVirus ? (
														<p className="text-red-600 font-bold">
															Deleting...
														</p>
													) : (
														<>
															<p className="text-red-600 font-bold handlee">
																Virus Detected
															</p>
															<button
																onClick={handleDeleteVirus}
																className="mt-1 px-3 py-[0.25vh] rounded-full border-2 bg-red-300/20 cursor-pointer hover:scale-90 transition border-red-500 text-red-700 font-semibold text-[1.5vh] "
															>
																Delete Virus
															</button>
														</>
													)}
												</>
											) : (
												<p className="text-neutral-500 handlee font-semibold">
													The folder is empty
												</p>
											)}
										</div>
									)}
								</div>
							))}
						</div>

						<AnimatePresence>
							{deletingVirus && (
								<motion.div
									initial={{ opacity: 0 }}
									animate={{ opacity: 1 }}
									exit={{ opacity: 0 }}
									transition={{ duration: 0.3 }}
									className="absolute top-0 left-0 w-full h-full bg-white/70 flex flex-col justify-center items-center z-20"
								>
									<div className="w-[80%] h-[3.5vh] rounded-[3vh] bg-neutral-100 border-2 border-neutral-200 relative overflow-hidden">
										<div
											className="absolute top-0 left-0 bg-red-400/80 h-[3vh] rounded-[3vh] border-2 border-red-500/80 transition-all duration-100"
											style={{ width: `${deleteProgress}%` }}
										></div>
									</div>
									<p className="mt-2 handlee text-[2vh] font-semibold text-red-600">
										Deleting Virus...
									</p>
								</motion.div>
							)}
						</AnimatePresence>
					</div>
				)}
			</div>
		</div>
	);
}
