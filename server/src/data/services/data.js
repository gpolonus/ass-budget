
const { JsonDB } = require('node-json-db');
const { Config } = require('node-json-db/dist/lib/JsonDBConfig')

// The first argument is the database filename. If no extension, '.json' is assumed and automatically added.
// The second argument is used to tell the DB to save after each push
// If you put false, you'll have to call the save() method.
// The third argument is to ask JsonDB to save the database in an human readable format. (default false)
// The last argument is the separator. By default it's slash (/)
const db = new JsonDB(new Config("myDataBase", true, false, '/'));

const fetchData = (path) => {
  return new Promise(resolve => {
    console.log(`fetched data at ${path}`)
    resolve(db.getData(`/${path}`));
  }).catch(error => {
    console.log(error)
    throw error
  })
}

const putData = (path, value) => {
  return new Promise(resolve => {
    console.log(`put value: ${JSON.stringify(value)} at ${path}`)
    db.push(`/${path}`, value, true)
    resolve()
  }).catch(error => {
    console.log(error)
    throw error
  })
}

const pushArray = (path, value) => {
  return putData(`${path}[]`, value)
}


module.exports = {
  fetchData,
  putData,
  pushArray
}
