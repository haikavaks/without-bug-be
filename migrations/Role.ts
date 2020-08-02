import { DataTypes, Database, Model } from 'https://deno.land/x/denodb/mod.ts';
import { db } from '../db.ts'

export class Role extends Model {
    static table = 'role';
    static timestamps = true;

    static fields = {
        id: {
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING,
            unique: true,
        },
        description: DataTypes.STRING,
    };

}

db.link([Role])
await db.sync({drop: true});


