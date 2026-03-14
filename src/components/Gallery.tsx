import GalleryItem from "./GalleryItem";
import { creativeMiniProjects } from "../data/CreativeMiniProjects";

const Gallery = () => {
	return (
		<div className="w-full h-full grid place-items-center grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
			{creativeMiniProjects.map((creativeMiniProject) => (
				<GalleryItem
					key={creativeMiniProject.id}
					creativeMiniProject={creativeMiniProject}
				/>
			))}
		</div>
	);
};

export default Gallery;
