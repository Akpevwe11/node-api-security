import {login, register} from "../controllers/userController.js";

const routes = (app) => {
    // registration route 

    app.route('/auth/register').post(register); 
}


export default routes; 
