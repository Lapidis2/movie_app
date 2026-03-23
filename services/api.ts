export const TMDB_CONFIG={
BASE_URL: 'https://api.themoviedb.org/3',
API_KEY: process.env.EXPO_PUBLIC_API_KEY,
Headers:{
    accept: 'application/json',
    Authorization: `Bearer ${process.env.EXPO_PUBLIC_API_KEY}`
}
}


export const getMovies=async ({query}:{query:string})=>{
    const endpoint=
    query? `${TMDB_CONFIG.BASE_URL}/search/movie?query=${encodeURIComponent(query)}`:
    '/discover/movies?sort_by=popularity.desc';
    const res=await fetch(endpoint,{
        method:'GET',
        headers:TMDB_CONFIG.Headers
    })

    if(!res.ok){
        throw new Error(`Failed to fetch movies: ${res.status} ${res.statusText} `);
    }
  const data =await res.json();
  return data.results;


} 