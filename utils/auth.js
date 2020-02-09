import jwt from "jsonwebtoken";

function decodeToken(token) {
  const decoded = jwt.verify(token, process.env.JWT_SECRET);
  return decoded;
}

export default decodeToken;
