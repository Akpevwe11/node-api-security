import mongoose from "mongoose"; 
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken"; 

import { userSchema } from "../models/userModels.js";

const User = mongoose.model("User", userSchema);

export const register = (req, res) => {
    const { firstName, lastName, email, plainPassword } = req.body; 
    
    // Generate a salt  
    
    console.log(req.body);
    const newUser = new User ({
        firstName: req.body.firstName,
        lastName: req.body.lastName, 
        email: req.body.email,
        hashPassword: req.body.hashPassword
    }); 

    console.log(newUser); 

    newUser.save().then(user => res.status(201).send(user))
    .catch(err => res.status(500).send(err)); 
    
}


export const login = (req, res) => {

    const { email, password } = req.body;
}


