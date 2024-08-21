import { wixClientServer } from "@/lib/wixClientServer";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const CategoryList = async () => {
	const wixClient = await wixClientServer();

	const cats = await wixClient.collections.queryCollections().find();

	return (
		<div className='px-4 overflow-x-scroll scrollbar-hide'>
			<div className='flex gap-4 md:gap-8'>
				{cats.items.map((item) => (
					<Link
						href={`/list?cat=${item.slug}`}
						className='flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:-1/6'>
						<div className='relative g slate-100 w-full h-96'>
							<Image
								src={item.media?.mainMedia?.image?.url || "cat.png"}
								alt=''
								fill
								sizes='25vw'
								className='absolute object-cover rounded-md z-10 hover:opacity-0 translate-opacity easy duration-500'
							/>
						</div>
						<h1 className='mt-8 font-light text-cl tracking-wide'>
							{item.name}
						</h1>
					</Link>
				))}
			</div>
		</div>
	);
};

export default CategoryList;
