const PHOTOS = parseKeys();

/**
 * Returns a list of all images
 * 
 * @param {Context} r 
 */
function importPhotos(r) {
    let images = {}
    r.keys().forEach((item) => { images[item.replace('./', '')] = r(item); });
    return images;
}

/**
 * Finds all images and loads them in
 * 
 * Webpack doesn't allow expressions being used in require.context. :(
 */
function parseKeys() {
    return importPhotos(require.context('../assets/photos', true, /\.(png|jpe?g|svg)$/));
}

export default PHOTOS;