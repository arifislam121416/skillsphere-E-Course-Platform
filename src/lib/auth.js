import { mongodbAdapter } from "@better-auth/mongo-adapter";
import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";

const client = new MongoClient("MONGODB_URI");
const db = client.db("skillsphere");

export const auth = betterAuth({
    database: mongodbAdapter(db, {
        emailAndPassword: { 
    enabled: true, 
  }, 
  socialProviders: { 
    github: { 
      clientId: process.env.GITHUB_CLIENT_ID, 
      clientSecret: process.env.GITHUB_CLIENT_SECRET, 
    }, 
  }, 
    // Optional: if you don't provide a client, database transactions won't be enabled.
    client
  }),
  //...
});