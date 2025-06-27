const getCroppedImageUrl = (url: string) => {
    const index = url.indexOf('games/');
    return `${url.slice(0, index)}crop/600/400/${url.slice(index)}`;

    // url.slice(0, index) This number is the length and position of the string with media/
    // crop/600/400/ This is the string that will be added to the url
    // url.slice(index) This is the rest of the url after media/
    // The final result will be the url with crop/600/400/ added after media

}

export default getCroppedImageUrl;