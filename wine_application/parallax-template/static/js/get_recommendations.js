

Promise.all([
    fetch('/recommend_wines').then(response => response.json()).then(data => {
        console.log("Wine Promise In Progress");
        var wine_data = data;
    }),
    console.log(wine_data)


]).then(([wines]) => {

    
    // DEBUGGER TO CHECK THE DATA
    // console.log(airports);
    // console.log(routedata);

    // // Rearrange the data to make the IATA the unique key
    // const byIata = indexBy(airportdata, 'IATA', false);

    // // DEBUGGER TO CHECK THE DATA
    // // console.log(byIata);

    // // Filter the routes data to show nonstop flights to legitimate airports
    // const filteredRoutes = routedata
    //     .filter(d => byIata.hasOwnProperty(d.srcIata) && byIata.hasOwnProperty(d.dstIata)) // exclude unknown/ undefined airports
    //     .filter(d => d.stops === 0) // pull in non-stop flights only
    //     .map(d => Object.assign(d, {
    //         srcAirport: byIata[d.srcIata],
    //         dstAirport: byIata[d.dstIata]
    //     }))

    // // DEBUGGER TO TOGGLE INTERNATIONAL ROUTES FOR QUICKER RUNTIME DURING TESTS
    // // .filter(d => (d.srcAirport.country === "United States" && d.dstAirport.country !== "United States")); 

    // // DEBUGGER TO RUN VISUAL WITH A SMALLER AMOUNT OF DATA FOR FASTER TESTING
    // // const filtered_airports = airportdata
    // //     .filter(d => d.country === "United States");


    // // DEBUGGER TO CHECK THE DATA
    // // console.log(airportdata);

    // // Call the globe builder function and append the data
    // myGlobe
    //     .labelsData(airportdata)
    //     .arcsData(filteredRoutes);
    // .pointsData(airportdata);
});