"use client";
import { useState, useEffect } from "react";

export default function StatementItem({ data }) {
	const [category, setCategory] = useState(data.category);
	const [isReady, setIsReady] = useState(false);
	const desc = data.description;
	const date = data.transactionDate;
	useEffect(() => {
		// Simulate client-side initialization
		console.log("Client Component: Starting initialization");
		const timer = setTimeout(() => {
			setIsReady(true);
			console.log("Client Component: Initialization complete");
		}, 8000);

		return () => clearTimeout(timer);
	}, []);

	return (
		<div className="p-2 text-white bg-blue-500">
			<input
				type="text"
				value={category}
				onChange={(e) => setCategory(e.target.value)}
				// this can block user input before completing initalization
				// disabled={!isReady}
				className={`text-xl font-bold bg-transparent ${
					isReady ? "opacity-100" : "opacity-50"
				}`}
			></input>
			<p>{desc}</p>
			<span>{date}</span>
			{!isReady && (
				<span className="text-xs">(Initializing will take 8 seconds...)</span>
			)}
		</div>
	);
}
