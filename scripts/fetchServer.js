$(function() {


$('#btnLoadDataServer').click(function() {
    console.log("clicked");

    let jsonURL = "https://barrycumbie.github.io/376-india-lab/demo.json";

    $.ajax({
        url: jsonURL,
        dataType: "json",
        success: function(result) {
            console.log("server json: ", result);
            $.each(result, function(key, value) {
                $("#dataContainer").append(key + ": " + value + "<br>");
            });
        }
    });

   
});


// end of doc ready f/n
});

