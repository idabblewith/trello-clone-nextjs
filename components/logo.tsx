import Image from "next/image";
import Link from "next/link";
import React from "react";
import { cn } from "@/lib/utils";
import localFnt from "next/font/local";

const headingFont = localFnt({
	src: "../public/fonts/font.woff2",
});

const Logo = () => {
	return (
		<Link href={"/"}>
			<div className="hover:opacity-75 transition items-center gap-x-2 hidden md:flex">
				<Image src={"/logo.svg"} height={30} width={30} alt="Logo" />

				<p
					className={cn(
						"text-lg text-neutral-700 pb-1",
						headingFont.className
					)}
				>
					Trello
				</p>
			</div>
		</Link>
	);
};

export default Logo;
