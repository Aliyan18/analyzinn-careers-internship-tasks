const Pet = require('../model/schema'); // Import your Pet schema

const editPet = async (req, res) => {
  try {
    const petId = req.params.id; // Retrieve the custom petId from the route parameter
    const updateData = req.body; // Get the updated pet data from the request body

    console.log('Update Data:', updateData); // Log the request body for debugging

    // Find the pet by the custom `petId` attribute and update it
    const updatedPet = await Pet.findOneAndUpdate({ id: petId }, updateData, { 
      new: true, 
      runValidators: true // Ensure validation is applied
    });

    // If no pet is found, return a 404 error
    if (!updatedPet) {
      return res.status(404).json({ message: 'Pet not found' });
    }

    // If the update is successful, return the updated pet data
    res.status(200).json({ message: 'Pet updated successfully', data: updatedPet });

  } catch (error) {
    // Log the error and return a 500 response
    console.error('Error updating pet:', error);
    res.status(500).json({ message: 'Error updating pet', error });
  }
};

module.exports = editPet;
