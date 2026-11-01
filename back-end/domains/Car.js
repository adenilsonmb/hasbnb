import {Schema, model} from "mongoose";

const carSchema = new Schema({
  marca: { type: String, required: true },
  modelo: { type: String, required: true },
  cor: String,
  placa: { type: String, required: true, unique: true, uppercase: true, trim: true },
  preco: { type: Number, required: true },
  local: String
});

export default model("Car", carSchema);