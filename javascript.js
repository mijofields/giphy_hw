$(document).ready(function() {
    
var gifs = {


interests: ["batman", "superman", "the tick", "deadpool"],

newInterest: "",

btnStyle: ["btn btn-primary m-1 active border border-dark remove", "btn btn-success m-1 active border border-dark remove", "btn btn-info m-1 active border border-dark remove", "btn btn-warning m-1 active border border-dark remove", "btn btn-danger m-1 active border border-dark remove" ],


btnCycle: 0,

onStart: function(){

  gifs.btnCycle = 0;

for (var i = 0; i < gifs.interests.length ; i++) {

        // Inside the loop.


        // 2. Create a variable named "letterBtn" equal to $("<button>");
        var Btn = $("<button>");

             if(gifs.btnCycle === gifs.btnStyle.length ) {
              
              gifs.btnCycle = 0;

              console.log("make it 0");

            };

            // search on blank
            // still or moving attribute


        // 3. Then give each "letterBtn" the following classes: "letter-button" "letter" "letter-button-color".
        Btn.addClass(gifs.btnStyle[gifs.btnCycle]).attr("data-interest", gifs.interests[i]).text(gifs.interests[i]);

          console.log("btn cycle: " + gifs.btnCycle);

        gifs.btnCycle ++ ;

   
      

        // 4. Then give each "letterBtn" a data-attribute called "data-letter".
         $("#buttonmoon").append(Btn);

};

           gifs.bringGifs();


},


addInterest: function() {



$("#submit").on("click", function() {

    event.preventDefault();


if ( $("#interests-input").val().trim() === ""){

$("#interests-input").val("");
return;

}



gifs.newInterest = $("#interests-input").val().trim().toLowerCase();

gifs.interests.push(gifs.newInterest);
gifs.interests = $.unique(gifs.interests);

console.log("new " + gifs.interests);

$("#interests-input").val("");

$(".remove").remove();


gifs.onStart();



})

//end of addInterests

},

bringGifs: function() {

    $(".remove").on("click", function() {

      event.preventDefault();
      $(".img").remove();

      // $("#display").remove();


      var search = $(this).attr("data-interest");

      $.ajax({
          url: "https://api.giphy.com/v1/gifs/search?q=" + search + "&api_key=EEixsWdz3AHdD6MJIlecW3Q4wQ0ViWRK&limit=10",
          method: "GET"
        }).done(function(response) {
          for (i=0; i < response.data.length; i++) {
        console.log(response.data[i]);
        var img = $("<img src='" + response.data[i].images.fixed_height_still.url +"'/>")
        img.addClass("img").attr("data-type", "still").attr("data-still", response.data[i].images.fixed_height_still.url).attr("data-animate", response.data[i].images.fixed_height.url );
        $("#display").append(img);
}});



})},


animate: function() {

$(document).on("click", ".img", function() { //as images have been created dynamically listener needs to be assigned to document
      event.preventDefault();
      // The attr jQuery method allows us to get or set the value of any attribute on our HTML element
      var type = $(this).attr("data-type");
      console.log(type);
      // If the clicked image's state is still, update its src attribute to what its data-animate value is.
      // Then, set the image's data-state to animate
      // Else set src to the data-still value
      if (type === "still") {
        $(this).attr("src", $(this).attr("data-animate"));
        $(this).attr("data-type", "animate");
      } else {
        $(this).attr("src", $(this).attr("data-still"));
        $(this).attr("data-type", "still");
      }
    });



}





}// end of gifs

 //end of document ready


gifs.onStart();
gifs.addInterest();
gifs.animate();


// gifs.bringGifs();

}); //end of document ready



 //end 0f document ready

// // Adding click event listen listener to all buttons
//     $("button").on("click", function() {
//       // Grabbing and storing the data-animal property value from the button
//       var animal = $(this).attr("data-animal");

//       // Constructing a queryURL using the animal name
//       var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
//         animal + "&api_key=dc6zaTOxFJmzC&limit=10";

//       // Performing an AJAX request with the queryURL
//       $.ajax({
//           url: queryURL,
//           method: "GET"
//         })
//         // After data comes back from the request
//         .done(function(response) {
//           console.log(queryURL);

//           console.log(response);
//           // storing the data from the AJAX request in the results variable
//           var results = response.data;

//           // Looping through each result item
//           for (var i = 0; i < results.length; i++) {

//             // Creating and storing a div tag
//             var animalDiv = $("<div>");

//             // Creating a paragraph tag with the result item's rating
//             var p = $("<p>").text("Rating: " + results[i].rating);

//             // Creating and storing an image tag
//             var animalImage = $("<img>");
//             // Setting the src attribute of the image to a property pulled off the result item
//             animalImage.attr("src", results[i].images.fixed_height.url);

//             // Appending the paragraph and image tag to the animalDiv
//             animalDiv.append(p);
//             animalDiv.append(animalImage);

//             // Prependng the animalDiv to the HTML page in the "#gifs-appear-here" div
//             $("#gifs-appear-here").prepend(animalDiv);
//           }
//         });
//     });


//     var interests = ["Cats", "Harry Kane", "Pineapples", "Longboards"]




//     // Adding click event listen listener to all buttons
//     $("button").on("click", function() {
//       // Grabbing and storing the data-animal property value from the button
//       var animal = $(this).attr("data-animal");

//       // Constructing a queryURL using the animal name
//       var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
//         animal + "&api_key=dc6zaTOxFJmzC&limit=10";

//       // Performing an AJAX request with the queryURL
//       $.ajax({
//           url: queryURL,
//           method: "GET"
//         })
//         // After data comes back from the request
//         .done(function(response) {
//           console.log(queryURL);

//           console.log(response);
//           // storing the data from the AJAX request in the results variable
//           var results = response.data;

//           // Looping through each result item
//           for (var i = 0; i < results.length; i++) {

//             // Creating and storing a div tag
//             var animalDiv = $("<div>");

//             // Creating a paragraph tag with the result item's rating
//             var p = $("<p>").text("Rating: " + results[i].rating);

//             // Creating and storing an image tag
//             var animalImage = $("<img>");
//             // Setting the src attribute of the image to a property pulled off the result item
//             animalImage.attr("src", results[i].images.fixed_height.url);

//             // Appending the paragraph and image tag to the animalDiv
//             animalDiv.append(p);
//             animalDiv.append(animalImage);

//             // Prependng the animalDiv to the HTML page in the "#gifs-appear-here" div
//             $("#gifs-appear-here").prepend(animalDiv);
//           }
//         });
//     });