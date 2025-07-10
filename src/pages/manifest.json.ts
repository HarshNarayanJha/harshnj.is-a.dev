import { getImage } from "astro:assets";
import type { APIRoute } from "astro";
import favicon from "../img/logo.png";

const faviconPngSizes = [192, 512];

export const GET: APIRoute = async () => {
	const icons = await Promise.all(
		faviconPngSizes.map(async (size) => {
			const image = await getImage({
				src: favicon,
				width: size,
				height: size,
				format: "png",
			});
			return {
				src: image.src,
				type: `image/${image.options.format}`,
				sizes: `${image.options.width}x${image.options.height}`,
			};
		}),
	);

	const manifest = {
		name: "Harsh Narayan Jha",
		short_name: "harshnj",
		description: "Harsh Narayan Jha's Portoflio",
		display: "standalone",
		icons,
	};

	return new Response(JSON.stringify(manifest));
};
