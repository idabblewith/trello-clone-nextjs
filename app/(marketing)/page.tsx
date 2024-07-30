import { Button } from "@/components/ui/button";
import { Medal } from "lucide-react";
import Link from "next/link";
import localFont from "next/font/local";
import { cn } from "@/lib/utils";
import { Poppins } from "next/font/google";

const headingFont = localFont({
	src: "../../public/fonts/font.woff2",
});

const textFont = Poppins({
	subsets: ["latin"],
	weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const MarketingPage = () => {
	return (
		<div className="flex items-center justify-center flex-col">
			<div
				className={cn(
					"flex items-center justify-center flex-col",
					headingFont.className
				)}
			>
				<div className="mb-4 flex items-center border shadow-sm p-4 bg-amber-100 text-amber-700">
					<Medal className="size-6 mr-2" />
					No. 1 Task Management
				</div>
				<h1 className="text-3xl md:text-6xl text-center text-neutral-800 mb-6">
					Get your team
				</h1>
				<div className="items-center text-center text-3xl md:text-6xl bg-gradient-to-r from-fuchsia-600 to-pink-600 text-white rounded-md p-2 w-fit ">
					ahead of the game.
				</div>
			</div>
			<div
				className={cn(
					"text-sm md:text-xl text-neutral-400 mt-4 max-w-xs md:max-w-2xl text-center mx-auto",
					textFont.className
				)}
			>
				Collaborate, manage projects, and reach new peaks! From high
				rises to the home office, the way your team works is unique.
				Accomplish it all with Trello.
			</div>
			<Button className="mt-6" size={"lg"} asChild>
				<Link href={"/sign-up"}>Try for Free</Link>
			</Button>
		</div>
	);
};

export default MarketingPage;
