"use client";

import React from "react";
import "./page.scss";
import Image from "next/image";

export default function NotreHistoire() {
	return (
		<main className="content-page">
			<div className='heading'>
				<h1>L&apos;histoire Promis!</h1>
				<div className='background'>
					<Image width={1080} height={1080} src='/image/svg1.webp' alt='' />
				</div>
			</div>
			<div className='content'></div>
		</main>
	);
}
