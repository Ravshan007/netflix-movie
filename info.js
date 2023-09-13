const movieIdUrl = new URLSearchParams(window.location.search).get("movieId")
const container = document.querySelector(".container")


const options = {
    method: "GET",
    headers: {
        accept: "application/json",
        Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4YjI2OTg0YWQ0NjE0MDM4Y2M4MzMzMDZjYjRkYmRlZiIsInN1YiI6IjYyYzU2ZGQxZThkMDI4MDBjNzliOWE0NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.V8mroeFZJi0DqDepvlRxGuF5vSfCuAIHeeAmZnVSja0",
    },
};

fetch(`https://api.themoviedb.org/3/movie/${movieIdUrl}`, options)
    .then((res) => res.json())
    .then((data) => {
        console.log(data);
        const containerWrapper = document.createElement("div")
        containerWrapper.innerHTML = `
            <img src="https://image.tmdb.org/t/p/original/${
              data.backdrop_path
            }" alt="">
            <div class="info-right">
                <h2>${data.original_title}</h2>
                <p>${data.overview}</p>
                <div class="vote-rel">
                    <div>
                        <i class="fas fa-star fa-2x"></i>
                        <span class="vote"> ${data.vote_average.toFixed(
                        1
                        )} </span>
                    </div>
                    <span class="rel">
                        The Release Date: ${data.release_date}
                    </span>
                </div>
                <strong>
                    Language ${data.original_language.toUpperCase()}
                </strong>
            </div>
        `;
        container.appendChild(containerWrapper)
});

// Kids
const kids = document.querySelector(".kids");

fetch("https://api.themoviedb.org/3/discover/movie?&with_genres=35", options)
    .then((res) => res.json())
    .then((data) => {
        data.results.forEach((holly) => {
            const url = "https://image.tmdb.org/t/p/original/";
            const $div = document.createElement("div");
            const $img = document.createElement("img");
            $img.src = url + holly.backdrop_path;
            $div.appendChild($img);
            kids.appendChild($div);
    });
});

// Shows
const shows = document.querySelector(".shows");

fetch("https://api.themoviedb.org/3/discover/movie?&with_genres=16", options)
    .then((res) => res.json())
    .then((data) => {
        data.results.forEach((holly) => {
        const url = "https://image.tmdb.org/t/p/original/";
        const $div = document.createElement("div");
        const $img = document.createElement("img");
        $img.src = url + holly.backdrop_path;
        $div.appendChild($img);
        shows.appendChild($div);
        });
    });
