const educationController = {};

educationController.index = (req, res) => {
  res.json({
    message: 'Here is the education index route',
  });
}

// educationController.sendApiWeather = (req, res) => {
//   res.json({ 
//     message: `Weather for ${req.params.zip}`,
//     // Should have another property with weather for the requested zip
//   })
// }

module.exports = educationController;