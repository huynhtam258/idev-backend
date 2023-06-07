import { Application } from 'express';
import server from './src/app'

const app: Application = server.build();

app.listen(3066, () => {
    console.log(`Server is running at port ${3066}`);
})