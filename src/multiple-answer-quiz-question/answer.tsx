import React, { useId } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faXmark } from "@fortawesome/free-solid-svg-icons";

import type {
	QuizQuestionAnswer,
	QuizQuestionValidation,
} from "../quiz-question";

interface MultipleAnswerProps<
	AnswerT extends number | string,
> extends QuizQuestionAnswer<AnswerT> {
	checked: boolean;
	disabled?: boolean;
	required?: boolean;
	onChange: (checked: boolean) => void;
}

const ValidationMessage = ({ state, message }: QuizQuestionValidation) => (
	<p
		className={
			state === "correct" ? "text-background-success" : "text-background-danger"
		}
	>
		<FontAwesomeIcon
			icon={state === "correct" ? faCheck : faXmark}
			className={
				state === "correct"
					? "text-background-success me-[8px] fa-width-auto"
					: "text-background-danger me-[8px] fa-width-auto"
			}
		/>
		{message}
	</p>
);

export const MultipleAnswer = <AnswerT extends number | string>({
	value,
	label,
	checked,
	disabled,
	required,
	onChange,
	validation,
	feedback,
	action,
}: MultipleAnswerProps<AnswerT>) => {
	const id = useId();
	const labelId = `${id}-label`;

	return (
		<div
			className={[
				"grid grid-cols-1 grid-rows-[auto_auto]",
				"border-x-4 border-t-4 last:border-b-4",
				"border-background-tertiary bg-background-primary",
				validation?.state === "correct" ? "border-l-background-success" : "",
				validation?.state === "incorrect" ? "border-l-background-danger" : "",
			].join(" ")}
		>
			<div className="flex items-center p-[20px]">
				<input
					id={id}
					type="checkbox"
					value={String(value)}
					checked={checked}
					disabled={disabled}
					required={required}
					aria-describedby={labelId}
					onChange={(event) => onChange(event.currentTarget.checked)}
					className="me-[15px] h-5 w-5 shrink-0 accent-current"
				/>

				<label
					id={labelId}
					htmlFor={id}
					className="m-0 min-w-0 break-words text-foreground-primary"
				>
					{label}
				</label>

				{action && (
					<button
						type="button"
						className="ms-auto"
						aria-label={action.ariaLabel}
						aria-describedby={labelId}
						onClick={action.onClick}
					>
						Listen
					</button>
				)}
			</div>

			{(validation || (checked && feedback)) && (
				<div className="col-span-2 ps-[20px] pb-[20px] text-foreground-primary [&>p:last-child]:m-0">
					{validation && (
						<ValidationMessage
							state={validation.state}
							message={validation.message}
						/>
					)}

					{checked && feedback && <div>{feedback}</div>}
				</div>
			)}
		</div>
	);
};
