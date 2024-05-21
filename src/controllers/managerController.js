const managersServices = require('../services/managersServices');
const getAll= async (req, res) =>{
const managers = await managersServices.getAll();
res.status(200).json (managers);
};
const createManager = async (req, res) => {
const { manager_id, name, age } = req.body;
if (!name) return res.status(400).json({ message: '"name" is required' });

if (!manager_id) return res.status(400).json({ message: '"manager_id" is required' });
if (!age) return res.status (400).json({ message: '"age" is required' });

const manager = await managersServices.createProduct (name);


if (!manager.succes) {
return res.status(422).json({ message: '"name" length must be at least 5 characters long' });
}

res.status(201).json({id: manager_id, name });
};

module.exports = {
getAll,
createManager,
};