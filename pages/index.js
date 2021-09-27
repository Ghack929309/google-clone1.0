import Head from "next/head";
import Avatar from "../components/Avatar";
import Image from "next/image";
import { ViewGridIcon, MicrophoneIcon } from "@heroicons/react/solid";
import { SearchIcon } from "@heroicons/react/outline";
import Footer from "../components/Footer";
import { useRef, useEffect } from "react";
import { useRouter } from "next/router";

export default function Home() {
	const searchInput = useRef(null);
	const router = useRouter();

	useEffect(() => {
		searchInput.current.focus();
	}, []);

	const search = (e) => {
		e.preventDefault();
		const term = searchInput.current.value;
		if (!term) return;
		router.push(`/search?term=${term}`);
	};
	return (
		<div className="flex flex-col items-center justify-center h-screen">
			<Head>
				<title>Google by G-dev</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			{/* Header */}
			<header
				className="flex w-full  p-5 justify-between
      text-sm text-gray-700"
			>
				{/* Left */}
				<div className="flex space-x-4 items-center ">
					<p className="hover:underline cursor-pointer ">About</p>
					<p className="hover:underline cursor-pointer ">Store</p>
				</div>

				{/* Right */}
				<div className="flex space-x-4 items-center ">
					<p className="hover:underline cursor-pointer ">Gmail</p>
					<p className="hover:underline cursor-pointer ">Images</p>
					{/* Icon */}
					<ViewGridIcon
						className="h-10 w-10 p-2 rounded-full 
          hover:bg-gray-100 cursor-pointer"
					/>

					{/* Avatar */}
					<Avatar url="/images/me.JPEG" />
				</div>
			</header>

			{/* Body */}
			<form className="flex flex-col items-center mt-44 flex-grow w-4/5">
				<Image
					width={300}
					height={100}
					src="https://www.google.co.uk/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
				/>
				<div
					className="flex w-full mt-5 mb-4 hover:shadow-lg focus-within:shadow-lg
        max-w-md rounded-full border border-gray-200 px-5 py-3 items-center
        sm:max-w-xl lg:max-w-2xl"
				>
					<SearchIcon
						onClick={() => searchInput.current.focus()}
						className="h-5 mr-3 text-gray-500"
					/>
					<input
						type="text"
						ref={searchInput}
						className=" flex-grow focus:outline-none "
					/>
					<MicrophoneIcon className="h-5 text-blue-500" />
				</div>
				<div
					className="flex flex-col w-1/2 space-y-2 justify-center 
        sm:space-y-0 sm:flex-row sm:space-x-4 "
				>
					<button
						className="bg-[#f8f9fa] p-3 rounded-md
          ring-gray-200 cursor-pointer text-sm text-gray-800 hover:ring-1
          focus:outline-none active:ring-gray-300 hover:shadow-md"
						onClick={search}
					>
						Recherche Google
					</button>
					<button
						onClick={search}
						className="bg-[#f8f9fa] p-3 rounded-md
          ring-gray-200 cursor-pointer text-sm text-gray-800 hover:ring-1
          focus:outline-none active:ring-gray-300 hover:shadow-md"
					>
						j'ai de la chance
					</button>
				</div>
				<div className="flex flex-row items-center mt-4">
					<p className=" flex text-xs sm:text-sm">
						Google disponible en:
						<span
							className="text-blue-700 ml-1 hover:underline 
            cursor-pointer"
						>
							English
						</span>
						<span
							className="text-blue-700 ml-2 hover:underline 
            cursor-pointer"
						>
							русский
						</span>
					</p>
				</div>
			</form>

			{/* Footer */}
			<Footer />
		</div>
	);
}
