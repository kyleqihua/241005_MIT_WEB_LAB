import StatementItem from "./StatementItem";

async function getStatementHistory() {
	// Simulate slow server-side data fetching
	await new Promise((resolve) => setTimeout(resolve, 5000));
	const response = await fetch("https://api.sampleapis.com/fakebank/accounts");
	const data = await response.json();
	return data;
}

export default async function StatementTable() {
	console.log("Server Component: Starting render");
	const statementHistory = await getStatementHistory();
	console.log("Server Component: Data fetched");
	return (
		<section className="w-full mt-4 p-4 bg-yellow-400">
			<div>Data loaded after 5 seconds</div>
			{statementHistory.map((itemData, key) => (
				<StatementItem data={itemData} key={key} />
			))}
		</section>
	);
}
