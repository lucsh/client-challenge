/**
 * Replaces underscores to spaces and "/" to " / "
 * @param {string} [string] - string to be edited
 *
 */
export default string => {
  return string.replace(/[/]/gi, ' / ').replace(/[_]/gi, ' ');
};
