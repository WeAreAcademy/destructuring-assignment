const country = {
  name: "United Kingdom",
  abbreviation: "UK",
  capital: "London",
  population: 67000000,
};

// TODO: use object destructuring
//const abbreviation = country.abbreviation;
//const capital = country.capital;
//const population = country.population;

const {abbreviation, capital, population} = country;

// export so the values can be tested - but you can ignore this
export { abbreviation, capital, population };
