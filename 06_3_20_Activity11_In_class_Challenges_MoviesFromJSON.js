function loadMovies(myMovies, n) {
    // ---------------------
    // make array of objects
    // ---------------------
    const arrayMovies = myMovies["movies"];
    console.log(arrayMovies);
}

function showCardsSortedByPriceLowHigh() {
    fetch("./MoviesFromJSON.json")
    .then(response => response.json())
    .then(myMovies => loadMovies(myMovies, 1))
    .catch(err => console.log("Error :"+err));
}
/*
    Author: Molly Heston
    ISU Netid : mheston@iastate.edu1
    Date : 09 27, 2024
*/