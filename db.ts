import { DataTypes, Database, Model } from 'https://deno.land/x/denodb/mod.ts';
import { config } from 'https://deno.land/x/dotenv/mod.ts';

const env = config()

export const db = new Database('postgres', {
    host: 'localhost',
    username: 'postgres',
    password: 'devIntelinair1989',
    database: 'withoutbug',
});



