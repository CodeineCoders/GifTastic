$(document).ready(function () {
    var animals = ["Dogs"];

    function addButtons(){

        $("#animalView").empty();
        for (var i = 0; i < animals.length; i++) {
            var a = $('<button>')
            a.addClass("animal");
            a.attr("data-name", animals[i]);
            a.text(animals[i]);
            $("#animalView").append(a);

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
            //using giphy URL & apikey
            var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + animals + "&api_key=DfEDLoxtRsTuunAcM6Uinvl6dmatdLn6&limit=5";
            
            $.ajax({
                url: queryURL,
                method: "GET"
            }).then(function (response) {

                var results = response.data;
                for (var i =0; i < results.length; i++) {
                    var newDiv = $("<div class=gif>");
                    var gif = $("<img>");
                        gif.attr("src", results[i].images.fixed_height.url);
                        gif.addClass("gif")

                    newDiv.append(gif)
                    $("#images").prepend(newDiv);
                }

           });

        }

        $(document).click(".gif", function() {

        });

        $(document).click(".animal", display);

        addButtons();

});