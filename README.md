# API de Autenticación y Rutas Protegidas en Node.js

Este proyecto es una **API en Node.js / Express** que permite manejar usuarios, autenticación mediante token (JWT) y rutas protegidas.  
La funcionalidad principal incluye:

- Registro de usuarios  
- Inicio de sesión con generación de token  
- Acceso a rutas protegidas usando el token  
- Middleware para validar el token en solicitudes

## 🧩 Tecnologías usadas

- Node.js  
- Express  
- MongoDB (con Mongoose)  
- bcrypt (para hashing de contraseñas)  
- jsonwebtoken (para generar y verificar tokens JWT)  
- dotenv (para manejar variables de entorno)

---

## ⚙️ Instalación y configuración

1. Clona el repositorio  
   ```bash
   git clone https://github.com/UrbanoTrejoOrlando/Api_Node_Js.git
2. Navega al directrio del proyecto
   ```bash
   cd Api_Node_Js
3. Instala dependencias
   ```bash
    npm install
4. Inicia el servidor
   - En **modo desarrollo**
   ```bash
   npm run dev
  - En **modo producciòn**
   ```bash
   npm start
  ```
## Rutas de la api

| Método | Ruta               | Descripción                    |
|--------|--------------------|--------------------------------|
| GET    | `/users`           | Obtener todos los usuarios     |
| GET    | `/saludo-protegido`| Mostrar el mensaje oculto      |
| POST    | `/user`           | Crear un usuario nuevo         |
| POST   | `/login`           | Inicio de sesion               |



