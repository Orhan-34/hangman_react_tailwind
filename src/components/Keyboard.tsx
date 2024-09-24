import { useState } from "react";

const Keys = [
	"a",
	"b",
	"c",
	"d",
	"e",
	"f",
	"g",
	"h",
	"i",
	"j",
	"k",
	"l",
	"m",
	"n",
	"o",
	"p",
	"q",
	"r",
	"s",
	"t",
	"u",
	"v",
	"w",
	"x",
	"y",
	"z",
];

type KeyboardProps = {
	activeLetter: string[];
	inactiveLetter: string[];
	disabled?: boolean;
	addGuessedLetter: (letter: string) => void;
};

const Keyboard = ({
	activeLetter,
	inactiveLetter,
	addGuessedLetter,
	disabled = false,
}: KeyboardProps) => {
	// const [guessedLetters, setGuessedLetters] = useState<string[]>([]);
	// console.log(guessedLetters);
	return (
		<div className="grid grid-cols-custom-col-13 gap-2">
			{Keys.map((item) => {
				const isActive = activeLetter.includes(item);
				const isInActive = inactiveLetter.includes(item);
				return (
					<button
						className={`border-2 border-slate-50 aspect-square bg-gray-300 
							text-xl p-4 w-full ${isActive || isInActive ? "" : "hover:bg-gray-600 hover:text-white duration-300 transition-all hover:scale-125"}
							rounded-lg uppercase ${isActive ? "bg-blue-400 " : ""} ${isInActive ? "bg-red-400" : ""}`}
						key={item}
						type="button"
						disabled={isActive || isInActive || disabled}
						onClick={() => addGuessedLetter(item)}
					>
						{item}
					</button>
				);
			})}
		</div>
	);
};

export default Keyboard;
