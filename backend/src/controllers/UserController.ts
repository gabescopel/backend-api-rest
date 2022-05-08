import { Request, Response } from 'express';
import EmailService from '../service/EmailService';

const users = [
    { name: 'Gabriel', email: 'gabriel.scopel98@gmail.com' }
];

export default {
    async index(req: Request, res: Response) {
        return res.json(users)
    },

    async create(req: Request, res: Response) {
        const emailService = new EmailService();

        emailService.sendMail({
            to: { 
                name: 'Gabriel Scopel', 
                email: 'gabriel.scopel98@gmail.com'
            },
            message: { 
                subject: 'Welcome to sistem', 
                body: 'Welcome!'
            }
        })

        return res.send();
    }
}