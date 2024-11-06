const tasks = [];

function getTasks(req, res) {
    res.json(tasks);
}

function createTask(req, res) {
    const task = { id: tasks.length + 1, ...req.body };
    tasks.push(task);
    res.status(201).json(task);
}

module.exports = { getTasks, createTask };
