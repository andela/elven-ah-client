/**
 * This class contains methods for manipulating HTML
 */
export default class HTMLUtil {
  /**
   * Strip HTML markup from a string
   * @param {String} htmlString - the string containing the HTML markup to be stripped
   * @returns a string with no html markup
   */
  static stripMarkup(htmlString) {
    const div = document.createElement('div');
    div.innerHTML = htmlString;
    return div.textContent || div.innerText || '';
  }

  /**
   * Get the first image from the article body to use as header image
   * @param {String} htmlString - the article body as returned from TinyMCE
   * @returns an image url
   */
  static getImage(htmlString) {
    const div = document.createElement('div');
    div.innerHTML = htmlString;
    const imgSrc = div.querySelectorAll('img');
    if (imgSrc === undefined) return false;
    if (imgSrc[0] === undefined) return false;
    return imgSrc[0].src;
  }

  /**
   * Check whether an article body contains an image
   * @param {String} articleBody - the article body to check for images
   * @returns {true} if the article body contains an image link
   */
  static hasImage(articleBody) {
    if (this.getImage(articleBody) !== false) {
      const image = new Image();
      image.src = this.getImage(articleBody);
      image.onerror = () => (false);
      return true;
    }
    return false;
  }
}
