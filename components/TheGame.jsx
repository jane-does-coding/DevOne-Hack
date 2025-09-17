"use client";
import React, { useState } from "react";
import GameFooter from "./GameFooter";
import Page1 from "./GamePages/Page1";
import Page2 from "./GamePages/Page2";
import Page4 from "./GamePages/Page4";
import Intro from "./GamePages/Intro";
import Outro from "./GamePages/Outro";
import { AnimatePresence, motion } from "framer-motion";
import Page3 from "./GamePages/Page3";
import Page5 from "./GamePages/Page5";

const TheGame = () => {
	const [step, setStep] = useState(0);
	/* 
	const pages = [
		{
			component: <Intro goNext={() => goNext()} />,
			key: "intro",
			label: "Introduction",
		},
		{
			component: <Page1 goNext={() => goNext()} goBack={() => goBack()} />,
			key: "page1",
			label: "Page 1",
		},
		{
			component: <Page2 goNext={() => goNext()} goBack={() => goBack()} />,
			key: "page2",
			label: "Page 2",
		},
		{
			component: <Page3 goNext={() => goNext()} goBack={() => goBack()} />,
			key: "page3",
			label: "Page 3",
		},
		{
			component: <Page4 goNext={() => goNext()} goBack={() => goBack()} />,
			key: "page4",
			label: "Page 4",
		},
		{
			component: <Page5 goNext={() => goNext()} goBack={() => goBack()} />,
			key: "page5",
			label: "Page 5",
		},
		{
			component: <Outro goBack={() => goBack()} />,
			key: "outro",
			label: "Outro",
		},
	];
 */
	const goNext = () => setStep((prev) => Math.min(prev + 1, pages.length - 1));
	const goBack = () => setStep((prev) => Math.max(prev - 1, 0));

	return (
		<div className="min-h-[80vh] overflow-hidden">
			{/* 	<AnimatePresence mode="wait">
				<motion.div
					key={pages[step].key}
					initial={{ opacity: 0, filter: "blur(10px)" }}
					animate={{ opacity: 1, filter: "blur(0px)" }}
					exit={{ opacity: 0, filter: "blur(10px)" }}
					transition={{ duration: 0.3, ease: "easeInOut" }}
					className="w-full h-full"
				>
					{pages[step].component}
				</motion.div>
			</AnimatePresence> */}
			<Intro />
			{/* pass setStep so footer can control navigation */}
			{/* 			<GameFooter step={step} setStep={setStep} />
			 */}{" "}
		</div>
	);
};

export default TheGame;
