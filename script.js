
$.getJSON( "test.json", function( data ) {
    var items = [];
    data.sort(function(a,b){return a.votes - b.votes});
    data.reverse();
    $.each( data, function( i, item) {
        items.push( "<li id='" +data[i].votes + "'>" + data[i].idea + ": " + data[i].votes + "</li>" );
    });
    $( "<ul/>", {
        "class": "votes-list",
        html: items.join( "" )
    }).appendTo( ".topBox" );
});

