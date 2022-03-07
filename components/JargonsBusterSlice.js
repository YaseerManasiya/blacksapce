import React from 'react';
import Lottie from 'react-lottie';
import animationData from '../public/hammer_lottie.json';

function JargonsBusterSlice() {
	const defaultOptions = {
		loop: true,
		autoplay: true,
		animationData: animationData,
		rendererSettings: {
			preserveAspectRatio: "xMidYMid slice"
		}
	};

	return (
		<div
			className="w-full h-screen flex bg-background items-stretch justify-center items-center">
			<div className="w-3/6 justify-center items-center h-screen flex flex-col">
				<Lottie
					options={defaultOptions}
					height={400}
					width={400}
				/>
				<p className="text-foreground font-body text-4xl text-center mb-36">
					WE BUST THE JARGONS
				</p>
			</div>
			<div className="w-3/6 justify-center items-center h-screen flex ">
				<div className="w-4/6">
					<p className="text-foreground font-body text-xl text-center ">
						on blackSpace, you never
						need to worry jargon.
						all crazy, techno, crypto, robotic s**t 🤯 is made super easy 🥳
					</p>
				</div>

			</div>
		</div>
	);
}

export default JargonsBusterSlice;
