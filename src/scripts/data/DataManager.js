


let finalResponse = []

export const getPhotos = () => {
    return fetch("https://api.nasa.gov/planetary/apod?api_key=PgAC47INMLyf8dwfIX8HfGYQhmLbealz241f2D19", {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    })
    .then(response => response.json())
    .then(parsedResponse => finalResponse = parsedResponse)
};

export const usePhotos = () => {
    return finalResponse
}