import "reflect-metadata";
import express from "express";
import "./database";

const app = express();

app.use(express.json());

app.get("/", (request, response) => {
  return response.send({ message: "Hello World" })
});

export { app }
