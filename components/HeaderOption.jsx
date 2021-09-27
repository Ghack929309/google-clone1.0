import HeaderIcons from "./HeaderIcons";
import {
	DotsVerticalIcon,
	MapIcon,
	NewspaperIcon,
	PlayIcon,
	SearchIcon,
	PhotographIcon,
} from "@heroicons/react/outline";
const HeaderOption = () => {
	return (
		<div
			className="flex w-full text-gray-700 justify-evenly text-sm 
        lg:text-base lg:justify-start lg:space-x-36 lg:pl-52 border-b"
		>
			{/* Left section */}
			<div className="flex space-x-6">
				<HeaderIcons Icon={SearchIcon} title="Tous" selected />
				<HeaderIcons Icon={PlayIcon} title="Videos" />
				<HeaderIcons Icon={PhotographIcon} title="Images" />
				<HeaderIcons Icon={MapIcon} title="Maps" />
				<HeaderIcons Icon={NewspaperIcon} title="Actualites" />
				<HeaderIcons Icon={DotsVerticalIcon} title="Plus" />
			</div>

			{/* Right section */}
			<div className="flex space-x-8">
				<p className="cursor-pointer hover:underline">Outils</p>
				<p className="cursor-pointer hover:underline">safeSearch</p>
			</div>
		</div>
	);
};

export default HeaderOption;
