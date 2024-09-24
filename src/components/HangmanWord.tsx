type HangmanWordProps = {
	guessedLetters: string[];
	wordToGuess: string;
	reveal?: boolean;
};

const HangmanWord = ({guessedLetters, wordToGuess, reveal=false}: HangmanWordProps) => {

	return (
		<div className="uppercase flex font-bold font-mono text-6xl gap-8">
			{wordToGuess.split("").map((letter, index) => (
				// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
				<span key={index} className="border-b-4 border-black inline-block">
					<span
						className={`${guessedLetters.includes(letter) || reveal ? "visible" : "invisible"} ${!guessedLetters.includes(letter) && reveal ? 'text-red-500' : 'text-black'} `}
					>
						{letter}
					</span>
				</span>
			))}
		</div>
	);
};

export default HangmanWord;
