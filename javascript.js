$(document).ready(function() {
    
var gifs = {


interests: ["batman", "superman", "the tick", "deadpool"],

newInterest: "",

btnStyle: ["btn btn-primary m-1 active border border-dark remove", "btn btn-success m-1 active border border-dark remove", "btn btn-info m-1 active border border-dark remove", "btn btn-warning m-1 active border border-dark remove", "btn btn-danger m-1 active border border-dark remove" ],
//array to allow different style buttons to be made dynamically

btnCycle: 0,

onStart: function(){

  gifs.btnCycle = 0;

for (var i = 0; i < gifs.interests.length ; i++) {




        // Create a variable named "letterBtn" equal to $("<button>");
        var Btn = $("<button>");

             if(gifs.btnCycle === gifs.btnStyle.length ) {
              
              gifs.btnCycle = 0;

            //if the number of buttons is more than the stylings in the array reset to thw start of the array

            };


        //add class to make different button styles, set data attribute for comparison to correct answer later, label button
        Btn.addClass(gifs.btnStyle[gifs.btnCycle]).attr("data-interest", gifs.interests[i]).text(gifs.interests[i]);

          console.log("btn cycle: " + gifs.btnCycle);

        gifs.btnCycle ++ ;

   
      

      
         $("#buttonmoon").append(Btn); //append each button to the display area

};

           gifs.bringGifs(); //rpevents the necessity to call the function outside the object


},


addInterest: function() {



$("#submit").on("click", function() {

    event.preventDefault();


if ( $("#interests-input").val().trim() === ""){ //prevent buttons being made with no values

$("#interests-input").val("");
return;

}



gifs.newInterest = $("#interests-input").val().trim().toLowerCase();

gifs.interests.push(gifs.newInterest);
gifs.interests = $.unique(gifs.interests); //prevent repeat buttons being made


$("#interests-input").val("");

$(".remove").remove(); //remove the existing buttons before generating more, or they will multiply


gifs.onStart();



})

//end of addInterests

},

bringGifs: function() {

    $(".remove").on("click", function() {

      event.preventDefault();
      $(".img").remove(); //remove all existing gifss

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


