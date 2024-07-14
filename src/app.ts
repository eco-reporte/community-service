import express from "express";
import "dotenv/config";
import { communityRoutes } from "./communiy/infraestructure/routes/communityRoutes";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use('/community', communityRoutes);


const port = process.env.PORT || 3004;
app.listen(port, () => {
  console.log(`Corriendo en el puerto ${port}`);
});