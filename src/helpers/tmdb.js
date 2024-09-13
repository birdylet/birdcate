export function get_recommendated_movie(genres_id=[]){
	return new Promise((resolve, reject) => {
		genres_id = Array.isArray(genres_id)?  genres_id : [genres_id]
		const genres = genres_id.join("|")
		const params = `language=pt-br&api_key=${import.meta.env.VITE_KEY_TMDB}&with_genres=${genres}`
		const url = `https://api.themoviedb.org/3/discover/movie?${params}`

		fetch(url)
			.then(data => data.json())
			.then(data => resolve(data))
	})
}