var yourFavouritActor = prompt("who is your favourit actor from vikings show ?");

var getfavouritactor = function () {
    while (yourFavouritActor !== "ragner" && yourFavouritActor !== "rollo" && yourFavouritActor !== 'lagertha') {
        yourFavouritActor = prompt("please only choose between ragner,rollo,lagertha");

    }
}
getfavouritactor(yourFavouritActor);


var actor = "";


var HowManyPic = prompt("how many pic do you want");
var getNumOfPics = function (HowManyPic) {

    var counter = 1;
    // var num = HowManyPic;
    while (counter++ <= HowManyPic) {

        if (yourFavouritActor == "ragner") {
            console.log("hello1");
            actor += '<img src="pics/ragner.jpg">';
        }else if (yourFavouritActor == "lagertha") {


            actor += '<img src="pics/lagertha.jpg">';
        }
        else if (yourFavouritActor == "rollo") {

            actor += '<img src="pics/rollo.jpg">';
        }
        else {
            alert("go watch vikings series and come back");
        }

    }
    document.write(actor + "<h2>the number of the pics is:</h2>" + HowManyPic );

}
getNumOfPics(HowManyPic);



