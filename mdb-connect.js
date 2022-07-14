const { MongoClient } = require('mongodb');

const client = new MongoClient('mongodb://localhost:27017');

async function main() {
  await client.connect();
  console.log('Connected successfully to server');
  const db = client.db('myProject');
  const collection = db.collection('documents');

  return 'done.';}

main().then(console.log).catch(console.error).finally( () => client.close() );
