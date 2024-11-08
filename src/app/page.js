import { Suspense } from "react";
import StatementTable from "@/components/StatementTable";

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-24 font-mono border-8 border-red-300 bg-gray-400">
			<section>
				<h1 className="font-bold text-4xl">Bank Statement Viewer</h1>
				<Suspense
					fallback={
						<div className="text-2xl p-4">
							Loading bank statements will take 5 seconds...
						</div>
					}
				>
					<StatementTable />
				</Suspense>
			</section>
		</main>
	);
}
