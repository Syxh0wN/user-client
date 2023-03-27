import { app } from './app';
import { AppDataSource } from './data-source';

(async () => {
    try {
        await AppDataSource.initialize();
        console.log('DataBase connected!');
        app.listen(process.env.PORT, () => {
            console.log(`Servidor executando na porta ${process.env.PORT}`);
        });
    } catch (err) {
        console.error('Error during Data Source initialization', err);
    }
})();
