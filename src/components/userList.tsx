import { User } from '../../types'
import React, { useEffect, useState } from 'react'
import { Card } from '@/components/ui/card'

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
            <Card key={user.id} className="p-4">
              <h2 className="text-lg font-bold">{user.name}</h2>
              <p>Email: {user.email}</p>
              <p>Phone: {user.phone}</p>
            </Card>
          ))}
        </div>
      );
    };
    
    export default UserList;