import model from "./model.js";
export const createAssignment = (assignment) => {
  return model.create(assignment);
}
export const findAssignmentById = (aid) => model.findById(aid);
export const findCourseAssignments = (cid) => model.find({course: cid});
export const updateAssignment = (assignmentId, assignment) =>  model.updateOne({ _id: assignmentId }, { $set: assignment });
export const deleteAssignment = (assignmentId) => model.deleteOne({ _id: assignmentId });
export const findCourseAssignmentsByPartialName = (cid, partialName) => {
  const regex = new RegExp(partialName, "i"); // 'i' makes it case-insensitive
  return model.find({ title: { $regex: regex }, course: cid });
};
