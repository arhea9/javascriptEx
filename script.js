let allMovies = [];

//Define a movie class with parameters title (string), rating (number) and haveWatched (boolean)
class Movie {
    constructor(title, rating, haveWatched) {
        this.title = title;
        this.rating = rating;
        this.haveWatched = haveWatched;
    }
}

//add a movie OBJECT to the allMovies array
let addMovie = (movie) => {
    allMovies.push(movie);
    let movieList = document.getElementById('movieList');
    let c = document.createElement('p');
    c.textContent = 'A new movie is added.';
    movieList.appendChild(c);
    let d  = document.createElement('p');
    d.textContent = '------------------';
    movieList.appendChild(d);
}

//iterate through all elements of allMovies array
//Display the total number of movies in allMovies array
let printMovies = () => {
    let totalMovies = allMovies.length;
    let movieList = document.getElementById('movieList');
    let movieCountElement = document.getElementById('movieCount');
    let p = document.createElement('b');
    p.innerHTML = 'Printing all movies...<br />';
    movieList.appendChild(p);
    allMovies.forEach((movie, index) => {
        let p = document.createElement('p');
        p.textContent = movie.title + ', rating of ' + movie.rating + ', havewatched: ' + movie.haveWatched;
        movieList.appendChild(p);
        
    });
    let c = document.createElement('b');
    c.innerHTML = '<br /> You have ' + totalMovies + ' movies in total.';
    movieList.appendChild(c);
    let d  = document.createElement('p');
    d.textContent = '------------------';
    movieList.appendChild(d);
}


//Display only the movies that has a rating higher than rating(argument)
//Display the total number of matches
let highRatings = (rating) => {
    let totalMatches = 0;
    let highRating = document.getElementById('highRating');
    let filteredMovies = allMovies.filter(movie => movie.rating > rating);
    let f = document.createElement('b');
    f.textContent = "Printing movie(s) with a higher rating than  " + rating;
    highRating.appendChild(f);
    filteredMovies.forEach(movie => {
        let m = document.createElement('p');
        m.textContent = movie.title + " has a rating of " + movie.rating;
        highRating.appendChild(m);
        totalMatches++;
    });
    let c = document.createElement('b');
    c.textContent = 'In total, there are ' + totalMatches + ' matches.';
    highRating.appendChild(c);
}


//Toggle the 'haveWatched' property of the specified movie 
let changeWatched = (title) => {
    let movie = allMovies.find((movie) => movie.title == title);
    if (movie) {
        movie.haveWatched = !movie.haveWatched;
    }
    let movieList = document.getElementById('movieList');
    let c = document.createElement('p');
    c.textContent = 'Changing the status of the movie...';
    movieList.appendChild(c);
    let d  = document.createElement('p');
    d.textContent = '------------------';
    movieList.appendChild(d);
}



////////////////////////////////////////////////////////////
//Test code - DO NOT DELETE
let x = new Movie("Spiderman", 3, true);
let y = new Movie("Citizen Kane", 4, false);
let z = new Movie("Zootopia", 4.5, true);

allMovies.push(x,y,z);


let runningProgramElement = document.getElementById('runningProgram');
runningProgramElement.innerHTML = "------------------ <br /> Running program...... <br /> ------------------";
printMovies();

let movie1 = new Movie("Parasite", 2, false);

addMovie(movie1);

changeWatched("Spiderman");

printMovies();

changeWatched("Spiderman");

printMovies();

highRatings(3.5);