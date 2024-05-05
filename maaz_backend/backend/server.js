import express from 'express';
import bodyParser from 'body-parser';
import { createAssistant,getAssistantbyId, updateAssistant, deleteAssistant } from "./controller/controller.js";
import DB from "./db/db.js";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

DB();

app.post('/assistant', createAssistant);
app.get('/assistant/:assistant_id', getAssistantbyId);
app.put('/assistant/:assistant_id', updateAssistant);
app.delete('/assistant/:assistant_id', deleteAssistant);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});




