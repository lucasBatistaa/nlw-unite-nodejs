import {
  registerForEvent
} from "./chunk-XGJOFQB6.mjs";
import {
  errorHandler
} from "./chunk-DCZJQNPL.mjs";
import {
  checkIn
} from "./chunk-X3NCD4DM.mjs";
import {
  createEvent
} from "./chunk-RW5OIPTP.mjs";
import "./chunk-KDMJHR3Z.mjs";
import {
  getAttendeeBadge
} from "./chunk-RUG2HLYG.mjs";
import {
  getEventAttendees
} from "./chunk-3JOCUKYO.mjs";
import {
  getEvent
} from "./chunk-EKYCUQEU.mjs";
import "./chunk-JRO4E4TH.mjs";
import "./chunk-JV6GRE7Y.mjs";

// src/server.ts
import fastify from "fastify";
import fastifySwagger from "@fastify/swagger";
import fastifySwaggerUi from "@fastify/swagger-ui";
import { serializerCompiler, validatorCompiler, jsonSchemaTransform } from "fastify-type-provider-zod";
import fastifyCors from "@fastify/cors";
var app = fastify().withTypeProvider();
app.register(fastifyCors, {
  origin: "*"
});
app.register(fastifySwagger, {
  swagger: {
    consumes: ["aplication/json"],
    produces: ["aplication/json"],
    info: {
      title: "pass.in",
      description: "API para o back-end da aplica\xE7\xE3o pass.in, desenvolvida no NLW Unite da Rocketseat",
      version: "1.0.0"
    }
  },
  transform: jsonSchemaTransform
});
app.register(fastifySwaggerUi, {
  routePrefix: "/docs"
});
app.setValidatorCompiler(validatorCompiler);
app.setSerializerCompiler(serializerCompiler);
app.register(createEvent, { prefix: "/" });
app.register(registerForEvent, { prefix: "/" });
app.register(getEvent, { prefix: "/" });
app.register(getAttendeeBadge, { prefix: "/" });
app.register(checkIn, { prefix: "/" });
app.register(getEventAttendees, { prefix: "/" });
app.setErrorHandler(errorHandler);
app.listen({ port: 3333, host: "0.0.0.0" }).then(() => {
  console.log("HTTP server running!");
});
export {
  app
};
