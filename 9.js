var http = require("http");
var url = process.argv.slice(2);
// console.log(url);
var rss = ["","",""];
var finish = [false,false,false];
url.forEach((url,index)=>{
    http.get(url,response=>{
        response.on("data",data=>{
            rss[index]+=data.toString();
        });
        response.on("end",()=>{
            finish[index]=true;
            // console.log("allFinish:"+ allFinish());
            allFinish() && rss.forEach( rs => console.log(rs) );
        });
    });
});

function allFinish(){
    return finish.reduce( (prv,curr)=>prv&&curr);
}
