import { DataTypes, Database, Model } from 'https://deno.land/x/denodb/mod.ts';
import { db } from '../db.ts'

import { Role } from './Role.ts';

export class User extends Model {
    static table = 'user';
    static timestamps = true;

    static fields = {
        id: {
            primaryKey: true,
            autoIncrement: true,
        },
        name: DataTypes.STRING,
        password: DataTypes.STRING,
        email: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false,
            length: 50,
        },
    };
    static roles() {
        return this.hasMany(Role);
    }

}
//
// db.link([User])
// await db.sync({drop: true});
//


