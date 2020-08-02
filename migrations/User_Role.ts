import { Relationships } from 'https://deno.land/x/denodb/mod.ts';
import * as bcrypt from "https://deno.land/x/bcrypt/mod.ts";
import { Role } from './Role.ts';
import { User } from './User.ts';
import { db } from '../db.ts';
// Generate a pivot model for Role and User
export const UserRole = Relationships.manyToMany(Role, User);
db.link([UserRole, Role, User]);

const password = await bcrypt.hash('hi');
await User.create({
    name: 'admin',
    password,
    email: 'admin@admin.com'
});


await Role.create({
    name: 'superAdmin',
    description: ''
});

await UserRole.create([
    { userId: '1', roleId: '1' },
]);


console.log('here');


