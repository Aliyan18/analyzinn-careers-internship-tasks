const Pet = require('../model/schema');

const addPet = async (req, res) => {
    console.log('here1');

    try {

        const {id, name, breed, type, price } = req.body; 
console.log(id);
        if (!name || !breed || !type || !price) {
            return res.status(400).json({ message: 'All fields are required' });
        }
        console.log('here2');

        const pet = new Pet({ id,name, breed, type, price });
        const result = await pet.save();
        console.log('here3');

        res.status(201).json({ message: 'Pet added successfully', pet: result });
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: 'Error adding pet', error: err });
    }
};


module.exports =  addPet ;
