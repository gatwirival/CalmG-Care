import { Client } from 'appwrite';
const client = new Client();

client
  .setEndpoint('https://cloud.appwrite.io/v1')
  .setProject('64709871a7fc1a6b44d8')
 // .setKey('YOUR_APPWRITE_API_KEY');

export default client;


