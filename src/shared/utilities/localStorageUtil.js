class localStorageUtil {
  /**
   * @description Retrieves an item from the localStorage
   * @param {String} name The name of the object to be retrieved
   */
  static getItem(name) {
    const result = localStorage.getItem(name);
    return result === 'undefined' ? null : JSON.parse(result);
  }

  /**
   * @description Saves an object to the browsers localStorage
   * @param {String} name The name to save the object with
   * @param {Object} data The object to be saved to the localStorage
   */
  static setItem(name, data) {
    const value = JSON.stringify(data);
    localStorage.setItem(name, value);
  }
}

export default localStorageUtil;