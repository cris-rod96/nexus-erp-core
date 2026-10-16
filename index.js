import { sq } from "./src/lib/db.js";
import server from "./src/server.js";
import { PORT } from "./src/config/index.js";
server.listen(PORT, () => {
  console.log(`Server a la escucha por el puerto 3000`);
  sq.sync({
    logging: false,
    force: true,
    alter: false,
  })
    .then(() => {
      console.log("Base de datos sincronizada");
    })
    .catch((err) => {
      console.log(`Error al sincronizar: ${err.message}`);
    });
});
