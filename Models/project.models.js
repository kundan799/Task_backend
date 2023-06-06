const mongoose=require("mongoose");
const projectSchema = new mongoose.Schema({
	Name: { type: String, required: true },
	startDate: { type: String, required: true },
	enddate: { type: String, required: true },
    division: { type: String, required: true },
    category: { type: String, required: true },
    type: { type: String, required: true },
    reason: { type: String, required: true },
    prority: { type: String, required: true },
    department: { type: String, required: true },
    location: { type: String, required: true },
    status: { type: String, required: true },
});

const Project = mongoose.model("project", projectSchema);
module.exports = Project ;