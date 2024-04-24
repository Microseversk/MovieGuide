import axios from 'axios'

const API_TOKEN =
	'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjNzNhNGQwMzE4YTYwNTBkOTNmMGRmZTZmMTM2MjYzYSIsInN1YiI6IjY2MjdjZTk5NjNkOTM3MDE4Nzc1YTRjMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.T1PB8bXxIuqIN8ORo9hhVptZoEzdq437dapW9OyavRk'

const BASE_URL = 'https://api.themoviedb.org/3/'
export const IMG_URL = 'https://image.tmdb.org/t/p/w500'

const $api = axios.create({
	baseURL: BASE_URL,
	headers: {
		Authorization: `Bearer ${API_TOKEN}`,
	},
})

export default $api
