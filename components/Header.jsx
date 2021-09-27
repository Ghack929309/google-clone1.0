import { MicrophoneIcon, SearchIcon, XIcon } from "@heroicons/react/solid";
import Image from "next/image";
import { useRouter } from "next/router";
import { useRef } from "react";
import Avatar from "../components/Avatar";
import HeaderOption from "../components/HeaderOption";
const Header = () => {
	const router = useRouter();
	const searchInput = useRef(null);

	const search = (e) => {
		e.preventDefault();
		const term = searchInput.current.value;
		if (!term) return;
		router.push(`search?term=${term}`);
	};

	return (
		<header className="sticky top-0 bg-white">
			<div className="flex w-full p-6 items-center">
				<Image
					src="https://www.google.co.uk/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
					height={40}
					width={120}
					className="cursor-pointer"
					onClick={() => router.push("/")}
				/>
				<form
					className="flex flex-grow px-6 py-3ml-10 mr-5 border 
                border-gray-200 rounded-full shadow-lg max-w-3xl items-center"
				>
					<input
						ref={searchInput}
						defaultValue={router.query.term}
						className="flex-grow w-full focus:outline-none"
						type="text"
					/>
					<XIcon
						className="h-7 sm:mr-3 cursor-pointer text-gray-500 transition 
               duration-100 transform hover:scale-125"
						onClick={() => (searchInput.current.value = "")}
					/>
					<MicrophoneIcon
						className="h-6 mr-3 hidden sm:inline-flex text-blue-500 
                border-l-2 pl-4 border-gray-300"
					/>
					<SearchIcon className="h-6 text-blue-500 hidden sm:inline-flex" />
					<button hidden type="submit" onClick={search}>
						Search
					</button>
				</form>
				<Avatar url="/images/me.JPEG" className="ml-auto" />
			</div>
			{/* Header option  */}
			<HeaderOption />
		</header>
	);
};

export default Header;
