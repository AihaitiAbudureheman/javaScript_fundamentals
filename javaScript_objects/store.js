const cities = [
  {
    city: "New York",
    country: "United States",
    population: "8.82",
  },
  {
    city: "Tokyo",
    country: "Japan",
    population: "13.96",
  },
  {
    city: "Berlin",
    country: "Germany",
    population: "3.57",
  },
  {
    city: "Shanghai",
    country: "China",
    population: "27.8",
  },
  {
    city: "London",
    country: "United Kindom",
    population: "8.97",
  },
  {
    city: "Helsinki",
    country: "Finland",
    population: "1.32",
  },
  {
    city: "Oslo",
    country: "Norway",
    population: "1.1",
  },
  {
    city: "Lisbon",
    country: "Portugal",
    population: "2.98",
  },
  {
    city: "Stockholm",
    country: "Sweden",
    population: "1.66",
  },
  {
    city: "Tallinn",
    country: "Estonia",
    population: "0.5",
  },
];
  
  function generateListItems(arg) {
    let items = "";
    for (let i = 0; i < arg.length; i++) {
      items += `<li>${arg[i].city} is in ${arg[i].country}, it has ${arg[i].population} million population.</li>`;
    }
    return items;
  }
  
  document.querySelector("main").innerHTML = `
      <ol>
        ${generateListItems(cities)}
      </ol>
    `;
  