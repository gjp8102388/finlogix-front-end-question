const jsonServer = require('json-server');
const fs = require('fs');
const server = jsonServer.create();
const middlewares = jsonServer.defaults({noCors:true})
const user = JSON.parse(fs.readFileSync('./src/mockApi/user.json'));
const postList = JSON.parse(fs.readFileSync('./src/mockApi/postList.json'));

server.post('/v1/auth/email/login', (req, res) => {
    const email = req.query.email;
    const password = req.query.password;
    if(user.user.email===email && user.user.password === password){

        res.status(200).jsonp(user)
    }
    else {
        res.sendStatus(401);
    }
});
server.get('/v1/posts', (req,res)=>{
    res.status(200).jsonp(postList);
})
server.use(middlewares);
const port = 8080;
server.listen(port, () => {
    // eslint-disable-next-line no-console
    console.log('JSON Server is running');
});
