const pool = require("../config/database")
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const health = (req, res) => {
    res.json({
        status: "ok",
        service: "auth-service",
    });
};

const register = async (req, res) => {
  try {

    const { name, email, password } = req.body;

    const role = "peserta";

    const hashedPassword = await bcrypt.hash(password, 10);

    const [result] = await pool.execute(
      "INSERT INTO users (name, email, password, role) VALUES (?, ?, ?, ?)",
      [
        name,
        email,
        hashedPassword,
        role
      ]
    );

    res.status(201).json({
      message: "User created successfully",
      userId: result.insertId,
      role
    });

  } catch(error) {

    console.error(error);

    res.status(500).json({
      message: error.message
    });

  }
};

const login = async (req, res) => {
    const {email, password} = req.body;
    if (!email || !password){
        return res.status(400).json({
            message: "Email and password are required",
        });
    }

    const [users] =  await pool.execute(
        'SELECT * from users WHERE email  = ?',
        [email]
    );

    if (users.length == 0){
        return res.status(401).json({
            message: "Invalid email or password",
        });
    };
    
    const user = users[0];

    const isPasswordValid = await bcrypt.compare(
        password,
        user.password
    );

    if (!isPasswordValid){
        return res.status(401).json({
            message: "Invalid email or password",
        });
    }

    const token = jwt.sign({
        id: user.id,
        email: user.email,
        role: user.role
    },
        process.env.JWT_SECRET,
        {
            expiresIn: "1h"
        }
    );
    return res.status(200).json({
        message: "Login Successful",
        token: token,
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role,
    });
}

module.exports = {
    health,
    register,
    login
};