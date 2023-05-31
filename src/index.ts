import { server } from './server/Server';




server.listen(process.env.PORT || 3333,()=>{

  console.log(`Servidor rodando na Porta ${process.env.PORT || 3333}`);
});
