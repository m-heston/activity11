

function showCardsSortedByPriceLowHigh() {
    fetch("./MoviesFromJSON.json")
    .then(response => response.json())
    .then(myMovies => loadMovies(myMovies, 1))
    .catch(err => console.log("Error :"+err));
}

function showCardsSortedByPriceHighLow() {
    fetch("./MoviesFromJSON.json")
    .then(response => response.json())
    .then(myMovies => loadMovies(myMovies, 2))
    .catch(err => console.log("Error :"+err));
}


function loadMovies(myMovies, n) {
    // ---------------------
    // make array of objects
    // ---------------------
    const arrayMovies = myMovies["movies"];
    console.log(arrayMovies);
    let sortedMovies = [];
    if (n === 1) {
        sortedMovies = arrayMovies.sort((p1,p2) => (p1.price>p2.price) ? 1 : (p1.price<p2.price) ? -1 : 0);
    }
    if (n === 2) {
        // sort high to low
        sortedMovies = arrayMovies.sort(
        (p1, p2) => { return (p1.price < p2.price) ? 1 : (p1.price > p2.price) ? -1 : 0 }
        );
    }

    // ---------------------
    // Construct the CARD
    // ---------------------
    var CardMovie = document.getElementById("col");
    // Clear previous movie data
    CardMovie.innerHTML = ""; // This will clear the previous movie data and image
    for (var i = 0; i < sortedMovies.length; i++) {
        let title = sortedMovies[i].title;
        let year = sortedMovies[i].year;
        let url = sortedMovies[i].url;
        let price = sortedMovies[i].price;
        let AddCardMovie = document.createElement("div");
        AddCardMovie.classList.add("col"); // Add Bootstrap class to the column
        AddCardMovie.innerHTML = `
        <div class="card shadow-sm">
        <img src=${url} class="card-img-top" alt="..."></img>
        <div class="card-body">
        <p class="card-text"> <strong>${title}</strong>, ${year}, $${price}</p>
        </div>
        </div>
        `;
        CardMovie.appendChild(AddCardMovie);
    } // end of for
        

}
/*
    Author: Molly Heston
    ISU Netid : mheston@iastate.edu1
    Date : 09 27, 2024
*/