const PROD = 'production';
const DEV = 'development';
const TEST = 'test';

const env = process.env.NODE_ENV || DEV;

const TEST_ENV_DB_URI = 'mongodb://localhost:27017/KanbanApp-Test';
const DEV_ENV_DB_URI = 'mongodb://localhost:27017/KanbanApp';
const PROD_ENV_DB_URI = 'mongodb://localhost:27017/KanbanApp';

function selectDatabaseURI() {
  if (env === TEST) {
    return TEST_ENV_DB_URI;
  } else if (env === DEV) {
    return DEV_ENV_DB_URI;
  } else if (env === PROD) {
    return PROD_ENV_DB_URI;
  } else {
    console.log('NODE_ENV is undefined');
  }
}

module.exports = {
  selectDatabaseURI
}
