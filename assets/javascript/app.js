$(document).ready();
// Initial gifTopics to render
var gifTopics = ["Cars", "Planes", "Trains", "Fish"];
// Button Renderer
function renderButtons() {
    $("#buttons-view").empty();
    for (var i = 0; i < gifTopics.length; i++) {
        var a = $("<button>");
        a.addClass("movie-btn");
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