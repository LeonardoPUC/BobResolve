import styles from "./MovieImage.module.css";

export function MovieImage({ path, size = 200 }) {
	return (
		<figure className={styles.image}>
			<img src={`https://image.tmdb.org/t/p/w${size}/${path}`} alt="" />
		</figure>
	)
}
