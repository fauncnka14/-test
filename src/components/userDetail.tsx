import React from 'react'
import { User } from '../../types'
import { Button } from './ui/button'
import Link from 'next/link'

interface UserDetailProps {
    user: User;
}

const UserDetail: React.FC<UserDetailProps> = ({ user }) => {
    return (
        <div className='bg-white shadow-md rounded-lg p-6 max-w-sm w-full'>
            <h2 className='text-2xl font-bold text-gray-800 mb-4'>Детали пользователя</h2>
            <p className='block  text-gray-800 font-medium p-2'><strong>Полное имя:</strong> {user.name}</p>
            <p className='block text-gray-800 font-medium p-2'><strong>Username:</strong> {user.username}</p>
            <p className='block text-gray-800 font-medium p-2'><strong>Email:</strong> {user.email}</p>
            <p className='block text-gray-800 font-medium p-2'><strong>Адрес:</strong> {user.address.street}, {user.address.city}</p>
            <p className='block text-gray-800 font-medium p-2'><strong>Телефон:</strong> {user.phone}</p>
            <p className='block text-gray-800 font-medium p-2'><strong>Вебсайт:</strong> {user.website}</p>
            <p className='block text-gray-800 font-medium p-2'><strong>Компания:</strong> {user.company.name}</p>
            <Link href={`/`} className='p-2'>
                <Button variant="secondary" className='bg-gray-800 hover:bg-gray-700 text-white font-bold py-2 px-6 rounded transition duration-200'>
                Return to main page
                </Button>
            </Link>
        </div>
    );
};

export default UserDetail;