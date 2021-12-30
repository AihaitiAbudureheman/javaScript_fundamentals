const cities = [
    ["New York", "United States", "8.82"],
    ["Tokyo", "Japan", "13.96"],
    ["Berlin", "Germany", "3.57"],
    ["Shanghai", "China", "27.8"],
    ["London", "United Kindom", "8.97"],
    ["Helsinki", "Finland", "1.32"],
    ["Oslo", "Norway", "1.1"],
    ["Lisbon", "Portugal", "2.98"],
    ["Stockholm", "Sweden", "1.66"],
    ["Tallinn", "Estonia", "0.5"],
  ];

  /* const first = `${cities[0][0]}, ${cities[0][1]}, ${cities[0][2]}`;

  const sixth = `${cities[5][0]}, ${cities[5][1]}, ${cities[5][2]}`;

  console.log(first);
  console.log(sixth); */
  
  function generateListItems(arg) {
    let items = '';
    for ( let i = 0; i < arg.length; i++ ) {
      items += `<li>${ arg[i][0] } is in ${arg[i][1]}, it has ${arg[i][2]} million populations.</li>`;
    }
    return items;
  }
  
  document.querySelector('main').innerHTML = `
    <ol>
      ${generateListItems(cities)}
    </ol>
  `;