import React from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router';
import cn from 'classnames';

const Navigation = () => {
    const location = useLocation().pathname;


    return (
        <nav className='flex justify-between items-center h-[50px] px-5 shadow-md bg-gray-500 text-white'>
            <h3 className='font-bold'>Github Search</h3>

            <span>
                <Link to='/' className={cn('mr-2', { ['text-gray-300 ']: location === '/favorites' })}>Home</Link>
                <Link to='/favorites' className={cn({ ['text-gray-300']: location === '/' })}>Favorites</Link>
            </span>
        </nav>
    );
};

export default Navigation;