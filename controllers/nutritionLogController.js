const NutritionLog = require('../models/NutritionLog');

exports.createNutritionLog = async (req, res) => {
  try {
    const nutritionLog = await NutritionLog.create(req.body);
    res.status(201).json(nutritionLog);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
exports.getNutritionLogs = async (req, res) => {
  try {
    const nutritionLogs = await NutritionLog.find();
    res.json(nutritionLogs);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
exports.getNutritionLog = async (req, res) => {
  try {
    const nutritionLog = await NutritionLog.findById(req.params.id);
    res.json(nutritionLog);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
exports.updateNutritionLog = async (req, res) => {
  try {
    const nutritionLog = await NutritionLog.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(nutritionLog);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
exports.deleteNutritionLog = async (req, res) => {
  try {
    await NutritionLog.findByIdAndDelete(req.params.id);
    res.json({ message: 'NutritionLog deleted' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
}; 