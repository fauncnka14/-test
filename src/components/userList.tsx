import { User } from '../../types'
import React, { useEffect, useState } from 'react'
import { Card, CardFooter } from '@/components/ui/card'
import { Button } from './ui/button'
import Link from 'next/link'

const UserList: React.FC = () => {
    const [users, setUsers] = useState<User[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
      const fetchUsers = async () => {
        const response = await fetch('/api/users');
        const data = await response.json();
        setUsers(data);
        setLoading(false);
      };
  
      fetchUsers();
    }, []);
  
    if (loading) {
      return <div>Loading...</div>; 
    }

      return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {users.map(user => (
            <Card key={user.id} className="p-4 shadow-xl">
                <h2 className="text-lg font-bold">{user.name}</h2>
                <p>Email: {user.email}</p>
                <p>Company: {user.company.name}</p>
                <CardFooter>
                <Link href={`/user/${user.id}`}>
                  <Button className=" hover:bg-red-900 bg-gray-900 text-white font-bold py-2 px-4 rounded">
                    Learn More
                  </Button>
                </Link>
                </CardFooter>
            </Card>
          ))}
        </div>
      );
    };
    
    export default UserList;