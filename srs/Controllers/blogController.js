node exports.create = async (req, res) => {
    // Logic to create a blog
    res.status(201).json({ status: 'success', data: 'Blog created' });
  };
  
  exports.read = async (req, res) => {
    // Logic to read a blog
    res.status(200).json({ status: 'success', data: 'Blog read' });
  };
  
  exports.delete = async (req, res) => {
    // Logic to delete a blog
    res.status(204).json({ status: 'success', data: 'Blog deleted' });
  };
  
  exports.update = async (req, res) => {
    // Logic to update a blog
    res.status(200).json({ status: 'success', data: 'Blog updated' });
  };
  