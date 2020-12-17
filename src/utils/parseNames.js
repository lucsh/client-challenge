/**
 * Replaces underscores to spaces
 * @param {string} [string] - string to be edited
 *
 */
export default string => {
  return string.replace(/[_]/gi, ' ');
};
