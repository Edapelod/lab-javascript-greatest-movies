// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    let directors = moviesArray.map((movie) => {
        return movie.director
    });
    return directors
}
// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    let sPDrama = moviesArray.filter(drama => (drama.director === "Steven Spielberg") && drama.genre.includes("Drama"))
    return sPDrama.length
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if (moviesArray.length == "") {
        return 0
    }
    const averageScore = moviesArray.map(average => {
       return average.score})
    let filter = averageScore.filter(element => typeof element === "number")
    const average1 = filter.reduce ((previousValue, currentValue) => {
        return previousValue + currentValue
    },0);
    const average2 = average1/averageScore.length;
    const resultAverage = Math.round(average2*100)/100;
    return resultAverage
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
/*    const allMovies = moviesArray.map(drama => {
        return drama
});*/
    const dramaMovies = moviesArray.filter(element => (element.genre.includes("Drama")));
    if (dramaMovies == "") {
        return 0
    }
    //console.log(dramaMovies)
    const dramaMoviesScore = dramaMovies.map(drama => drama.score);
    //console.log(dramaMoviesScore)
    //const dramaFilter = dramaMoviesScore.filter(element => typeof element === "number")
    //console.log(dramaFilter)
    const dramaMoviesAverage = dramaMoviesScore.reduce((previousValue, currentValue) => previousValue + currentValue);
    const resultAverage = Math.round((dramaMoviesAverage/dramaMovies.length)*100)/100;
    return resultAverage
}
console.log(dramaMoviesScore(movies))

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
