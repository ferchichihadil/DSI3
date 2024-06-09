const nodemailer = require('nodemailer');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const db = require("../config/db")


exports.UserRegister =
    async (req, res) => {
        const { nom, prenom, email, datenais, telephone, dateemboche, role, motdepasse, confirmMotdepasse } = req.body;

        // Basic validation
        if (!nom || !prenom || !email || !datenais || !telephone || !dateemboche || !role || !motdepasse || !confirmMotdepasse) {
            return res.status(400).send('All fields are required');
        }

        if (motdepasse !== confirmMotdepasse) {
            return res.status(400).send('Passwords do not match');
        }

        // Check if user already exists
        await db.query('SELECT email FROM utilisateurs WHERE email = ?', [email], (err, result) => {
            if (err) throw err;

            if (result.length > 0) {
                return res.status(400).json({"err":"User already exists"});
            }

            // Hash the password
            bcrypt.hash(motdepasse, 10, (err, hash) => {
                if (err) throw err;

                // Insert new user
                const utilisateur = {
                    nom,
                    prenom,
                    email,
                    datenais,
                    telephone,
                    dateemboche,
                    role,
                    motdepasse: hash
                };

                db.query('INSERT INTO utilisateurs SET ?', utilisateur, (err, result) => {
                    if (err) throw err;
                    res.status(201).json({msg:'User registered'});
                });
            });
        });
    }

exports.UserLogin = (req, res) => {
    const { email, motdepasse } = req.body;

    if (!email || !motdepasse) {
        return res.status(400).send('Email and password are required');
    }

    db.query('SELECT * FROM utilisateurs WHERE email = ?', [email], (err, result) => {
        if (err) throw err;

        if (result.length === 0) {
            return res.status(400).json({"err":'User not found'});
        }

        const utilisateur = result[0];

        bcrypt.compare(motdepasse, utilisateur.motdepasse, (err, isMatch) => {
            if (err) throw err;

            if (isMatch) {
                res.status(200).json({msg:'Login successful'});
            } else {
                res.status(400).json({msg:'Invalid password'});
            }
        });
    });
}

exports.ForgetPassword = (req, res) => {
    const { email } = req.body;

    if (!email) {
        return res.status(400).send('Email is required');
    }

    db.query('SELECT * FROM utilisateurs WHERE email = ?', [email], (err, result) => {
        if (err) throw err;

        if (result.length === 0) {
            return res.status(400).json('No user found with this email');
        }

        const utilisateur = result[0];
        const token = Math.random().toString(36).substr(2); // Generate a random token
        const resetPasswordLink = `http://localhost:4200/reset-password?token=${token}`;

        // Store token in the database with an expiry time
        const expiry = new Date();
        expiry.setHours(expiry.getHours() + 1); // Token expires in 1 hour

        db.query('UPDATE utilisateurs SET reset_password_token = ?, reset_password_expires = ? WHERE email = ?', [token, expiry, email], (err, result) => {
            if (err) throw err;

            // Send email with the reset password link
            const transporter = nodemailer.createTransport({
                service: 'gmail',
                auth: {
                    user: 'your_email@gmail.com',
                    pass: 'your_email_password'
                }
            });

            const mailOptions = {
                from: 'your_email@gmail.com',
                to: email,
                subject: 'Password Reset',
                text: `Click the following link to reset your password: ${resetPasswordLink}`
            };

            transporter.sendMail(mailOptions, (error, info) => {
                if (error) {
                    return res.status(500).json({msg :'Error sending email'});
                } else {
                    return res.status(200).json({msg :'Password reset link sent to your email'});
                }
            });
        });
    });
}
