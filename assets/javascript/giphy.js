$(document).ready(function () {
    var animals = ["Dogs"];

    function addButtons(){

        $("#animalView").empty();
        for (var i = 0; i < animals.length; i++) {
            var button = $("<button>")
            button.addClass("animal");
            button.attr("data-name", animals[i]);
            button.text(animals[i]);
            $("#animalView").append(button);

        }
    }

    $("#addAnimal").click(function() {
        var animal = $("#animal-input").val().trim();
        animals.push(animal);
        addButtons();
        return false;
    });


        function display() {

        var animal = $(this).attr("data-name");
            //using giphy URL & apikey & rating is included.
            var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + animals + "&api_key=DfEDLoxtRsTuunAcM6Uinvl6dmatdLn6&limit=5&rating=g";
            
            $.ajax({
                url: queryURL,
                method: "GET"
            }).then(function (response) {
                var results = response.data;
                for (var i =0; i < results.length; i++) {
                    var newDiv = $("<div class=gif>");
                    var gifs = $("<img>");
                        gifs.attr("src", results[i].images.fixed_height.url);

                    newDiv.append(gifs)
                    $("#images").prepend(newDiv);
                }

           });

        }

        $(document).click(".animal", display);

        addButtons();

});