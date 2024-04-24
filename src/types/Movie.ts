import { Genre } from './Genre'
import { ProductionCompany } from './ProductionCompany'
import { ProductionCountry } from './ProductionCountry'
import { SpokenLanguage } from './SpokenLanguage'

export interface Movie {
	adult: boolean
	backdrop_path: string
	genre_ids: number[]
	id: number
	original_language: string
	original_title: string
	overview: string
	popularity: number
	poster_path: string
	release_date: string
	title: string
	video: boolean
	vote_average: number
	vote_count: number
}

export interface MovieDetails extends Movie {
	adult: boolean
	belongs_to_collection: null
	budget: number
	genres: Genre[]
	homepage: string
	imdb_id: string
	original_language: string
	original_title: string
	overview: string
	popularity: number
	poster_path: string
	production_companies: ProductionCompany[]
	production_countries: ProductionCountry[]
	release_date: string
	revenue: number
	runtime: number
	spoken_languages: SpokenLanguage[]
	status: string
	tagline: string
}
