import Assistant from "../model/model.js";

let createAssistant = async (req, res) => {
    try {
        const assistant = new Assistant(req.body);
        const savedAssistant = await assistant.save();
        res.status(201).json(savedAssistant);
    } catch (error) {
        handleErrorResponse(res, error);
    }
};


let getAssistantbyId = async (req, res) => {
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


let updateAssistant = async (req, res) => {
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


let deleteAssistant = async (req, res) => {
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

export { createAssistant,getAssistantbyId, updateAssistant, deleteAssistant };