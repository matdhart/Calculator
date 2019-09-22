
function Theme(current) {
  return current.theme === "Light" ? {theme: 'Dark'} : {theme: 'Light'};
}

export default Theme;
