const cities = [
    "New York",
    "Tokyo",
    "Berlin",
    "Shanghai",
    "London",
    "Helsinki",
    "Oslo",
    "Lisbon",
    "Stockholm",
    "Tallinn",
  ];
  
  function generateListItems(arg) {
    let items = '';
    for ( let i = 0; i < arg.length; i++ ) {
      items += `<li>${ arg[i] }</li>`;
    }
    return items;
  }
  
  document.querySelector('main').innerHTML = `
    <ol>
      ${generateListItems(cities)}
    </ol>
  `;