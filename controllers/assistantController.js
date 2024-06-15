import Assistant from "../models/assistantModel.js";

export const createAssistant = async (req, res) => {
  const { name, mobile, email, salary, city, country, department, role } =
    req.body;

  if (
    !name ||
    !mobile ||
    !email ||
    salary === undefined ||
    !city ||
    !country ||
    !department ||
    !role
  ) {
    return res.status(400).json({ error: "All fields are required" });
  }

  try {
    const id = await Assistant.create({
      name,
      mobile,
      email,
      salary,
      city,
      country,
      department,
      role,
    });
    res.status(201).json({ id });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const getAssistant = async (req, res) => {
  try {
    const assistant = await Assistant.findById(req.params.id);
    if (assistant) {
      res.json(assistant);
    } else {
      res.status(404).json({ error: "Assistant not found" });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const updateAssistant = async (req, res) => {
  const { name, mobile, email, salary, city, country, department, role } =
    req.body;

  if (
    !name ||
    !mobile ||
    !email ||
    salary === undefined ||
    !city ||
    !country ||
    !department ||
    !role
  ) {
    return res.status(400).json({ error: "All fields are required" });
  }

  try {
    await Assistant.update(req.params.id, {
      name,
      mobile,
      email,
      salary,
      city,
      country,
      department,
      role,
    });
    res.json({ message: "Assistant updated successfully" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const deleteAssistant = async (req, res) => {
  try {
    await Assistant.delete(req.params.id);
    res.json({ message: "Assistant deleted successfully" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
