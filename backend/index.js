const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const authRoutes = require('./routes/authRoutes');

const app = express();

app.use(cors());
app.use(express.json());

if (!process.env.MONGODB_URI || !process.env.PORT) {
  console.error('Error: MONGODB_URI o PORT no están definidos en el archivo .env');
  process.exit(1);
}

app.use('/api/auth', authRoutes);

//Conexión a MongoDB
mongoose.connect(process.env.MONGODB_URI)
  .then(() => {
    console.log('✅ Conectado a MongoDB');
    app.listen(process.env.PORT, () => {
      console.log(`🚀 Servidor corriendo en el puerto ${process.env.PORT}`);
    });
  })
  .catch(err => {
    console.error('❌ Error al conectar a MongoDB:', err.message);
    process.exit(1);
  });

process.on('unhandledRejection', err => {
  console.error('Unhandled rejection:', err);
  process.exit(1);
});
