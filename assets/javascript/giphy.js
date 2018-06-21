$(document).ready(function () {

        function display() {
            var animal = $(this).attr("data-name");
            //using giphy URL & apikey
            var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + animals + "api_key=DfEDLoxtRsTuunAcM6Uinvl6dmatdLn6";
            
            $.ajax({
                url: queryURL,
                method: "GET"
            }).then(function (response) {

                var results = response.data;

           });
        }





    

});