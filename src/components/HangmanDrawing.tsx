const Head = (
	<div className="w-16 h-16 rounded-full border-[8px] border-black -right-[26px] top-[74px] absolute" />
);
const Body = (
	<div className="w-2 h-[120px] bg-black absolute top-[136px] right-0" />
);
const LeftArm = (
	<div className="w-2 h-24 bg-black absolute top-28 right-10 rotate-[125deg]" />
);
const RightArm = (
	<div className="w-2 h-24 bg-black absolute top-28 -right-10 -rotate-[125deg]" />
);
const LeftLeg = (
	<div className="w-2 h-20 bg-black absolute top-60 right-[28px] rotate-[45deg]" />
);
const RightLeg = (
	<div className="w-2 h-20 bg-black absolute top-60 -right-[28px] -rotate-[45deg]" />
);

const Body_Parts = [Head, Body, LeftArm, RightArm, LeftLeg, RightLeg];

type HangmanDrawingProps = {
	inCorrectLetters: number;
};

const HangmanDrawing = ({ inCorrectLetters }: HangmanDrawingProps) => {
	return (
		<div className="relative">
			{Body_Parts.slice(0, inCorrectLetters)}
			<div className="h-[75px] w-3 bg-black absolute top-0 right-0" />
			<div className="w-[265px] h-3 bg-black ml-[125px]" />
			<div className="w-3 h-[400px] bg-black ml-[125px]" />
			<div className="w-[250px] h-3 bg-black" />
		</div>
	);
};

export default HangmanDrawing;
