"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React, { useState } from "react";
import CartModal from "./CartModal";
import Cookies from "js-cookie";
import { useWixClient } from "@/hooks/useWixClient";

const NavIcons = () => {
	const pathName = usePathname();

	const wixClient = useWixClient();
	const isLoggedIn = wixClient.auth.loggedIn();

	const [isProfileOpen, setIsProfileOpen] = useState(false);
	const [isCartOpen, setIsCartOpen] = useState(false);
	const [isLoading, setIsLoading] = useState(false);

	const router = useRouter();
	/////////
	const handleProfile = () => {
		if (!isLoggedIn) {
			router.push("login");
		}
		setIsProfileOpen((prev) => !prev);
	};

	const handleLogout = async () => {
		setIsLoading(true);
		Cookies.remove("refreshToken");
		const { logoutUrl } = await wixClient.auth.logout(window.location.href);
		setIsLoading(false);
		setIsProfileOpen(false);
		router.push(logoutUrl);
	};

	return (
		<div className='flex items-center gap-4 xl:gap-6 relative'>
			<Image
				src='/profile.png'
				alt=''
				width={22}
				height={22}
				className='cursor-pointer'
				onClick={handleProfile}
			/>
			{isProfileOpen && (
				<div className='absolute p-4 rounded-t-md top-12 left-0 text-sm shadow-[0_3px_10px_rgb(0,0,0,0.2)] z-20'>
					<Link href={"/"}>Profile</Link>
					<div className='mt-2 cursor-pointer' onClick={handleLogout}>
						{isLoading ? "Logging out" : "Logout"}
					</div>
				</div>
			)}
			<Image
				src='/notification.png'
				alt=''
				width={22}
				height={22}
				className='cursor-pointer'
			/>
			<div className='relative cursor-pointer'>
				<Image
					src='/cart.png'
					alt=''
					width={22}
					height={22}
					className='cursor-pointer'
					onClick={() => setIsCartOpen((prev) => !prev)}
				/>
				<div className='absolute -top-4 -right-4 w-6 h-6 bg-lama rounded-full text-white text-sm flex items-center justify-center'>
					2
				</div>
			</div>
			{isCartOpen && <CartModal />}
		</div>
	);
};

export default NavIcons;
