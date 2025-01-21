'use client'

import React, { useEffect } from 'react';
import SideNav from './_components/SideNav';  // Ensure correct import type
import DashboardHeader from './_components/DashboardHeader';
import { db } from '../../../../utils/dbConfig';
import { useUser } from '@clerk/nextjs';
import { eq } from 'drizzle-orm';
import { useRouter } from 'next/navigation';

function DashboardLayout({ children }) {
    const { user } = useUser();
    const router = useRouter();

    useEffect(() => {
        if (user) {
            checkUserBudget();
        }
    }, [user]);

    const checkUserBudget = async () => {
        const result = await db.select().from(Budget).where(eq(Budget.createdBy, user?.primaryEmailAddress?.emailAddress));
        if (result?.length === 0) {
            router.replace('/dashboard/budget');
        }
    };

    return (
        <div>
            <div className='fixed md:w-64 hidden md:block'>
                <SideNav />
            </div>
            <div className='md:ml-64'>
                <DashboardHeader />
                {children}
            </div>
        </div>
    );
}


export default layout;