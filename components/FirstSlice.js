import React from 'react';
import Image from "next/image";
import useWindowDimensions from "../hooks/useWindowDimensions";

function FirstSlice() {
	const {height, width} = useWindowDimensions();

	return (
		<div
			className="w-full h-screen flex-col justify-center items-center">
			<Image src="/dark_gradient_4.png" layout="fill"/>
			<div
				className="absolute inset-0 bg-background/50 shadow-lg backdrop-blur w-full h-screen flex-col justify-center items-center"/>
			<div className="absolute inset-0 w-full justify-center items-center h-screen flex flex-col">
				<div className="w-5/6 flex-col">
					<p className="text-success_green font-body text-3xl text-left my-16">
						Hey!
					</p>
					<p className="text-foreground font-body text-8xl text-left my-16">
						do something with crypto
					</p>
				</div>
			</div>
		</div>
	);
}

export default FirstSlice;
