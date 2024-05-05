import Assistant from "../model/model";


exports.createAssistant = async (req, res) => {
    try {
        const assistant = new Assistant(req.body);
        const savedAssistant = await assistant.save();
        res.status(201).json(savedAssistant);
    } catch (error) {
        handleErrorResponse(res, error);
    }
};

// Get an assistant by ID
exports.getAssistantbyId = async (req, res) => {
    try {
        const assistant = await Assistant.findById(req.params.assistant_id);
        if (!assistant) {
            return res.status(404).json({ message: "Assistant not found" });
        }
        res.json(assistant);
    } catch (error) {
        handleErrorResponse(res, error);
    }
};

// Update an assistant
exports.updateAssistant = async (req, res) => {
    try {
        const updatedAssistant = await Assistant.findByIdAndUpdate(req.params.assistant_id, req.body, { new: true });
        if (!updatedAssistant) {
            return res.status(404).json({ message: "Assistant not found" });
        }
        res.json(updatedAssistant);
    } catch (error) {
        handleErrorResponse(res, error);
    }
};

// Delete an assistant
exports.deleteAssistant = async (req, res) => {
    try {
        const deletedAssistant = await Assistant.findByIdAndDelete(req.params.assistant_id);
        if (!deletedAssistant) {
            return res.status(404).json({ message: "Assistant not found" });
        }
        res.json({ message: "Assistant deleted successfully" });
    } catch (error) {
        handleErrorResponse(res, error);
    }
};

// Helper function to handle error responses
function handleErrorResponse(res, error) {
    console.error("Error:", error);
    res.status(500).json({ message: "Internal server error" });
}
