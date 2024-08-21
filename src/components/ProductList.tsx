import { wixClientServer } from "@/lib/wixClientServer";
import { products } from "@wix/stores";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import DOMPurify from "isomorphic-dompurify";

const PRODUCT_PER_PAGE = 20;

const ProductList = async ({
	categoryId,
	limit,
}: {
	categoryId: String;
	limit: number;
}) => {
	const wixClient = await wixClientServer();

	const res = await wixClient.products
		.queryProducts()
		.eq("collectionIds", categoryId)
		.limit(limit || PRODUCT_PER_PAGE)
		.find();

	return (
		<div className='mt-12 flex gap-x-8 gap-y-16 justify-between flex-wrap'>
			{res.items.map((product: products.Product) => (
				<Link
					href={"/" + product.slug}
					className='w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]'
					id={product._id}>
					<div className='relative w-full h-80'>
						<Image
							src={product.media?.mainMedia?.image?.url || "/product.png"}
							alt=''
							fill
							sizes='25vw'
							className='absolute object-cover rounded-md z-10 hover:opacity-0 translate-opacity easy duration-500'
						/>
						{product.media?.items && (
							<Image
								src={product.media?.items[1]?.image?.url || "product.png"}
								alt=''
								fill
								sizes='25vw'
								className='absolute object-cover rounded-md'
							/>
						)}
					</div>
					<div className='flex justify-between'>
						<span className='font-medium'>{product.name}</span>
						<span className='font-semobold'>${product.price?.price}</span>
					</div>
					<div
						className='text-sm text-gray-500'
						dangerouslySetInnerHTML={{
							__html: DOMPurify.sanitize(
								product.additionalInfoSections?.find(
									(section: any) => section.title === "shortDesc"
								)?.description || ""
							),
						}}></div>
					<button className='rounded-2xl ring-lama text-lama w-max py-2 px-4 text-xs hover:bg-lama hover:text-white'>
						Add to Cart
					</button>
				</Link>
			))}

			<Link
				href={"/test"}
				className='w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]'>
				<div className='relative w-full h-80'>
					<Image
						src={
							"https://images.pexels.com/photos/1366630/pexels-photo-1366630.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
						}
						alt=''
						fill
						sizes='25vw'
						className='absolute object-cover rounded-md z-10 hover:opacity-0 translate-opacity easy duration-500'
					/>
					<Image
						src={
							"https://images.pexels.com/photos/1906658/pexels-photo-1906658.jpeg?auto=compress&cs=tinysrgb&w=400"
						}
						alt=''
						fill
						sizes='25vw'
						className='absolute object-cover rounded-md'
					/>
				</div>
				<div className='flex justify-between'>
					<span className='font-medium'>Product Name</span>
					<span className='font-semobold'>$49</span>
				</div>
				<div className='text-sm text-gray-500'>My description</div>
				<button className='rounded-2xl ring-lama text-lama w-max py-2 px-4 text-xs hover:bg-lama hover:text-white'>
					Add to Cart
				</button>
			</Link>

			<Link
				href={"/test"}
				className='w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]'>
				<div className='relative w-full h-80'>
					<Image
						src={
							"https://images.pexels.com/photos/1366630/pexels-photo-1366630.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
						}
						alt=''
						fill
						sizes='25vw'
						className='absolute object-cover rounded-md z-10 hover:opacity-0 translate-opacity easy duration-500'
					/>
					<Image
						src={
							"https://images.pexels.com/photos/1906658/pexels-photo-1906658.jpeg?auto=compress&cs=tinysrgb&w=400"
						}
						alt=''
						fill
						sizes='25vw'
						className='absolute object-cover rounded-md'
					/>
				</div>
				<div className='flex justify-between'>
					<span className='font-medium'>Product Name</span>
					<span className='font-semobold'>$49</span>
				</div>
				<div className='text-sm text-gray-500'>My description</div>
				<button className='rounded-2xl ring-lama text-lama w-max py-2 px-4 text-xs hover:bg-lama hover:text-white'>
					Add to Cart
				</button>
			</Link>

			<Link
				href={"/test"}
				className='w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]'>
				<div className='relative w-full h-80'>
					<Image
						src={
							"https://images.pexels.com/photos/1366630/pexels-photo-1366630.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
						}
						alt=''
						fill
						sizes='25vw'
						className='absolute object-cover rounded-md z-10 hover:opacity-0 translate-opacity easy duration-500'
					/>
					<Image
						src={
							"https://images.pexels.com/photos/1906658/pexels-photo-1906658.jpeg?auto=compress&cs=tinysrgb&w=400"
						}
						alt=''
						fill
						sizes='25vw'
						className='absolute object-cover rounded-md'
					/>
				</div>
				<div className='flex justify-between'>
					<span className='font-medium'>Product Name</span>
					<span className='font-semobold'>$49</span>
				</div>
				<div className='text-sm text-gray-500'>My description</div>
				<button className='rounded-2xl ring-lama text-lama w-max py-2 px-4 text-xs hover:bg-lama hover:text-white'>
					Add to Cart
				</button>
			</Link>

			<Link
				href={"/test"}
				className='w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]'>
				<div className='relative w-full h-80'>
					<Image
						src={
							"https://images.pexels.com/photos/1366630/pexels-photo-1366630.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
						}
						alt=''
						fill
						sizes='25vw'
						className='absolute object-cover rounded-md z-10 hover:opacity-0 translate-opacity easy duration-500'
					/>
					<Image
						src={
							"https://images.pexels.com/photos/1906658/pexels-photo-1906658.jpeg?auto=compress&cs=tinysrgb&w=400"
						}
						alt=''
						fill
						sizes='25vw'
						className='absolute object-cover rounded-md'
					/>
				</div>
				<div className='flex justify-between'>
					<span className='font-medium'>Product Name</span>
					<span className='font-semobold'>$49</span>
				</div>
				<div className='text-sm text-gray-500'>My description</div>
				<button className='rounded-2xl ring-lama text-lama w-max py-2 px-4 text-xs hover:bg-lama hover:text-white'>
					Add to Cart
				</button>
			</Link>

			<Link
				href={"/test"}
				className='w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]'>
				<div className='relative w-full h-80'>
					<Image
						src={
							"https://images.pexels.com/photos/1366630/pexels-photo-1366630.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
						}
						alt=''
						fill
						sizes='25vw'
						className='absolute object-cover rounded-md z-10 hover:opacity-0 translate-opacity easy duration-500'
					/>
					<Image
						src={
							"https://images.pexels.com/photos/1906658/pexels-photo-1906658.jpeg?auto=compress&cs=tinysrgb&w=400"
						}
						alt=''
						fill
						sizes='25vw'
						className='absolute object-cover rounded-md'
					/>
				</div>
				<div className='flex justify-between'>
					<span className='font-medium'>Product Name</span>
					<span className='font-semobold'>$49</span>
				</div>
				<div className='text-sm text-gray-500'>My description</div>
				<button className='rounded-2xl ring-lama text-lama w-max py-2 px-4 text-xs hover:bg-lama hover:text-white'>
					Add to Cart
				</button>
			</Link>
		</div>
	);
};

export default ProductList;
