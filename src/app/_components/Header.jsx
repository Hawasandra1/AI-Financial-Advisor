'use client'

import React from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'  // Assuming Button is a custom component
import { useUser, UserButton } from '@clerk/nextjs'
import Link from 'next/link'  // Import Link from next/link

function Header() {
    const { user, isSigned } = useUser()

    return (
        <div className='p-5 flex justify-between items-center border shadow-sm'>
            <div className='flex flex-row items-center'> 
                <Image src="/fina.png" alt="logo" width={40} height={25} /> 
                <span className="text-blue-800 font-bold text-xl ml-2">FinanceTracker</span>
            </div>
            
            {/* Conditionally render UserButton or sign-in buttons */}
            {isSigned ? (
                <UserButton />
            ) : (
                <div className='flex gap-3 items-center'>
                    <Link href="/dashboard">  {/* Wrap Button with Link for navigation */}
                        <Button variant="outline" className="rounded-full">Dashboard</Button>
                    </Link>

                    <Link href="/dashboard">
                        <Button 
                            className="rounded-full" 
                            style={{
                                backgroundColor: '#4845d2', // Blue-500 background color
                                color: '#FFFFFF',           // White text color
                            }}
                        >
                            Get Started
                        </Button>
                    </Link>
                </div>
            )}
        </div>
    );
}

export default Header;
