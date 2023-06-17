import { config } from 'dotenv';
config()
const dev = {
    app: {
        port: process.env.DEV_APP_PORT
    },
    db: {
        host: process.env.DEV_DB_HOST,
        port: process.env.DEV_DB_PORT,
        name: process.env.DEV_DB_NAME
    }
}

const pro = {
    app: {
        port: process.env.PROD_APP_PORT
    },
    db: {
        host: process.env.PROD_DB_HOST,
        port: process.env.PROD_DB_PORT,
        name: process.env.PROD_DB_NAME
    }
}

const configEnv = { dev, pro }

const env = process.env.NODE_ENV || 'dev';
export default env === 'dev' ? configEnv.dev : configEnv.pro;