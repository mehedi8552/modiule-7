exports.create = async (req, res) => {
    // Logic to create a product
    res.status(201).json({ status: 'success', data: 'Product created' });
  };
  
  exports.read = async (req, res) => {
    // Logic to read a product
    res.status(200).json({ status: 'success', data: 'Product read' });
  };
  
  exports.delete = async (req, res) => {
    // Logic to delete a product
    res.status(204).json({ status: 'success', data: 'Product deleted' });
  };
  
  exports.update = async (req, res) => {
    // Logic to update a product
    res.status(200).json({ status: 'success', data: 'Product updated' });
  };
  