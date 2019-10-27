$(document).ready(function(){
    // jQuery methods go here...
    $("#SState").click(function(){
        console.log("butt worked");
        
        $.ajax({url: "https://polocalstorage.blob.core.windows.net/adftutorial/output/WYABLANYJDADDY2.json", success: function(result){
            console.log(result[1]);
            //Pass result into a fucntion to create an array of objects, use those objects to populate candidate cards
            var testObj = result[1];
            var myJSON = JSON.stringify(testObj);
            var office = "Secretary of State";
            getCandidate(result, office);
            $("#fillMe").html(myJSON);
          }});
    });
    $("#Governor").click(function(){
        console.log("butt worked");
        
        $.ajax({url: "https://polocalstorage.blob.core.windows.net/adftutorial/output/WYABLANYJDADDY2.json", success: function(result){
            console.log(result[1]);
            //Pass result into a fucntion to create an array of objects, use those objects to populate candidate cards
            var testObj = result[1];
            var myJSON = JSON.stringify(testObj);
            var office = "Governor";
            getCandidate(result, office);
            $("#fillMe").html(myJSON);
          }});
    });
    $("#SRep").click(function(){
        console.log("butt worked");
        
        $.ajax({url: "https://polocalstorage.blob.core.windows.net/adftutorial/output/WYABLANYJDADDY2.json", success: function(result){
            console.log(result[1]);
            //Pass result into a fucntion to create an array of objects, use those objects to populate candidate cards
            var testObj = result[1];
            var myJSON = JSON.stringify(testObj);
            var office = "State Representative";
            getCandidate(result, office);
            $("#fillMe").html(myJSON);
          }});
    });
    $("#SSenator").click(function(){
        console.log("butt worked");
        
        $.ajax({url: "https://polocalstorage.blob.core.windows.net/adftutorial/output/WYABLANYJDADDY2.json", success: function(result){
            console.log(result[1]);
            //Pass result into a fucntion to create an array of objects, use those objects to populate candidate cards
            var testObj = result[1];
            var myJSON = JSON.stringify(testObj);
            var office = "State Senator";
            getCandidate(result, office);
            $("#fillMe").html(myJSON);
          }});
    });
    $("#USRep").click(function(){
        console.log("butt worked");
        
        $.ajax({url: "https://polocalstorage.blob.core.windows.net/adftutorial/output/WYABLANYJDADDY2.json", success: function(result){
            console.log(result[1]);
            //Pass result into a fucntion to create an array of objects, use those objects to populate candidate cards
            var testObj = result[1];
            var myJSON = JSON.stringify(testObj);
            var office = "US Representative";
            getCandidate(result, office);
            $("#fillMe").html(myJSON);
          }});
    });
    $("#USSenate").click(function(){
        console.log("butt worked");
        
        $.ajax({url: "https://polocalstorage.blob.core.windows.net/adftutorial/output/WYABLANYJDADDY2.json", success: function(result){
            console.log(result[1]);
            //Pass result into a fucntion to create an array of objects, use those objects to populate candidate cards
            var testObj = result[1];
            var myJSON = JSON.stringify(testObj);
            var office = "US Senator";
            getCandidate(result,office);
            $("#fillMe").html(myJSON);
          }});
    });
});


function getCandidate(result, owner){
    document.getElementById("c").innerHTML = " ";
    for (var i = 0; i < result.length; i++)
    {
        console.log(i);
        if (result[i].office === owner){
            if (result[i].party === "democrat")
            {
                document.getElementById("c").innerHTML+= "<div class='col-lg-4 col-md-6 mb-4'> <div class='card h-100'> <a href='./candidatePage.html'><img class='card-img-top' src='https://image.cnbcfm.com/api/v1/image/104656161-GettyImages-688156110.jpg?v=1532563778&w=1400&h=950' alt=''></a><div class='card-body'><h4 class='card-title'><a href='#'>"+ result[i].candidate +"</a></h4><p class='card-text'><button type='button' class='btn btn-outline-primary'>Democrat</button></p></div><div class='card-footer findMoreButton'><button type='button' class='btn btn-primary' data-toggle='modal' data-target='#exampleModalCenter'>Learn More</button></div></div></div>";
            }
            else if(result[i].party === "republican")
            {
                document.getElementById("c").innerHTML+= "<div class='col-lg-4 col-md-6 mb-4'> <div class='card h-100'> <a href='./candidatePage.html'><img class='card-img-top' src='https://image.cnbcfm.com/api/v1/image/104656161-GettyImages-688156110.jpg?v=1532563778&w=1400&h=950' alt=''></a><div class='card-body'><h4 class='card-title'><a href='#'>"+ result[i].candidate +"</a></h4><p class='card-text'><button type='button' class='btn btn-outline-danger'>Republican</button></p></div><div class='card-footer findMoreButton'><button type='button' class='btn btn-primary' data-toggle='modal' data-target='#exampleModalCenter'>Learn More</button></div></div></div>";
            }
            else
            {
                document.getElementById("c").innerHTML+= "<div class='col-lg-4 col-md-6 mb-4'> <div class='card h-100'> <a href='./candidatePage.html'><img class='card-img-top' src='https://image.cnbcfm.com/api/v1/image/104656161-GettyImages-688156110.jpg?v=1532563778&w=1400&h=950' alt=''></a><div class='card-body'><h4 class='card-title'><a href='#'>"+ result[i].candidate +"</a></h4><p class='card-text'><button type='button' class='btn btn-outline-warning'>Independent</button></p></div><div class='card-footer findMoreButton'><button type='button' class='btn btn-primary' data-toggle='modal' data-target='#exampleModalCenter'>Learn More</button></div></div></div>";
            }

        }
    }
}

// function createModal

// function hndlr(response) {
//     for (var i = 0; i < response.items.length; i++) {
//       var item = response.items[i];
//       // in production code, item.htmlTitle should have the HTML entities escaped.
//       document.getElementById("content").innerHTML += "<br>" + item.htmlTitle;
//     }
//   }