import React from 'react';
import UserList from '@/components/userList';

const Home: React.FC = () => {
    return (
            <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4 justify-self-center">Список пользователей</h1>
            <UserList />
            </div>
    );
};

export default Home;