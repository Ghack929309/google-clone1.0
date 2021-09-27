import { GlobeAltIcon } from "@heroicons/react/solid";

const Footer = () => {
	return (
		<footer
			className="grid w-full divide-y-[1px] divide-gray-300 bg-gray-100
        text-sm text-gray-500"
		>
			<div className="px-8 py-3">
				<p>Russie</p>
			</div>
			<div
				className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-4
                grid-flow-row-dense"
			>
				<div
					className="flex justify-center space-x-8 whitespace-nowrap
                md:justify-self-start"
				>
					<p>A propos</p>
					<p>Publicite</p>
					<p>Entreprise</p>
				</div>
				<div
					className="flex justify-center items-center md:col-span-2 
                lg:col-span-1 lg:col-start-2 "
				>
					<GlobeAltIcon className="h-5 mr-1 text-green-700" />
					Comment fonctionne la recherche Google ?
				</div>
				<div className="flex justify-center space-x-8 md:ml-auto">
					<p>Confidentialite</p>
					<p>Conditions</p>
					<p>Parametres</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
