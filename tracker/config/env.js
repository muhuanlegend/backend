import { config } from "dotenv";

//setting up
config({ path: `.env.${process.env.NODE_ENV || 'development'}.local` })

export const { PORT,
    NODE_ENV,
    DB_URI,
    JWT_SECRET,
    JWT_EXPIRES_IN,
    ARC_JET_API_KEY
    , ARCJET_ENV, QSTASH_URL
    , QSTASH_TOKEN
    , QSTASH_CURRENT_SIGNING_KEY,
    QSTASH_NEXT_SIGNING_KEY,
    EMAIL_PASSWORD } = process.env