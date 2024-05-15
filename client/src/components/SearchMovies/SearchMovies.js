import { useState } from "react";
import styles from "./SearchMovies.module.css";
import * as Styles from "../../styles";

export function SearchMovies({ onSearch }) {
	const [searchQuery, setSearchQuery] = useState('');

	function handleOnSubmit(event) {
		event.preventDefault();
		onSearch(searchQuery);
	}

	function resetSearch() {
		setSearchQuery("");
		onSearch("");
	}

	return (
		<div className={styles.searchContainer}>
			<form onSubmit={handleOnSubmit}>
				<input type="text" placeholder="Buscar por título" onChange={(event) => setSearchQuery(event.target.value)} />
				<Styles.Button type="submit">Buscar</Styles.Button>
				<Styles.Button state="reset" onClick={resetSearch}>Resetar</Styles.Button>
			</form>
		</div>
	)
}
