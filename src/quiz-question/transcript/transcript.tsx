import React, { useState } from "react";
import sanitizeHtml from "sanitize-html";

interface TranscriptProps {
	/**
	 * The transcript text, which may include HTML tags.
	 */
	transcript: string;
}

export const Transcript = ({ transcript }: TranscriptProps) => {
	const [isOpen, setIsOpen] = useState(false);

	const handleToggle = (e: React.MouseEvent<HTMLDetailsElement>) => {
		e.preventDefault();
		setIsOpen(!isOpen);
	};

	const sanitizedTranscript = sanitizeHtml(transcript, {
		allowedTags: ["ruby", "rt", "rp", "b", "strong", "i", "em", "p"],
		allowedAttributes: {
			p: ["class"],
		},
	});

	return (
		<details open={isOpen} className="mt-3">
			<summary
				onClick={handleToggle}
				aria-expanded={isOpen}
				className="cursor-pointer font-bold text-foreground-primary"
			>
				Transcript
			</summary>
			<div
				className="mt-4 border border-foreground-primary [&_p]:px-3.5 [&_p]:py-2 [&_p]:mb-0 [&_p]:text-foreground-primary [&_p:nth-child(odd)]:bg-background-tertiary"
				dangerouslySetInnerHTML={{ __html: sanitizedTranscript }}
			/>
		</details>
	);
};
