//HTTP server that serves JSON data when it receives a GET request to the specific path (pathname)

const http = require('http');
const url = require('url');
const port = Number(process.argv[2]);

function timeParsed (pathname, time){
  if(pathname === '/api/parsetime'){
    return JSON.stringify({
      hour: time.getHours(),
      minute: time.getMinutes(),
      second: time.getSeconds()
    });
  } else if(pathname === '/api/unixtime'){
    return JSON.stringify({
      unixtime: time.getTime(),
    });
  } else {
    return JSON.stringify({});

    // JSON.stringify({
    //   success: false,
    //   message: `${pathname} is not a valid endpoint`
    // });
  }
}

const server = http.createServer((req, res)=>{
  const urlParsed = url.parse(req.url, true);
  const pathname = urlParsed.pathname;
  const query = urlParsed.query;
  const time = new Date(urlParsed.query.iso);
  let result = timeParsed(pathname, time);

  // console.log(pathname);
  // console.log(query);
  // console.log(time);

  if (result)
    res.writeHead(200, { 'Content-Type': 'application/json' });
  else
    res.writeHead(404, {'Content-Type':'application/json'});

  res.end(result);
});

server.listen(port);
