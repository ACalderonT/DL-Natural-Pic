import { useContext } from "react";
import { FavoritosContext } from "../context/FavoritosContext";
import IconHeart from "./IconHeart";

const Gallery = () => {
	const { fotos, setLikedFotos, view, likedFotos } = useContext(FavoritosContext);

	const handleLike = (fotoId) => {
		const fotoIndex = fotos.findIndex((foto) => foto.id === fotoId);

		fotos[fotoIndex].liked = !fotos[fotoIndex].liked;
		const filteredLikedFotos = fotos.filter((foto) => foto.liked);

		setLikedFotos(filteredLikedFotos);
	};

	return (
		<div className={`gallery p-3 ${ view === 'Home' ? 'grid-columns-5' : 'grid-columns-4'}`}>
			{view === "Home" ?
				fotos.map((foto) => (
					<div
						className="photo"
						key={foto.id}
						style={{
							backgroundImage: `url(${foto.src.original})`,
						}}
					>
						<button
							style={{
								alignSelf: `flex-end`,
								background: `transparent`,
								border: `none`,
							}}
							onClick={() => handleLike(foto.id)}
						>
							<IconHeart key={foto.id} filled={foto.liked} />
						</button>
						<p>{foto.alt}</p>
					</div>
				))
        :
        (likedFotos.length ? 
          likedFotos.map((foto, index) => (
            <div className="photo"
                 key={index}
                 style={{
                  backgroundImage: `url(${foto.src.original})`,
                 }}
            >
            </div>
          ))
          : <p>You don&apos;t have liked photos... 💔</p>)
      }
		</div>
	);
};
export default Gallery;
