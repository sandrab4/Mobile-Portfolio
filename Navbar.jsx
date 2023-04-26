    import React from 'react';
    import Link from 'next/link'

    const Navbar = () => {
        return (
            <div className='fixed w-full h-20 shadow-xl z-[100]'>
                <div className='flex justify-between items-center w-full h-full px-2 2xl:px-16'>
                    <div>
                        <ul>
                            <Link href='/'>
                                <li>Home</li>
                            </Link>
                        </ul>
                    </div>
                </div>
            </div>
        );
    };
    
    export default Navbar;