import React from 'react';
import Image from "next/image";


function DiscoverSlice() {

	return (
		<div
			className="w-full h-screen flex bg-background items-stretch justify-center items-center">
			<div className="w-5/6 justify-between items-center h-screen flex absolute">
				<div className="h-screen flex-col flex mx-12 justify-center">
					<div className="my-20 flex -rotate-12 drop-shadow-lg">
						<Image src="/boredape_icon.png" width={150} height={150}/>
					</div>
					<div className="my-20 flex rotate-12 drop-shadow-lg">
						<Image src="/eth_icon.png" width={50} height={50}/>
					</div>
				</div>
				<div className="h-screen flex-col flex mx-12 justify-end">
					<div className="my-20 flex rotate-12 drop-shadow-lg">
						<Image src="/fwb_icon.png" width={50} height={50}/>
					</div>
				</div>
				<div className="h-screen flex-col flex mx-12 justify-center">
					<div className="my-20 flex rotate-12 drop-shadow-lg">
						<Image src="/compound_icon.png" width={50} height={50}/>
					</div>
					<div className="my-20 flex -rotate-12 drop-shadow-lg">
						<Image src="/uniswap_icon.png" width={150} height={150}/>
					</div>
				</div>
			</div>
			<div className="w-3/6 justify-center items-center h-screen flex flex-col absolute">
				<p className="text-foreground font-body text-5xl text-center my-20">
					USE & PLAY WITH
				</p>
				<p className="text-foreground font-body text-2xl text-center my-20">
					Most useful, trust-worthy
					apps in the crypto space now in your palm
				</p>
			</div>
		</div>
	)

}

export default DiscoverSlice;
