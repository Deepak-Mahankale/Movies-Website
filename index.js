// function movie(val){
//     switch(val){

//         case "article1":
//             return{
//             name: "deepak",
//             sirname: "Mahankale",
//             };
//         break;
        
//         case "article2":
//             var name="nano";
//             return name;
//             break;

//         case "article3":
//             var name="deepak";
//             return name;
//             break;

//         default:
//             var name="NamedNodeMap";
//             return name;
//     }
       
// }


// $('#article1').click(function(){
//     var obj= movie("article1")
//     //alert("hello"+obj.name+obj.sirname);
// });



let json_url = "data.json";

$("#article1").click(function(){ fetch(json_url).then(Response => Response.json()) 
    .then((data) => { data.forEach((ele, i) => { 
        let { name, imdb, date, sposter, bposter, genre, url } = ele; 
            $("#titlen").text(name);
        }); 
    });
});






