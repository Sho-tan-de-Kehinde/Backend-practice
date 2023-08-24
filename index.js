const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res)=>{
if(req.url === '/'){
 
 fs.readFile('./views/index.html', (err, data)=> {
    if(err) throw err;

    


    res.writeHead(200, {'content-type': 'text/html'})
    res.end(data);


});

  
} else if(req.url === '/about'){
 
    fs.readFile('./views/about.html', (err, data)=> {
       if(err) throw err;
   
       
   
   
       res.writeHead(200, {'content-type': 'text/html'})
       res.end(data);
   
   
   });
   
     
   } else if(req.url === '/contact'){
 
    fs.readFile('./views/contact.html', (err, data)=> {
       if(err) throw err;
   
       
   
   
       res.writeHead(200, {'content-type': 'text/html'})
       res.end(data);
   
   
   });
   
     
   } else if(req.url === '/product'){
 
    fs.readFile('./product/index.html', (err, data)=> {
       if(err) throw err;
   
       
   
   
       res.writeHead(200, {'content-type': 'text/html'})
       res.end(data);
   
   
   });
   
     
   } else if(req.url === '/users/create' && req.method === 'post'){
    let req_body = '';
    req.on('data', chunk => {
    req_body += chunk.toString();
    });
    
    req.on('end', ()=>{
        const query_params = new URLSearchParams(req_body);
        const username = query_params.get(username);
        const email = query_params.get(email)
        const password = query_params.get(password)

        console.log(username, email, password);

    });
   }
   
});

server.listen(5500, localHost);