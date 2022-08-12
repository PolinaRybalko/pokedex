function display(string) {
  return string[0].toUpperCase() + string.slice(1);
}

function displayStrings(array) {
  let result = "";
  array.forEach((element, index) => {
    if (index !== array.length - 1) {
      result += display(element) + ", ";
    } else {
      result += display(element);
    }
  });
  return result;
}
export default display;
export { displayStrings };
