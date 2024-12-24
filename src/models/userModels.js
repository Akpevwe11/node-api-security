import mongoose from "mongoose";
import bcrypt from "bcrypt";


const Schema = mongoose.Schema; 

export const userSchema = new Schema({
    firstName: {
        type: String, 
        required: "Enter a first name"
    },

    lastName: {
        type: String, 
        required: "Enter a last name"
    }, 

    email: {
        type: String, 
        required: "Enter an email"
    }, 
    hashPassword: {
        type: String, 
        required: "Enter a password"
    },

    created_date: {
        type: Date, 
        default: Date.now 
    }

});

userSchema.methods.comparePassword = function(password, hashPassword) {
    return bcrypt.compareSync(password, hashPassword);
}