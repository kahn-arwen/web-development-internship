const ManagersModel = require('../models/managersModel');

const isValid = (name) => {
if (name.length < 5) return false;
return true;
};
const getAll = async () => {
const managers = await ManagersModel.getAll();
return managers;
};

const createManager = async (manager_id, name, age) => {
const validManager = isValid (name);

if (!validManager) return { succes: false };
const manager = await ManagersModel.createManager (manager_id, name,
age);
return { succes: true, manager };
};

module.exports = {
getAll,
createManager,
};