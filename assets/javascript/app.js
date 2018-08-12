$(document).ready();
// Initial gifTopics to render
var gifTopics = ['Cars', 'Planes', 'Trains', 'Fish'];
// Button Renderer

$(document).on("click", ".gif-btn", function () {
    var userGif = $(this).attr('data-name');
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
        userGif + "&api_key=QXzn51wfk48IhkxwjxOwtcUo2pvQBABl&limit=10";

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        console.log(queryURL);
        console.log(response);
        var results = response.data;
        console.log(results);

        for (var i = 0; i < results.length; i++) {
            var gifAnimated = results[i].images.fixed_height.url;
            var gifStill = results[i].images.fixed_height_still.url;

            var gifDiv = $("<div>");
            var p = $("<p>").text("Rating: " + results[i].rating);
            var gifImage = $("<img>")
            gifImage.attr({
                "src": gifStill,
                "data-state": "still",
                "data-animate": gifAnimated,
                "data-still": gifStill,
                "class": "gif"
            });
            gifDiv.append(gifImage);
            gifDiv.append(p);
            $("#gif-view").prepend(gifDiv);
        }

    });
});

$(document).on('click', ".gif", function () {
    var state = $(this).attr("data-state");
    if (state === "still") {
        $(this).attr("src", $(this).attr("data-animate"));
        $(this).attr("data-state", "animate");
    } else {
        $(this).attr("src", $(this).attr("data-still"));
        $(this).attr("data-state", "still");
    }
});

function renderButtons() {
    $("#buttons-view").empty();
    for (var i = 0; i < gifTopics.length; i++) {
        var a = $("<button>");
        a.addClass("gif-btn");
        a.attr("data-name", gifTopics[i]);
        a.text(gifTopics[i]);
        $("#buttons-view").append(a);
    }
}

$("#add-gif").on("click", function (event) {
    event.preventDefault();
    var newGif = $("#gif-input").val().trim();
    gifTopics.push(newGif);
    renderButtons();
});

renderButtons();