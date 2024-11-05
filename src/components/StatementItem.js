"use client";
import { useState } from "react";

export default function StatementItem({ data }) {
	const [category, setCategory] = useState(data.category);
	const desc = data.description;
	const date = data.transactionDate;
	return (
		<div className="p-2 text-white bg-blue-500">
			<input
				type="text"
				value={category}
				onChange={(e) => setCategory(e.target.value)}
				className="text-xl font-bold bg-transparent"
			></input>
			<p>{desc}</p>
			<span>{date}</span>
		</div>
	);
}
