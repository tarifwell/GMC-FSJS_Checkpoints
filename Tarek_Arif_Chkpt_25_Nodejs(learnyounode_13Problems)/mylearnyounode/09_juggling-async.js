//This problem is the same as the previous problem (08) except that we have to deal with 3 URLs instead of one.
//We need bl module to handle streams
//We need to respect the order of callbacks from server, then log-out responses in the same order we request them

const http = require('http');
const bl = require('bl');
const urls = process.argv.slice(2); //urls is an array
const results = [];
let count = 0;

function printResponses(){
  for(var i =0; i<3; i++){
    console.log(results[i]);
  }
}

urls.map((url, index) => {
  http.get(url, (response)=>{
    response.pipe(bl(function(err, data){
      if(err) return console.error(err);
      results[index] = data.toString();
      count++;
      if(count === 3){
        printResponses();
      }
    }))
  })
})

