const Koa = require('koa');
const server = new Koa();

const port = 3000;
// response
server.use(ctx => {
  ctx.body = 'Hello Koa';
});

server.listen(port, () => {
  console.log(`server is running at http://localhost:${port}`);
});
