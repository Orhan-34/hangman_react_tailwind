import { useCallback, useEffect, useState } from "react";
import "./App.css";
import words from "./wordList.json";
import HangmanDrawing from "./components/HangmanDrawing";
import HangmanWord from "./components/HangmanWord";
import Keyboard from "./components/Keyboard";

function App() {
	const getWord = () => {
		return words[Math.floor(Math.random() * words.length)];
	};

	const [wordToGuess, setWordToGuess] = useState(getWord());

	const [guessedLetters, setGuessedLetters] = useState<string[]>([]);

	const inCorrectLetters = guessedLetters.filter(
		(letter) => !wordToGuess.includes(letter),
	);

	const isLoser = inCorrectLetters.length >= 6;
	const isWinner = wordToGuess
		.split("")
		.every((letter) => guessedLetters.includes(letter));

	const addGuessedLetter = useCallback(
		(letter: string) => {
			if (guessedLetters.includes(letter) || isWinner || isLoser) return;
			setGuessedLetters([...guessedLetters, letter]);
		},
		[guessedLetters, isLoser, isWinner],
	);

	// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
	useEffect(() => {
		const handler = (e: KeyboardEvent) => {
			const key = e.key;
			if (key.match(/^[a-z]$/) || key === "Enter" || key === " ") return;

			e.preventDefault();
			addGuessedLetter(key);
		};

		document.addEventListener("keypress", handler);

		return () => {
			document.removeEventListener("keypress", handler);
		};
	}, [guessedLetters]);

	// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
	useEffect(() => {
		if (isLoser || isWinner) {
			const message = isWinner
				? "Winner :) - Do you want to play again?"
				: "Lost :( - Do you want to play again?";
			if (window.confirm(message)) {
				setGuessedLetters([]);
				setWordToGuess(getWord());
			}
		}
	}, [isLoser, isWinner]);
	return (
		<>
			<div className="max-w-[800px] flex flex-col gap-8 mx-0 my-10">
				<div className="text-2xl font-semibold">
				</div>
				<div className="flex flex-row gap-40">
					<div className="w-[50%]">
						<HangmanDrawing inCorrectLetters={inCorrectLetters.length} />
					</div>
					<div className="w-[50] mt-20 ml-10">
						<HangmanWord
							reveal={isLoser}
							guessedLetters={guessedLetters}
							wordToGuess={wordToGuess}
						/>
					</div>
				</div>
				<div className="self-stretch">
					<Keyboard
						disabled={isWinner || isLoser}
						activeLetter={guessedLetters.filter((item) =>
							wordToGuess.includes(item),
						)}
						inactiveLetter={inCorrectLetters}
						addGuessedLetter={addGuessedLetter}
					/>
				</div>
			</div>
		</>
	);
}

export default App;
