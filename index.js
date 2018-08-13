let menus = document.querySelector("#menu");
let skills = document.querySelector('#skill')

function changeTheme() {
  var zeros = "0000000";

  var color = "#" + Math.floor(Math.random() * 0xffffff).toString(16);
  var colorLength = color.length;

  if (colorLength < 7) {
    color += zeros.substring(0, zeros.length - colorLength);
  }
  menus.style.backgroundColor = color;
  skills.style.backgroundColor = color;
}
