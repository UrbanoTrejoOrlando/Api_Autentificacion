const validarToken = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (authHeader) {
    // Elimina el prefijo "Bearer " si existe
    const token = authHeader.startsWith("Bearer ")
      ? authHeader.slice(7)
      : authHeader;

    if (token.startsWith("token-falso-")) {
      next();
    } else {
      res.status(403).json({ message: "Acceso denegado: token inválido" });
    }
  } else {
    res.status(403).json({ message: "Acceso denegado: falta token de autorización" });
  }
};

module.exports = { validarToken };
