var xhttp = new XMLHttpRequest();

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


function newVoteClicked(){
    console.log("KAKKANAAMA!");
    xhttp.open("POST", "http://veli.vodka:80/", true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send("idea=kakkanaama");
}

function post(path, params, method) {
    method = method || "post"; // Set method to post by default if not specified.

    // The rest of this code assumes you are not using a library.
    // It can be made less wordy if you use one.
    var form = document.createElement("form");
    form.setAttribute("method", method);
    form.setAttribute("action", path);

    for(var key in params) {
        if(params.hasOwnProperty(key)) {
            var hiddenField = document.createElement("input");
            hiddenField.setAttribute("type", "hidden");
            hiddenField.setAttribute("name", key);
            hiddenField.setAttribute("value", params[key]);

            form.appendChild(hiddenField);
         }
    }

    document.body.appendChild(form);
    form.submit();
}
