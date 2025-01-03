const express = require('express');
const mongoose = require('mongoose');
const User = require('./models/User'); 
const cors = require('cors'); 
const app = express();

app.use(express.json());


// CORS
app.use(cors({
  origin: 'http://localhost:3000', // доступ с фронтенда
  methods: ['GET', 'POST'], 
  allowedHeaders: ['Content-Type'], 
}));


app.post('/api/auth/register', async (req, res) => {
  console.log('Request body:', req.body);

  const { username, password } = req.body;
  if (!username || !password) {
      return res.status(400).json({ error: 'Все поля обязательны для заполнения' });
  }

  try {
      const existingUser = await User.findOne({ username });
      console.log('Existing user:', existingUser); // Проверка существующего пользователя

      if (existingUser) {
          return res.status(400).json({ error: 'Пользователь с таким именем уже существует' });
      }

      const user = new User({ username, password });
      await user.save();

      console.log('User saved:', user); // Успешное сохранение пользователя
      res.json({ sms: 'Регистрация прошла успешно' });
  } catch (error) {
      console.error('Error saving user:', error); // Ошибки при сохранении
      res.status(500).json({ error: 'Ошибка при сохранении пользователя' });
  }
});



mongoose.connect('mongodb://127.0.0.1:27017/myapp')
  .then(() => console.log('Mongoose connected'))
  .catch((err) => {
    console.log('Error server not connected:', err);
    process.exit(1);  
  });
  app.post('/api/auth/login', async (req, res) => {
    const { username, password } = req.body;
  
    try {
      
      const user = await User.findOne({ username });
      if (!user) {
        return res.status(404).json({ error: 'Пользователь не найден' });
      }
  
   
      if (user.password !== password) {
        return res.status(400).json({ error: 'Неверный пароль' });
      }
  
      
      res.json({ message: 'Вход успешен', token: 'fake-jwt-token' });
    } catch (error) {
      res.status(500).json({ error: 'Ошибка на сервере' });
    }
  });
  
const PORT = 5000;
app.listen(PORT, () => console.log(`Server started on port: ${PORT}`));
 




// app.get('/api/test', async (req, res) => {
//   try {
//       const users = await User.find();
//       res.json({ message: 'Connection successful!', users });
//   } catch (error) {
//       res.status(500).json({ error: 'Connection to database failed!' });
//   }
// });