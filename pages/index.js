import { useSession } from 'next-auth/react';
import Router from 'next/router';
import { redirect } from 'next/navigation';
import { useEffect } from 'react';
import Restricted from '../component/page/restricted';

export default function Dashboard() {
    // const router = useRouter();
    const { data: session, status } = useSession();
    console.log(session);

    return (
        <h1>Dashboard</h1>
    );
}
