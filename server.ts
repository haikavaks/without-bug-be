import { serve } from 'https://deno.land/std@0.57.0/http/server.ts';
import { parse } from 'https://deno.land/std/flags/mod.ts';
// import { UserRole} from './migrations/User_Role.ts';
// import { User } from './migrations/User.ts';

console.log('here')
// const x = await User.where('id', '1').roles();

console.log('here')
const { args } = Deno;
const DEFAULT_PORT = 8000;
const argPort = parse(args).port;

const s = serve({ port: argPort ? Number(argPort) : DEFAULT_PORT });
console.log('here')
for await (const req of s) {
    req.respond({ body: "Hello World !\n" });
}





