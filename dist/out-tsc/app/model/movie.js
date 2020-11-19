class IMovie {
    static create(id, movie = {}) {
        const newMovie = Object.assign(new IMovie(), {
            name: 'not-detect',
            rating: 0,
            likes: 0,
            poster: IMovie.missingMovie,
            id
        });
        return newMovie;
    }
}
IMovie.missingMovie = 'assets/missing-movie.png';
let movie = IMovie.create(1, {});
console.log(movie);
//# sourceMappingURL=movie.js.map