export const TMBD_API_CONFIG = {
  BASE_URL: "https://api.themoviedb.org/3/",
  API_KEY: process.env.TOKEN,
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${process.env.TOKEN}`,
  },
};

export const fetchMovies = async ({ query }: { query: string }) => {
  const endpoint = query
    ? `${TMBD_API_CONFIG.BASE_URL}{search/movie?query=${encodeURIComponent(query)}}`
    : `${TMBD_API_CONFIG.BASE_URL}{discover/movie?sort_by=popularity.desc}`;
  const response = await fetch(endpoint, {
    method: "GET",
    headers: TMBD_API_CONFIG.headers,
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch movies: ${response.statusText}`);
  }

  const data = await response.json();
  return data;
};

// const url =
//   "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc";
// const options = {
//   method: "GET",
//   headers: {
//     accept: "application/json",
//     Authorization:
//       "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0Mjg0Mjg2NGE4NGUyMTllZTFmNzQ2Mjg3N2FkMjIwNyIsIm5iZiI6MTYyMzg2ODg2Ni45OTIsInN1YiI6IjYwY2E0NWMyOTkyNTljMDA3OTIzMzgzYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.v8GvrhGz6BK33QmudQMSAp0mNxAlY1YrNUfJDV-5xuw",
//   },
// };

// fetch(url, options)
//   .then((res) => res.json())
//   .then((json) => console.log(json))
//   .catch((err) => console.error(err));
