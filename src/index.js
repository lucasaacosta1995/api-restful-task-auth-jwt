require('dotenv').config();
const express = require('express');
const jwt = require('jsonwebtoken');
const taskController = require('./controllers/taskController');
const auth = require('./middlewares/auth');

const app = express();
app.use(express.json());

app.post('/login', (req, res) => {
    const user = { id: 1, username: 'user' }; // Ejemplo de usuario
    const token = jwt.sign(user, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.json({ token });
});

app.get('/tasks', auth, taskController.getTasks);
app.post('/tasks', auth, taskController.createTask);

app.listen(3000, () => console.log('API de Tareas corriendo en http://localhost:3000'));
