import React, { useState } from "react";

import type { TranscriptProps } from "./types";

export const Transcript = ({ transcript }: TranscriptProps) => {
	const [isOpen, setIsOpen] = useState(false);

	const handleToggle = (e: React.MouseEvent<HTMLDetailsElement>) => {
		e.preventDefault();
		setIsOpen(!isOpen);
	};

	return (
		<details open={isOpen} className="mt-3">
			<summary
				onClick={handleToggle}
				aria-expanded={isOpen}
				className="cursor-pointer font-bold mt-6 text-foreground-primary"
			>
				Transcript
			</summary>
			<div className="mt-4 border border-foreground-primary">
				{transcript
					.split("\n")
					.filter((line) => line.trim() !== "")
					.map((line, idx) => {
						const colonIndex = line.indexOf(":");
						if (colonIndex === -1) {
							return (
								<p
									key={idx}
									className="px-3.5 py-2 mb-0 odd:bg-background-tertiary text-foreground-primary"
								>
									{line}
								</p>
							);
						}
						const speaker = line.substring(0, colonIndex + 1);
						const dialogue = line.substring(colonIndex + 1);
						return (
							<p
								key={idx}
								className="px-3.5 py-2 mb-0 odd:bg-background-tertiary text-foreground-primary"
							>
								<b>{speaker}</b>
								{dialogue}
							</p>
						);
					})}
			</div>
		</details>
	);
};
