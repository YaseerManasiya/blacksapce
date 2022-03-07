import React, {useState} from 'react';
import Image from "next/image";

function GetAppSlice() {
	const [showTypeBar, setShowTypeBar] = useState(false);

	function ButtonOrTypeBar() {
		if (showTypeBar) {
			return (
				<button
					className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 bg-off_background py-4 px-10 rounded-full text-foreground my-8 font-body flex-row flex items-center">
					<input type="email" id="emailid" name="email id" placeholder="email id"
						   className="bg-off_background placeholder:text-mid_ground block outline-none mr-12"/>
					<button
						className="bg-red hover:bg-red_dark active:bg-red_dark focus:outline-none focus:ring rounded-full py-2 px-5">
						WAGMI! 🚀
					</button>
				</button>
			);
		} else {
			return (
				<button
					className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 bg-off_background py-4 px-10 rounded-full text-foreground my-8 font-body flex-row"
					onClick={() => setShowTypeBar(true)}>
					<Image src="/apple_logo.png" width={20} height={20}/>
					{"        "}iOS app early access
				</button>
			);
		}
	}

	return (
		<div
			className="w-full h-screen flex bg-background items-stretch justify-center items-center">
			<div className="justify-center items-center h-screen flex flex-col">
				<p className="text-foreground font-body text-5xl text-center my-8">
					COMING SOON TO YOUR iPHONE
				</p>
				<ButtonOrTypeBar/>
			</div>
		</div>
	);
}

export default GetAppSlice;
