// const http=require( "http");
// const url=reqire("url");

// const rasha=http.createServer((req,res)=>{
//     const parseUrl=url.parse(req.url,true);
//     const path=parsedUrl.pathname;
//     const method=req.method;
// })

// if(method==='GET' && path==='/demo'){
//     res.writeHead(200,{'Content-Type':'text/plain'});
//     res.end('GET request to / demo');
// }
// else if(method === 'POST' && path ==="/demo") {
//     let requestBody= '';
//     req.on('data',chunk=>{
//     requestBody += chunk.toString();
//     });
//     req.on('end',()=>{
//         res.writeHead(200,{"Content-Type":"text/plain"});
//         res.end('POST request to / demo with body:$(requestBody)');
//     });
// }else{
//     res.writeHead(404,{
//         'Contenet-Type': 'text/plain',});
//         res.end("Not found!");
//     }
    
// const PORT = 300;
// Server.listen(PORT,() => {
//     console.log(`server is running at http://localhost: ${PORT}`);
// })


const http= require ('http');

const port1=process.argv[2]||3000;
const port2=process.argv[3]||3001;

const serverLogic=(req,res) => {
    res.writeHead(200, {'Conent-Type':'text/plain'}) ;
    res.end("Hello World! \n");
};

const server1 = http.createServer(serverLogic);
const  server2 = http.createServer(serverLogic);

server1.listen(port1 , () =>console.log(`server one listening on ${port1}`) );
server2.listen(port2 , () => console.log(`server two listening on ${port2}\n`));