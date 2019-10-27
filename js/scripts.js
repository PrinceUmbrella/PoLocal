$(document).ready(function(){

    // jQuery methods go here...
    $("#butt").click(function(){
        console.log("butt worked");

        $.ajax({url: "https://polocalstorage.blob.core.windows.net/adftutorial/output/WYABLANYJDADDY2.json", success: function(result){
            console.log(result[1]);
            //Pass result into a fucntion to create an array of objects, use those objects to populate candidate cards
            var testObj = result[1];
            var myJSON = JSON.stringify(testObj);
            $("#fillMe").html(myJSON);
          }});
    });
});

