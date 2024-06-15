import connectDB from "../db/index.js";

const Assistant = {
  create: async (assistantData) => {
    const [result] = await connectDB.execute(
      "INSERT INTO assistants (name, mobile, email, salary, city, country, department, role) VALUES (?, ?, ?, ?, ?, ?, ?, ?)",
      [
        assistantData.name,
        assistantData.mobile,
        assistantData.email,
        assistantData.salary,
        assistantData.city,
        assistantData.country,
        assistantData.department,
        assistantData.role,
      ]
    );
    return result.insertId;
  },

  findById: async (id) => {
    const [rows] = await connectDB.execute(
      "SELECT * FROM assistants WHERE id = ?",
      [id]
    );
    return rows[0];
  },

  update: async (id, assistantData) => {
    await connectDB.execute(
      "UPDATE assistants SET name = ?, mobile = ?, email = ?, salary = ?, city = ?, country = ?, department = ?, role = ? WHERE id = ?",
      [
        assistantData.name,
        assistantData.mobile,
        assistantData.email,
        assistantData.salary,
        assistantData.city,
        assistantData.country,
        assistantData.department,
        assistantData.role,
        id,
      ]
    );
  },

  delete: async (id) => {
    await connectDB.execute("DELETE FROM assistants WHERE id = ?", [id]);
  },
};

export default Assistant;
