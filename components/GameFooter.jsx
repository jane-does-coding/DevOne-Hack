"use client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { FaHeart, FaLinkedinIn } from "react-icons/fa6";
import { HiOutlineMail } from "react-icons/hi";
import { FaGithubAlt, FaVolumeMute } from "react-icons/fa";

const pages = [
	{ path: "/", label: "Intro" },
	{ path: "/page1", label: "Challenge 1" },
	{ path: "/page2", label: "Challenge 2" },
	{ path: "/page3", label: "Challenge 3" },
	{ path: "/page4", label: "Challenge 4" },
	{ path: "/page5", label: "Challenge 5" },
	{ path: "/page6", label: "Challenge 6" },
	{ path: "/outro", label: "Outro" },
];

const GameFooter = () => {
	const pathname = usePathname();
	const router = useRouter();

	const currentStep = pages.findIndex((p) => p.path === pathname);

	return (
		<div className="fixed bottom-0 left-0 w-[100vw] bg-neutral-800 py-[1.5vh] px-[2vw] flex items-center justify-between z-[999]">
			<button className="text-[2vh] flex items-center justify-center gap-[0.5vw] text-white">
				Made with <FaHeart className="text-[2.5vh] text-red-400" /> by Yevheniia
			</button>

			<div className="flex gap-[0.5vw]">
				{pages.map((page, i) => (
					<button
						key={i}
						onClick={() => router.push(page.path)}
						className={`relative rounded-full border-[1px] h-[3.5vh] w-[3.5vh] group transition-colors duration-200 
              ${
								i === currentStep
									? "bg-white border-white"
									: "border-white hover:bg-neutral-600"
							}
            `}
					>
						<p className="absolute top-[7vh] left-1/2 -translate-x-1/2 min-w-fit text-[1.5vh] items-center justify-center flex text-white py-[1.25vh] px-[1vw] rounded-[0.75vh] bg-neutral-800/80 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
							Part {i + 1}. {page.label}
						</p>
					</button>
				))}
			</div>

			<div className="flex gap-[1vw]">
				<Link href="https://github.com/jane-does-coding" target="_blank">
					<FaGithubAlt className="text-white text-[3.25vh]" />
				</Link>
				<Link href="https://www.linkedin.com/in/yevheniia-simaka/" target="_blank">
					<FaLinkedinIn className="text-white text-[3.25vh]" />
				</Link>
				<Link href="mailto:yevheniiasimaka@gmail.com">
					<HiOutlineMail className="text-white text-[3.25vh]" />
				</Link>
			</div>
		</div>
	);
};

export default GameFooter;
