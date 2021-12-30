const cities = [
  ["New York", "United States", "8.82"],
  ["Tokyo", "Japan", "13.96"],
  ["Berlin", "Germany", "3.57"],
  ["Shanghai", "China", "27.8"],
  ["London", "United Kindom", "8.97"],
  ["Helsinki", "Finland", "1.32"],
  ["Oslo", "Norway", "1.1 M"],
  ["Lisbon", "Portugal", "2.98"],
  ["Stockholm", "Sweden", "1.66"],
  ["Tallinn", "Estonia", "0.5"],
];

function generateListItems(arg) {
  let items = "";
  for (let i = 0; i < arg.length; i++) {
    items += `<li>${arg[i][0]} is in ${arg[i][1]}, it has ${arg[i][2]} million population.</li>`;
  }
  return items;
}

document.querySelector("main").innerHTML = `
    <ol>
      ${generateListItems(cities)}
    </ol>
  `;
