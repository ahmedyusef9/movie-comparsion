
export class IMovie {
    _id: string;
    name: string;
    rating: number;
    likes: number;
    imdbUrl: string;
    timestamp: string;
    poster?: string;

    static create(movie: Partial<IMovie> = {}) {
        const newMovie = Object.assign(new IMovie(), {
            _id: null,
            name: null,
            rating: 0,
            likes: 0,
            imdbUrl: null,
            timestamp: null,
            poster: null,
            ...movie
        });
        return newMovie;
    }
};



// export class IMovie {
//     static missingMovie = 'assets/missing-movie.png';
//
//     id: string;
//     name: string;
//     rating: number;
//     likes: number;
//     imdbUrl: string;
//     poster?: string;
//
//     static create(movie: Partial<IMovie> = {}) {
//         const newMovie = Object.assign(new IMovie(), {
//             name: 'not-detect',
//             rating: 0,
//             likes: 0,
//             poster: IMovie.missingMovie,
//             id: null
//         });
//         return newMovie;
//     }

//
// let movie = IMovie.create(1, {})
// console.log(movie)
