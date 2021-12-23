const API_TOKEN = 'bb303b57000a99a32c4d7c120577a944';

export function searchMovies(text) {
    const url = 'https://api.themoviedb.org/3/search/movie?api_key=' + API_TOKEN + '&language=fr&query=' + text
    return fetch(url)
        .then(response => response.json())
        .catch(error => console.error(error))
}
