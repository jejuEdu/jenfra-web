import { useEffect } from 'react';
import { useRouter } from 'next/router';
import LoadingItem from '../components/common/LoadingItem';

const Loading = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push('/result');
    }, 2500);
  }, []);

  return <LoadingItem />;
};

export default Loading;
