import React from 'react';
import { useAppSelector } from '../hooks/redux';

const FavoritesPage = () => {
    const { favorites } = useAppSelector(state => state.github);

    if (favorites.length === 0) return <p className='text-center pt-10'>No items.</p>;

    return (
        <div className='flex justify-center pt-10 mx-auto h-[calc(100vh-50px)] w-screen'>
            <ul className='list-none max-h-[calc(100vh-160px)] w-[500px] overflow-y-scroll scrollbar scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-100 '>
                {favorites.map(f => (
                    <li key={f} className="text-center mb-4 last:mb-0 ">
                        <a href={f} target="_blank" rel="noreferrer" className=' border-b-2 hover:border-blue-100 hover:text-blue-400'>{f}</a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default FavoritesPage;