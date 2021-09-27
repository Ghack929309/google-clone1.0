import Head from "next/head";
import Header from "../components/Header";
import Response from "../Response";
import { useRouter } from "next/router";
import { API_KEY, CONTEXT_KEY } from "../keys";
import SearchResults from "../components/SearchResults";
const Search = ({ results }) => {
	const router = useRouter();
	return (
		<div>
			<Head>
				<title>{router.query.term} - Recherche Google</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			{/* Header */}
			<Header />

			{/* Search Results */}
			<SearchResults results={results} />
		</div>
	);
};

export default Search;

export async function getServerSideProps(context) {
	//change to true if there is no internet
	const dummyData = false;
	const startIndex = context.query.start || "0";
	const data = dummyData
		? Response
		: await fetch(
				`https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${context.query.term}&start=${startIndex}`
		  ).then((res) => res.json());
	return {
		props: {
			results: data,
		},
	};
}
