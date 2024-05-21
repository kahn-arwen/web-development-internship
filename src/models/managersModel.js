const connection = require('./connection');


const getAll = async () => {
const [products] = await connection.execute(`
SELECT managers.name AS manager, offices.name as office_name
FROM CompanieDatabase.managers AS managers
JOIN CompanieDatabase.offices AS offices
ON managers.manager_id id offices.manager_id
ORDER BY managers.name;
`);
return products;
};
const createManager = async (manager_id,name, age) => {
const [{ insertId}] = await connection
.execute('INSERT INTO StoreManager.managers (manager id, name, age) VALUES (?, ?, ?);', [manager_id, name, age]);
return insertId;
};
module.exports = {
getAll,
createManager,
};