import { useEffect } from 'react';
import { useRouter } from 'next/router';

const HomePage = () => {
  const router = useRouter();

  useEffect(() => {
    router.push('/login'); // Redirects the homepage to /login
  }, [router]);

  return null; // Render nothing while redirecting
};

export default HomePage;
