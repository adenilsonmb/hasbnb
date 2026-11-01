import "dotenv/config";
import mongoose from "mongoose";

const { MONGODB_URI } = process.env;

async function connectDB() {
  
  try {
    await mongoose.connect(MONGODB_URI);
    console.log("201: Conectado ao MongoDB com sucesso!");
  } catch (error) {
    console.log("501: Erro ao conectar ao MongoDB", error);
  }
}

export default connectDB;
