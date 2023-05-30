import { server } from './server/Server';

const Port = 3333;

server.listen(Port, ()=> console.log('listening on port http://localhost:' +Port ));
