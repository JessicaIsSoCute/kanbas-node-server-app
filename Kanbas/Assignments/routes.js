import * as dao from "./dao.js";
export default function AssignmentRoutes(app) {
  const findAssignmentById = async (req, res) => {
    const assignment = await dao.findAssignmentById(req.params.assignmentId);
    res.json(assignment);
  };
  const createAssignment = async (req, res) => {
    const { cid } = req.params;
    const assignment = await dao.createAssignment({
      ...req.body,
      course: cid,
      _id: new Date().getTime().toString(),
    });
    res.json(assignment);
  };
  const deleteAssignment = async (req, res) => {
    const status = await dao.deleteAssignment(req.params.assignmentId);
    res.json(status);
  };
  const findCourseAssignments = async (req, res) => {
    const { cid } = req.params;
    const { title } = req.query;
    if (title) {
      const assignments = await dao.findCourseAssignmentsByPartialName(cid, title);
      res.json(assignments);
      return;
    }
    const assignments = await dao.findCourseAssignments(cid);
    res.json(assignments);
    return;
  };
  const updateAssignment = async (req, res) => {
    const { assignmentId } = req.params;
    const status = await dao.updateAssignment(assignmentId, req.body);
    res.json(status);
  };
  app.get("/api/assignments/:assignmentId", findAssignmentById);
  app.put("/api/assignments/:assignmentId", updateAssignment);
  app.delete("/api/assignments/:assignmentId", deleteAssignment);
  app.post("/api/courses/:cid/assignments", createAssignment);
  app.get("/api/courses/:cid/assignments", findCourseAssignments);
}
