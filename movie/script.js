const mainContent = document.querySelector('main');
const homeLink = document.getElementById('home-link');
const moviesLink = document.getElementById('movies-link');
const searchInput = document.getElementById('search-input');

const movies = [
    { title: "KGF", image: "kgf.jpg", genre: "Action", rating: "4.5", description: "Action movie in Kannada", cinema: "royal", language: "kannada" },
    { title: "RRR", image: "rrr.jpg", genre: "Action", rating: "4.8", description: "Action movie in Telugu", cinema: "central", language: "telugu" },
    { title: "Leo", image: "leo.jpg", genre: "Action", rating: "4.2", description: "Action movie in Tamil", cinema: "gopalan", language: "tamil" },
    { title: "Pathan", image: "patan.jpg", genre: "Action", rating: "4.0", description: "Action movie in Hindi", cinema: "lakshmi", language: "hindi" },
    { title: "Vikram", image: "vikram.jpg", genre: "Action", rating: "4.6", description: "Action movie in Tamil", cinema: "royal", language: "tamil" },
    { title: "Kantara", image: "kantara.jpg", genre: "Thriller", rating: "4.7", description: "Thriller movie in Kannada", cinema: "central", language: "kannada" },
    { title: "Drishyam 2", image: "drishyam2.jpg", genre: "Drama", rating: "4.3", description: "Drama movie in Hindi", cinema: "gopalan", language: "hindi" },
    { title: "Ponniyin Selvan", image: "ponniyin selvan.jpg", genre: "Historical", rating: "4.4", description: "Historical movie in Tamil", cinema: "lakshmi", language: "tamil" },
    { title: "Pushpa", image: "pushpa.jpg", genre: "Action", rating: "4.1", description: "Action movie in Telugu", cinema: "royal", language: "telugu" },
    { title: "777 Charlie", image: "charlie.jpg", genre: "Adventure", rating: "4.9", description: "Adventure movie in Kannada @ central", cinema: "central", language: "kannada" },
    { title: "Pushpa", image: "pushpa.jpg", genre: "Action", rating: "4.1", description: "Action movie in hindi @ gopalan", cinema: "gopalan", language: "hindi" },
    { title: "Pushpa", image: "pushpa.jpg", genre: "Action", rating: "4.1", description: "Action movie in Tamil @ central ", cinema: "central", language: "tamil" },
    { title: "Pushpa", image: "pushpa.jpg", genre: "Action", rating: "4.1", description: "Action movie in Telugu", cinema: "lakshmi", language: "telugu" },
    { title: "KGF", image: "kgf.jpg", genre: "Action", rating: "4.5", description: "Action movie in hindi", cinema: "royal", language: "hindi" },
    { title: "KGF", image: "kgf.jpg", genre: "Action", rating: "4.5", description: "Action movie in tamil", cinema: "royal", language: "tamil" },
    { title: "KGF", image: "kgf.jpg", genre: "Action", rating: "4.5", description: "Action movie in telugu", cinema: "royal", language: "telugu" },
    { title: "KGF", image: "kgf.jpg", genre: "Action", rating: "4.5", description: "Action movie in english", cinema: "royal", language: "English" },
  
  
  
    { title: "Pushpa", image: "pushpa.jpg", genre: "Action", rating: "4.1", description: "Action movie in Telugu", cinema: "royal", language: "hindi" },
]


homeLink.addEventListener('click', showRecentlyReleased);
moviesLink.addEventListener('click', showMovieOptions);
searchInput.addEventListener('input', filterMovies);

function showRecentlyReleased() {
    mainContent.innerHTML = "<section id='movie-listings'></section>";
    displayMovies(movies);
}

function showMovieOptions() {
    mainContent.innerHTML = `
        <h2>Movies</h2>
        <div class="browse-by-cinemas">
            <h2 style="color: red;">Browse by Cinemas</h2>
            <ul id="cinema-list">
                <li><a href="#" data-cinema="royal">Royal Meenakshi</a></li>
                <li><a href="#" data-cinema="central">Central Mall</a></li>
                <li><a href="#" data-cinema="gopalan">Gopalan Cinemas</a></li>
                <li><a href="#" data-cinema="lakshmi">Lakshmi Theater</a></li>
            </ul>
        </div>
    `;

    const cinemaList = document.getElementById('cinema-list');
    cinemaList.addEventListener('click', showLanguageOptions);
}

function showLanguageOptions(event) {
    if (event.target.tagName === 'A') {
        const selectedCinema = event.target.dataset.cinema;
        mainContent.innerHTML = `
            <h2>Movies - ${selectedCinema}</h2>
            <div class="language-options">
                <h3>Languages:</h3>
                <ul>
                    <li><a href="#" data-language="kannada">Kannada</a></li>
                    <li><a href="#" data-language="hindi">Hindi</a></li>
                    <li><a href="#" data-language="tamil">Tamil</a></li>
                    <li><a href="#" data-language="telugu">Telugu</a></li>
                    <li><a href="#" data-language="english">English</a></li>
                </ul>
            </div>
            <section id='movie-listings'></section>
        `;

        const languageOptions = document.querySelector('.language-options ul');
        languageOptions.addEventListener('click', (event) => showMovies(event, selectedCinema));
    }
}

function showMovies(event, selectedCinema) {
    if (event.target.tagName === 'A') {
        const selectedLanguage = event.target.dataset.language;
        const filteredMovies = movies.filter(movie => movie.cinema === selectedCinema && movie.language === selectedLanguage);
        displayMovies(filteredMovies.slice(0, 5));
    }
}

function displayMovies(moviesToDisplay) {
    const movieListings = document.getElementById('movie-listings');
    movieListings.innerHTML = "";

    if (moviesToDisplay.length === 0) {
        movieListings.innerHTML = "<p>No movies found.</p>";
        return;
    }

    moviesToDisplay.forEach(movie => {
        const movieCard = document.createElement('div');
        movieCard.className = 'movie-card';
        movieCard.innerHTML = `
            <img src="${movie.image}" alt="${movie.title} Poster">
            <h3>${movie.title}</h3>
            <p>${movie.genre} (${movie.rating})</p>
            <p>${movie.description}</p> <button>Select Show Time</button>
        `;
        movieCard.addEventListener('click', () => showShowTimes(movie));
        movieListings.appendChild(movieCard);
    });
}

function showShowTimes(movie) {
    mainContent.innerHTML = `
        <h2>${movie.title} - Show Times</h2>
        <div class="show-times">
            <button onclick="showSeatSelection('${movie.title}', '10:00 AM')">10:00 AM</button>
            <button onclick="showSeatSelection('${movie.title}', '2:00 PM')">2:00 PM</button>
            <button onclick="showSeatSelection('${movie.title}', '6:00 PM')">6:00 PM</button>
        </div>
    `;
}

function showSeatSelection(movieTitle, showTime) {
    mainContent.innerHTML = `
        <h2>${movieTitle} - Select Seats (${showTime})</h2>
        <div class="seat-selection">
            ${generateSeats(25)}
        </div>
        <button onclick="showPayment('${movieTitle}', '${showTime}')">Proceed to Payment</button>
    `;
    const seats = document.querySelectorAll('.seat');
    seats.forEach(seat => {
        seat.addEventListener('click', () => {
            seat.classList.toggle('selected');
        });
    });
}

function generateSeats(numSeats) {
    let seatsHTML = '';
    for (let i = 1; i <= numSeats; i++) {
        seatsHTML += `<div class="seat"></div>`;
    }
    return seatsHTML;
}

function showPayment(movieTitle, showTime) {
    const selectedSeats = document.querySelectorAll('.seat.selected');
    if (selectedSeats.length === 0) {
        alert("Please select at least one seat.");
        return;
    }

    mainContent.innerHTML = `
        <h2>Payment for ${movieTitle} (${showTime})</h2>
        <p>Selected Seats: ${selectedSeats.length}</p>
        <div class="payment-options">
            <button onclick="processPayment('phonepe')">PhonePe</button>
            <button onclick="processPayment('googlepay')">Google Pay</button>
            <button onclick="processPayment('upi')">UPI</button>
        </div>
    `;
}

function processPayment(method) {
    alert(`Payment successful via ${method}!`);
    mainContent.innerHTML = "<h2>Thank you for your booking!</h2>";
}

function filterMovies() {
    const searchTerm = searchInput.value.toLowerCase();
    const filteredMovies = movies.filter(movie =>
        movie.title.toLowerCase().includes(searchTerm) ||
        movie.genre.toLowerCase().includes(searchTerm) ||
        movie.description.toLowerCase().includes(searchTerm)
    );
    displayMovies(filteredMovies);
}

showRecentlyReleased(); 