var yourFavouritActor = prompt("who is your favourit actor from vikings show ?");

if (yourFavouritActor == "ragner") {
    document.write("ooh this is the best choice bcs he is the better");
    document.write('<img src="pics/ragner.jpg"');
}

else if (yourFavouritActor == "lagertha") {
    document.write("nice choice");

    document.write('<img src="pics/lagertha.jpg">');
}

else if (yourFavouritActor == "rollo") {
    document.write("come on man he is a traitor ");

    document.write('<img src="pics/rollo.jpg">');
}
else {
    alert("go watch vikings series and come back");
}
var text;
var con = confirm("Press a button");
if (con == true) {
    text = "You pressed OK!";
    alert(text);
} else {
    text = "You pressed Cancel!";
    alert(text);
}


