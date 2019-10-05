function formChanged() {

    var input1 = document.getElementById("wine_type").value;
    // console.log(input1);

    var input2 = document.getElementById("taste_notes").value;
    // console.log(input2);

    var input3 = document.getElementById("wine_country").value;
    // console.log(input3);

    var input4 = document.getElementById("number_inline").value;
    // console.log(input4);


    return {input1, input2, input3, input4}
}






// Retrieve data from the CSV file and execute everything below
d3.csv("../static/wine_data/full_predictions.csv", function (err, wineData) {
    if (err) throw err;


    wineData.forEach(function (data) {
        data.white = +data.white;
        data["flavor_categories_taste_notes_light, fruity"] = +data["flavor_categories_taste_notes_light, fruity"];
        data.price = +data.price;
        data.country_Austria = +data.country_Austria;
    });



    // console.log(wineData)

    var  type, taste, price, country = formChanged();
    console.log(type);
    console.log(taste);
    console.log(price);
    console.log(country);




    // test =  formChanged();

    // console.log(test);



});