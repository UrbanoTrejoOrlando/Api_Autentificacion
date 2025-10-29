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

## Rutas disponibles
### 🔸 Crear un nuevo usuario (POST `/user`)

- **URL:** `http://localhost:3000/auth/user`
- **Método:** POST
- **Body (JSON):**

```json
{
  "username":"orlando",
  "password":"12345"
}
```
- **Respuesta esperada: 201 Created**
```json
{
  "username": "orlando",
  "password": "12345",
  "_id": "6902533b27f70134bdca5fc8",
  "__v": 0
}
```

### 🔸 Obtener todos los usuarios (GET `/users`)
- **URL:** `http://localhost:3000/auth/users`
- **Método:** GET
- **Respuesta esperada: 200 OK**
```json
[
  {
    "_id": "6902533b27f70134bdca5fc8",
    "username": "orlando",
    "password": "12345",
    "__v": 0
  }
]
```
### 🔸 Inicio de sesion (POST `/login`)

- **URL:** `http://localhost:3000/auth/login`
- **Método:** POST
- **Body (JSON):**

```json
{
  "username":"orlando",
  "password":"12345"
}
```
- **Respuesta esperada: 201 Created**
```json
{
  "token": "token-falso-6902533b27f70134bdca5fc8"
}
```

### 🔸 Acceder a la ruta protegida (solo con el token valido) (GET `/saludo-protegido`)
- **URL:** `http://localhost:3000/greet/saludo-protegido`
- **Método:** GET
- **Headers:** Authorization: Bearer <token_obtenido_en_login>
- **Respuesta esperada: 200 OK**
```json
{
  "message": "Saludo protegido"
}
```
