const s = document.querySelector(".swiper-wrapper");

const options = {
    method: "GET",
    headers: {
        accept: "application/json",
        Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4YjI2OTg0YWQ0NjE0MDM4Y2M4MzMzMDZjYjRkYmRlZiIsInN1YiI6IjYyYzU2ZGQxZThkMDI4MDBjNzliOWE0NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.V8mroeFZJi0DqDepvlRxGuF5vSfCuAIHeeAmZnVSja0",
    },
};
// Banner
fetch(
    "https://api.themoviedb.org/3/movie/top_rated?&with_networks=213",
    options
)
    .then((res) => res.json())
    .then((data) => {
        data.results.forEach((movie) => {
            const url = "https://image.tmdb.org/t/p/original/";
            const $div = document.createElement("div");
            const $img = document.createElement("img");
            const $h1 = document.createElement('h1')
            const $a = document.createElement('a')
            const $a2 = document.createElement("a");
            $div.className = "swiper-slide";
            $img.src = url + movie.backdrop_path;
            $h1.innerHTML = movie.original_title;
            $a2.href = "info.html";
            $a2.className = 'a2'
            $a2.innerHTML = 'Play'
            $a.href = `./info.html?movieId=${movie.id}`
            $a.innerHTML = 'More Info'
            $div.appendChild($h1);
            $div.appendChild($a2)
            $div.appendChild($a)
            $div.appendChild($img);
            s.appendChild($div);
        });
    })
    .catch((err) => console.log(err));

const h = document.querySelector(".holly");

// Hollywood
fetch("https:api.themoviedb.org/3/discover/tv", options)
    .then(res => res.json())
    .then(data => {
        console.log(data);
        data.results.forEach(holly => {
            // console.log(holly);
            const url = "https://image.tmdb.org/t/p/original/";
            const $div = document.createElement("div");
            const $img = document.createElement("img");
            // const $h4 = document.createElement("h4")
            // $h4.innerText = holly.original_name
            $img.src = url + holly.backdrop_path
            $div.appendChild($img);
            // $div.appendChild($h4)
            h.appendChild($div);
        })
    })
// Trending
const trend = document.querySelector(".trend");

fetch("https:api.themoviedb.org/3/discover/movie?&with_genres=28", options)
    .then((res) => res.json())
    .then((data) => {
        console.log(data);
        data.results.forEach((holly) => {
            const url = "https://image.tmdb.org/t/p/original/";
            const $div = document.createElement("div");
            const $img = document.createElement("img");
            $img.src = url + holly.backdrop_path;

            $div.appendChild($img);
            trend.appendChild($div);
        });
    });

// Trending
const adults = document.querySelector(".adults");

fetch("https://api.themoviedb.org/3/discover/movie?&with_genres=12", options)
    .then((res) => res.json())
    .then((data) => {
        console.log(data);
        data.results.forEach((holly) => {
            const url = "https://image.tmdb.org/t/p/original/";
            const $div = document.createElement("div");
            const $img = document.createElement("img");
            $img.src = url + holly.backdrop_path;
            $div.appendChild($img);
            adults.appendChild($div);
    });
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