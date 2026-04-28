require('dotenv').config();
const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

// Middleware parse JSON
app.use(express.json());

// ===== Middleware Logger =====
app.use((req, res, next) => {
  const time = new Date().toISOString();
  console.log(`[${time}] ${req.method} ${req.url}`);
  next();
});

// ===== Middleware checkAge =====
function checkAge(req, res, next) {
  const age = parseInt(req.query.age);

  if (!age || age < 18) {
    return res.status(400).json({
      message: 'Tuổi phải >= 18'
    });
  }

  next();
}

// ===== GET /api/info =====
app.get('/api/info', checkAge, (req, res) => {
  const { name, age } = req.query;

  res.json({
    name,
    age,
    message: `Chào mừng ${name}!`
  });
});

// ===== POST /api/register =====
let currentId = 1;

app.post('/api/register', (req, res) => {
  const { name, age, email } = req.body;

  if (!name || !age || !email) {
    return res.status(400).json({
      message: 'Không được bỏ trống thông tin'
    });
  }

  const user = {
    id: currentId++,
    name,
    age,
    email
  };

  res.json({
    message: 'Đăng ký thành công',
    user
  });
});

// ===== Static =====
app.use(express.static('public'));

// ===== Start server =====
app.listen(PORT, () => {
  console.log(`Server chạy tại http://localhost:${PORT}`);
});