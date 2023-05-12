import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const connection = async () => {
  try {
    if (typeof process.env.DATABASE_CONNECTION_URL === "string") {
      await mongoose.connect(process.env.DATABASE_CONNECTION_URL);
      console.log("Conectado com sucesso.");
    }
  } catch (error) {
    console.log(
      `Ocorreu um erro ao se conectar ao banco Mongoose. \n Erro: ${error}`
    );
    process.exit(0);
  }
};

export default connection;
