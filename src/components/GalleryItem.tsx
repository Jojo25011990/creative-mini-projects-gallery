type GalleryItemProps = {
	creativeMiniProject: {
		id: number;
		src: string;
		srcDemo: string;
		srcCode: string;
		title: string;
		description: string;
	};
};

const GalleryItem = ({ creativeMiniProject }: GalleryItemProps) => {
	return (
		<figure className="flex flex-col">
			<div className="relative overflow-hidden rounded-lg card-img">
				<img
					src={creativeMiniProject.src}
					alt={creativeMiniProject.title}
					className="w-full h-full object-cover object-center"
				/>

				<div className="card-img-overlay">
					<a
						href={creativeMiniProject.srcDemo}
						target="_blank"
						rel="noopener noreferrer"
						aria-label={`View live demo of ${creativeMiniProject.title}`}
					>
						view project
						<span></span>
					</a>
					<a
						href={creativeMiniProject.srcCode}
						target="_blank"
						rel="noopener noreferrer"
						aria-label={`View code of ${creativeMiniProject.title}`}
					>
						view code
						<span></span>
					</a>
				</div>
			</div>

			<figcaption className="mt-2 text-center text-sm text-white">
				<h3 className="text-lg font-bold">
					{creativeMiniProject.title}
				</h3>
				<p>{creativeMiniProject.description}</p>
			</figcaption>
		</figure>
	);
};

export default GalleryItem;
