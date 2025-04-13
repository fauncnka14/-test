import { GetStaticProps, GetStaticPaths } from 'next'
import { User } from '../../../types'
import UserDetail from '../../components/userDetail'


interface UserPageProps {
    user: User;
}

const UserPage: React.FC<UserPageProps> = ({ user }) => {
    return (
        <div className='bg-gray-100 flex flex-col items-center justify-center min-h-screen'>
            <UserDetail user={user} />
        </div>
    );
};

export const getStaticPaths: GetStaticPaths = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const users: User[] = await res.json();
  
    const paths = users.map(user => ({
      params: { id: user.id.toString() },
    }));
  
    return { paths, fallback: false };
  };

export const getStaticProps: GetStaticProps = async (context) => {
    const { id } = context.params!;
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    const user: User = await res.json();

    return {
        props: {
            user,
        },
    };
};

export default UserPage;