const movies = [
  { title: "Srikanth", poster: "Srikanth.jpg", trailer:"https://youtu.be/djNW5-tnbfU?si=ijahDmHNRiBW5BKJ", details: "Director: Tushar Hiranandani | Duration: 2h 14m | Release Date: May 10, 2024" },
  { title: "MR AND MR MAHI", poster: "Mr and Mrs Mahi.jpg", trailer: "https://youtu.be/TtMjcP9cHIA?si=7ZolVU3L2pusczEL", details: "Director: Sharan Sharma | Duration: 2h 19m | Release Date: May 31, 2024" },
  { title: "SAVI", poster: "Savi_Poster.jpg", trailer: "https://youtu.be/X_i1eH7qWH4?si=9vLsSwvzox4XV3Ti", details: "Director: Abhinay Deo | Duration: 2h 06m | Release Date: May 31, 2024" },
  { title: "MAIDAAN", poster: "Maidaan.jpg", trailer: "https://youtu.be/kDzAKXNnAVA?si=R3GAylHku5KuB7e4", details: "Director: Amit Sharma | Duration: 3h 1m | Release Date: April 10, 2024" },
  { title: "YODHA", poster: "Yodha.jpg", trailer: "https://youtu.be/3AuB8RTfBJc?si=Np4R0RUnsfKA6dRe", details: "Director:Sagar Ambre,Pushkar Ojha | Duration: 2h 10m | Release Date: 15 March 2024" },
  { title: "Sam Bahadur", poster: "Sam.jpg", trailer: "https://youtu.be/krXGJzt6vLQ?si=OcrLnb1Ij1rA_yf4", details: "Director:Meghna Gulzar | Duration: 2h 28m | Release Date: 1 December 2023" }
];

const moviesContainer = document.getElementById("moviesContainer");
const searchInput = document.getElementById("searchInput");

function displayMovies(movies) {
  moviesContainer.innerHTML = "";
  movies.forEach(movie => {
    const movieElement = document.createElement("div");
    movieElement.classList.add("movie");
    movieElement.innerHTML = `
      <img src="${movie.poster}" alt="${movie.title}">
      <h2>${movie.title}</h2>
      <p>${movie.details}</p>
      <button onclick="showTrailer('${movie.trailer}')">Watch Trailer</button>
    `;
    moviesContainer.appendChild(movieElement);
  });
}

function showTrailer(trailerUrl) {
  window.open(trailerUrl, '_blank');
}

displayMovies(movies);

searchInput.addEventListener("input", function() {
  const searchTerm = searchInput.value.trim().toLowerCase();
  const filteredMovies = movies.filter(movie => 
    movie.title.toLowerCase().includes(searchTerm)
  );
  displayMovies(filteredMovies);
});