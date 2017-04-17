var xhttp = new XMLHttpRequest();
if (window.localStorage.vodka == undefined){
    window.localStorage.vodka = +new Date();
}
function loadVotes(){
    $.getJSON( "http://veli.vodka:8080/api", function( data ) {
        $(".topBox").empty();
        var items = [];
        data.sort(function(a,b){return a.votes - b.votes});
        data.reverse();
        $.each( data, function( i, item) {
            items.push( "<li><div id='" +data[i].idea + "' class='foo' data-id=" + data[i].idea + " style='width: " + 100 * data[i].votes / data[0].votes + "%;' >" + data[i].votes + "</div><div>" + data[i].idea + "</div></li>" );
            console.log(data[i].votes + " / " + data[1].votes + " * " + 100 + " = " + (data[i].votes / data[1].votes * 100));
        });
        $( "<ul/>", {
            "class": "votes-list",
            html: items.join( "" )
        }).appendTo( ".topBox" );
        $('.foo').click (voteClicked);
    });
};


function voteClicked(event){
    console.log(event.target.dataset.id);
    console.log($("#idea").val());
    xhttp.open("POST", "http://tbd.veli.vodka:8080/api/vote", true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.onreadystatechange = function(){
        if (this.readyState == 4 && this.status == 200) {
            loadVotes();
        }
    }
    xhttp.send("idea=" + event.target.dataset.id + "&idi=" + window.localStorage.vodka);
};
function newVoteClicked(){
    console.log($("#idea").val());
    xhttp.open("POST", "http://tbd.veli.vodka:8080/api", true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.onreadystatechange = function(){
        if (this.readyState == 4 && this.status == 200) {
            loadVotes();
        }
    }
    xhttp.send("idea=" + $("#idea").val())
};

window.onload = loadVotes;
