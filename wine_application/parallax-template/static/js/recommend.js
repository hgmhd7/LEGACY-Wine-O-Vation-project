// Promise.all([
//     fetch('/recommend_wines').then(response => response.json()).then(data => {
//         console.log("Airport Promise In Progress");
//         wine_data = data;
//         console.log(data);
//     })
// ​
//     // DEBUGGER TO CHECK THE DATA
//     // console.log(wine_data);
//     // console.log(routedata);
// ​
// ​
// ]).then(([wines]) => {
// ​
//     // DEBUGGER TO CHECK THE DATA
//     // console.log(wines);
//     // console.log(routedata);
// ​
//     // Rearrange the data to make the IATA the unique key
//     const byIata = indexBy(airportdata, 'IATA', false);
// ​
//     // DEBUGGER TO CHECK THE DATA
//     // console.log(byIata);
// ​
//     // Filter the routes data to show nonstop flights to legitimate airports
//     const filteredRoutes = routedata
//         .filter(d => byIata.hasOwnProperty(d.srcIata) && byIata.hasOwnProperty(d.dstIata)) // exclude unknown/ undefined airports
//         .filter(d => d.stops === 0) // pull in non-stop flights only
//         .map(d => Object.assign(d, {
//             srcAirport: byIata[d.srcIata],
//             dstAirport: byIata[d.dstIata]
//         }))
// ​
//     // DEBUGGER TO TOGGLE INTERNATIONAL ROUTES FOR QUICKER RUNTIME DURING TESTS
//     // .filter(d => (d.srcAirport.country === "United States" && d.dstAirport.country !== "United States")); 
// ​
//     // DEBUGGER TO RUN VISUAL WITH A SMALLER AMOUNT OF DATA FOR FASTER TESTING
//     // const filtered_airports = airportdata
//     //     .filter(d => d.country === "United States");
// ​
// ​
//     // DEBUGGER TO CHECK THE DATA
//     // console.log(airportdata);
// ​
//     // Call the globe builder function and append the data
//     myGlobe
//         .labelsData(airportdata)
//         .arcsData(filteredRoutes);
//     // .pointsData(airportdata);
// });
// }

// from data.js
var tableData = data;

// get table references
var tbody = d3.select("tbody");

function buildTable(data) {
  // First, clear out any existing data
  tbody.html("");

  // Next, loop through each object in the data
  // and append a row and cells for each value in the row
  data.forEach((dataRow) => {
    // Append a row to the table body
    var row = tbody.append("tr");

    // Loop through each field in the dataRow and add
    // each value as a table cell (td)
    Object.values(dataRow).forEach((val) => {
      var cell = row.append("td");
      cell.text(val);
    });
  });
}

// Keep Track of all filters
var filters = {};

function updateFilters() {

  // Save the element, value, and id of the filter that was changed
  var changedElement = d3.select(this).select("input");
  var elementValue = changedElement.property("value");
  var filterId = changedElement.attr("id");

  // If a filter value was entered then add that filterId and value
  // to the filters list. Otherwise, clear that filter from the filters object
  if (elementValue) {
    filters[filterId] = elementValue;
  }
  else {
    delete filters[filterId];
  }

  // Call function to apply all filters and rebuild the table
  filterTable();

}

function filterTable() {

  // Set the filteredData to the tableData
  let filteredData = tableData;

  // Loop through all of the filters and keep any data that
  // matches the filter values
  Object.entries(filters).forEach(([key, value]) => {
    filteredData = filteredData.filter(row => row[key] === value);
  });

  // Finally, rebuild the table using the filtered Data
  buildTable(filteredData);
}

// Attach an event to listen for changes to each filter
d3.selectAll(".filter").on("change", updateFilters);

// Build the table when the page loads
buildTable(tableData);
