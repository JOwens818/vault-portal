import { FC } from 'react';
import VaultHeader from '@/app/components/Header';
import { validateToken } from '@/lib/token';

const Dashboard: FC = async () => {
  const user = await validateToken();

  return (
    <>
      <VaultHeader user={user} />
      <main className="flex items-center justify-center p-20 pt-32">
        <div>
          <h1 className="max-w-3xl text-center font-bold text-5xl leading-tight mb-3">DASHBOARD</h1>
        </div>
      </main>
    </>
  );
};

export default Dashboard;
