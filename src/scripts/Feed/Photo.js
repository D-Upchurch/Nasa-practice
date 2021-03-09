export const Photo = (photoObj) => {
    if(photoObj.media_type === "video") {
        return `
        <h1>${photoObj.title}</h1>
        <div class="nasaPhoto"><video src="${photoObj.url}" alt="NASA's photo of the day"></video>
        </div>
        <div class="sub-bar-flex">
            <p>${photoObj.date}</p>
            <a href="https://apod.nasa.gov/apod/astropix.html">A link to the original page</a>
        </div>
        <div class="description">
            <p>${photoObj.explanation}</p>
        </div>
        `
    }
    
    else {

    return `
    <h1>${photoObj.title}</h1>
    <div class="nasaPhoto"><iframe src="${photoObj.url}" alt="NASA's photo of the day">
    </div>
    <div class="sub-bar-flex">
        <p>${photoObj.date}</p>
        <a href="https://apod.nasa.gov/apod/astropix.html">A link to the original page</a>
    </div>
    <div class="description">
        <p>${photoObj.explanation}</p>
    </div>
    `
}
};







// Content-Type="text/html" X-Content-Type-Options: "nosniff"