exports.create = async (req, res) => {
    // Logic to create a comment
    res.status(201).json({ status: 'success', data: 'Comment created' });
  };
  
  exports.read = async (req, res) => {
    // Logic to read a comment
    res.status(200).json({ status: 'success', data: 'Comment read' });
  };
  
  exports.delete = async (req, res) => {
    // Logic to delete a comment
    res.status(204).json({ status: 'success', data: 'Comment deleted' });
  };
  
  exports.update = async (req, res) => {
    // Logic to update a comment
    res.status(200).json({ status: 'success', data: 'Comment updated' });
  };
  

git init
git remote add origin https://github.com/mehedi8552/modiule-7.git
git branch -M main
git add .
git commit -m 'My first feature'
git push -u origin main
