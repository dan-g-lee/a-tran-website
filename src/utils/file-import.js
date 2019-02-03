const INFO = parseKeys();

/**
 * Returns a list of all images
 * 
 * @param {Context} r 
 */
function importFiles(r) {
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
    return importFiles(require.context('../assets/descriptions', true, /\.(json|txt)$/));
}

export default INFO;