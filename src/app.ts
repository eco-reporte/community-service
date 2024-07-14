import express from "express";
import "dotenv/config";
import { communityRoutes } from "./communiy/infraestructure/routes/communityRoutes";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use('/api/v1/community', communityRoutes);


const port = process.env.PORT || 3007;
app.listen(port, () => {
  console.log(`Corriendo en el puerto ${port}`);
});