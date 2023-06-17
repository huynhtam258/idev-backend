import { Application } from 'express';

import config from './src/configs/config.mongodb';
import server from './src/app'

const app: Application = server.build();
const port = config.app.port
app.listen(port, () => {
    console.log(`Server is running at port ${port}`);
})