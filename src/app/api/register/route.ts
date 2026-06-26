// // app/api/register/route.ts
// import { NextResponse } from 'next/server';
// import bcrypt from 'bcryptjs';
// import prisma from '@/lib/prisma'; // your Prisma client

// export async function POST(req: Request) {
//   try {
//     const { name, email, password } = await req.json();

//     // Validate input
//     if (!email || !password || !name) {
//       return NextResponse.json(
//         { message: 'Missing fields' },
//         { status: 400 }
//       );
//     }

//     // Check if user exists
//     const existingUser = await prisma.user.findUnique({
//       where: { email },
//     });
//     if (existingUser) {
//       return NextResponse.json(
//         { message: 'User already exists' },
//         { status: 409 }
//       );
//     }

//     // Hash password
//     const hashedPassword = await bcrypt.hash(password, 12);

//     // Create user
//     const user = await prisma.user.create({
//       data: {
//         name,
//         email,
//         password: hashedPassword,
//       },
//     });

//     return NextResponse.json(
//       { message: 'User created', user: { id: user.id, email: user.email } },
//       { status: 201 }
//     );
//   } catch (error) {
//     console.error(error);
//     return NextResponse.json(
//       { message: 'Internal server error' },
//       { status: 500 }
//     );
//   }
// }