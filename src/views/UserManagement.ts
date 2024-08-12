import promptSync from 'prompt-sync';
import UserController from "../controllers/UserController"

export default class UserManagement {
    
    private userController:UserController;
    private prompt = promptSync();

    constructor(userController:UserController) {
        this.userController = userController;
    }

    public identification() {
        let name:string;
        let password:string;
        let question = this.prompt("Would you like to log in or register?\n1 - Log In\n2 - Register");

        switch (question) {
            case "1":
                name = this.prompt("Name:");
                password = this.prompt("Password:");
                this.userController.verifyAuth(name, password);
                break;

            case "2":
                name = this.prompt("Name:");
                password = this.prompt("Password:");
                this.userController.create(name, password);
        
            default:
                break;
        }
    }
}