import { Application } from 'express';

import config from './configs/config.mongodb';
import server from './app'

const app: Application = server.build();
const port = config.app.port
app.listen(port, () => {
    console.log(`Server is running at port ${port}`);
})