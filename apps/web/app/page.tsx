import {prisma} from '@repo/db/db'


export default async function Home() {
 const user = await prisma.user.findMany();
  return (
  
    <div>
      the user are:
      {JSON.stringify(user)}
    </div>
  );
}
