
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
    var Imageset = {
        "Lawrence Gerard Struempf": "https://bloximages.chicago2.vip.townnews.com/trib.com/content/tncms/assets/v3/editorial/b/4a/b4acfb6d-a5f7-5220-8f05-09bce16ed91c/57f67b97c5dd5.image.jpg?crop=578%2C550%2C0%2C0",
        "MarkGordon":"https://mediad.publicbroadcasting.net/p/wpr/files/styles/x_large/public/201411/markgordonlg.jpg",
        "Mary A.Throne": "https://bloximages.chicago2.vip.townnews.com/billingsgazette.com/content/tncms/assets/v3/editorial/9/9e/99e3b6ea-ae6a-5aac-bdc9-da4fe7aed908/511ac1ba12d22.image.jpg",
        "Rex \"T-Rex\"Rammell":"https://upload.wikimedia.org/wikipedia/commons/d/d1/Rex_%22T-Rex%22_Rammell_at_Campbell_County_League_of_Women_Voters%27_General_Election_Candidates%27_Forum_in_Gillette%2C_Wyoming_%28cropped%29.jpg",
         "EdwardBuchanan":"https://ewc.wy.edu/wp-content/uploads/2018/04/Ed_Buchanan.jpg",
         "James W.Byrd":"https://www.wyoleg.gov/LegislatorSummary/Photos/ByrdJH44.jpg",
         "KitCarson III":"https://i.ytimg.com/vi/FaphazC2sAs/hqdefault.jpg",
         "CathyConnolly":"https://www.wyoleg.gov/LegislatorSummary/Photos/ConnollyCH13.jpg",
         "DanielFurphy":"https://www.wyoleg.gov/LegislatorSummary/Photos/FurphyDH14.jpg",
         "LorraineSaulino-Klein":"https://bloximages.chicago2.vip.townnews.com/rawlinstimes.com/content/tncms/assets/v3/editorial/4/a2/4a28b2aa-1cb7-5483-a635-b070c18ed14a/5bd7a19d5120c.image.jpg",
         "Charles F.Pelkey":"https://bloximages.chicago2.vip.townnews.com/trib.com/content/tncms/assets/v3/editorial/6/51/6510b0e1-8e3f-5834-9a90-7878d76dc377/5bc137d350e2c.image.jpg?crop=764%2C764%2C0%2C8&resize=1200%2C1200&order=crop%2Cresize",
         "Roxie JacksonHensley":"http://www.albanycountygop.org/Data/Sites/7/media/roxie-jackson-hensley.jpg",
         "BillHaley":"https://bloximages.chicago2.vip.townnews.com/trib.com/content/tncms/assets/v3/editorial/8/e5/8e568a32-fca7-5f70-96c8-98ce86767691/5b5759934d8e4.image.jpg?crop=562%2C562%2C0%2C38&resize=1200%2C1200&order=crop%2Cresize",
         "JackieGrimes":"https://bloximages.chicago2.vip.townnews.com/trib.com/content/tncms/assets/v3/editorial/d/76/d76bc737-4907-5702-a0d4-c974c42250d1/5db0f14357f92.image.jpg?resize=1200%2C800",
         "JerryPaxton":"https://www.wyoleg.gov/LegislatorSummary/Photos/PaxtonH47.jpg",
         "LarryHicks":"https://bloximages.chicago2.vip.townnews.com/trib.com/content/tncms/assets/v3/editorial/3/a9/3a9dbd4c-1b99-5882-8dae-60651df3d222/5b5a640b4b7ed.image.jpg?crop=465%2C465%2C77%2C0&resize=1200%2C1200&order=crop%2Cresize",
         "Lee AnnStephenson":"https://bloximages.chicago2.vip.townnews.com/rawlinstimes.com/content/tncms/assets/v3/editorial/2/89/289b3efa-ed89-5ca7-99b1-230df2dd9f9a/5b68da7934b70.image.jpg?resize=400%2C428",
         "ChrisRothfuss":"https://bloximages.chicago2.vip.townnews.com/trib.com/content/tncms/assets/v3/editorial/3/70/3707f3dc-7d7e-5524-b72a-632f4dcb407a/5a79eda9b749b.image.jpg",
         "Daniel ClydeCummings":"https://bloximages.chicago2.vip.townnews.com/trib.com/content/tncms/assets/v3/editorial/3/70/3707f3dc-7d7e-5524-b72a-632f4dcb407a/5a79eda9b749b.image.jpg",
         "GregHunter":"https://bloximages.chicago2.vip.townnews.com/trib.com/content/tncms/assets/v3/editorial/0/2a/02a66aed-3976-5e99-93b0-30bf116893a1/5b21b83853c02.image.jpg?crop=565%2C566%2C189%2C7&resize=1200%2C1202&order=crop%2Cresize",
         "LizCheney":"https://mediad.publicbroadcasting.net/p/wpr/files/styles/x_large/public/201709/57f67b98a6c33.image_.jpg",
         "RichardBrubaker":"https://bloximages.chicago2.vip.townnews.com/trib.com/content/tncms/assets/v3/editorial/e/8a/e8af748c-2902-5ebc-aa73-5d393c2e952d/5bc7d44fd9709.image.jpg",
         "GaryTrauner":"https://i.ytimg.com/vi/M7kg0jv4TxA/maxresdefault.jpg",
         "JohnBarrasso":"https://mediad.publicbroadcasting.net/p/wpr/files/styles/small/public/201405/Senator-John-Barrasso-01.jpg",
         "JosephPorambo":"https://townsquare.media/site/101/files/2014/04/Joseph-Porambo.jpg?w=980&q=75"
     };
    document.getElementById("c").innerHTML = " ";
    for (var i = 0; i < result.length; i++)
    {
        if (result[i].office === owner){
            var k = result[i].candidate.replace(/(\r\n|\n|\r)/gm, "");
            if (result[i].party === "democrat")
            {
                document.getElementById("c").innerHTML+= "<div class='col-lg-4 col-md-6 mb-4'> <div class='card h-100'> <a href='./candidatePage.html'><img class='card-img-top' src='"+Imageset[k]+"' alt=''></a><div class='card-body'><h4 class='card-title'><a href='#' id='test_"+i+"'>"+ result[i].candidate +"</a></h4><p class='card-text'><button type='button' class='btn btn-outline-danger'>Republican</button></p></div><div class='card-footer findMoreButton'><a type='button' href='../pages/candidatePage.html' class='btn btn-primary' onClick='testJs("+i+")'>Learn More</a></div></div></div>";
            }
            else if(result[i].party === "republican")
            {
                document.getElementById("c").innerHTML+= "<div class='col-lg-4 col-md-6 mb-4'> <div class='card h-100'> <a href='./candidatePage.html'><img class='card-img-top' src='"+Imageset[k]+"' alt=''></a><div class='card-body'><h4 class='card-title'><a href='#' id='test_"+i+"'>"+ result[i].candidate +"</a></h4><p class='card-text'><button type='button' class='btn btn-outline-danger'>Republican</button></p></div><div class='card-footer findMoreButton'><a type='button' href='../pages/candidatePage.html' class='btn btn-primary' onClick='testJs("+i+")'>Learn More</a></div></div></div>";
            }
            else
            {
                document.getElementById("c").innerHTML+= "<div class='col-lg-4 col-md-6 mb-4'> <div class='card h-100'> <a href='./candidatePage.html'><img class='card-img-top' src='"+Imageset[k]+"' alt=''></a><div class='card-body'><h4 class='card-title'><a href='#' id='test_"+i+"'>"+ result[i].candidate +"</a></h4><p class='card-text'><button type='button' class='btn btn-outline-danger'>Republican</button></p></div><div class='card-footer findMoreButton'><a type='button' href='../pages/candidatePage.html' class='btn btn-primary' onClick='testJs("+i+")'>Learn More</a></div></div></div>";
            }
            

        }
    }
}

function testJS(i) {
    var b = document.getElementById('id'+i.toString(10)).value,
        url = '../pages/candidatePage.html?name=' + encodeURIComponent(b);

    document.location.href = url;
}

// function getNamesforSearch(results,owner)
// {
//     for (var i = 0; i < results.length; i++)
//     {
//         var trrrimed = encodeURIComponent(results[i].candidate.trim());
//         document.getElementById("file").innerHTML += "<script src='https://www.googleapis.com/customsearch/v1?key=AIzaSyCdNunWsq0jptgZuxbGtq9Eb0C_5Xak59o&cx=017576662512468239146:omuauf_lfve&q="+trrrimed+"&callback=hndlr'></script>";
//     }
// }


// function hndlr(response) {
//     var test = 0;
//     for (var i = 0; i < response.items.length; i++) {
//       var item = response.items[i];
//       // in production code, item.htmlTitle should have the HTML entities escaped.
//       //document.getElementById("content").innerHTML += "<br>" + item.htmlTitle;
//       if (test === 0)
//       {
//         console.log(item.link);  
//         Imageset.push(item.link);
//         test++;
//       }
//     }
//   }