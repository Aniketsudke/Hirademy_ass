import {
  createAssistant,
  getAssistant,
  updateAssistant,
  deleteAssistant,
} from "../controllers/assistantController.js";
import express from "express";
const router = express.Router();

router.post("/assistant", createAssistant);
router.get("/assistant/:id", getAssistant);
router.put("/assistant/:id", updateAssistant);
router.delete("/assistant/:id", deleteAssistant);

export default router;
