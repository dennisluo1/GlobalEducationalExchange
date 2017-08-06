const educationController = {};

educationController.index = (req, res) => {
  res.json({
    message: 'Here is the education index route',
  });
}


module.exports = educationController;