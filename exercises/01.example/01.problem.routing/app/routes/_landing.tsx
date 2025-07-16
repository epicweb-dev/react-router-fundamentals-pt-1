
import { Outlet } from 'react-router';
import { Footer } from '~/components/footer';
import { Header } from '~/components/header';

export default function LayoutPage() {
  return (
    <div className="min-h-screen bg-stone-50 dark:bg-gray-900 transition-colors duration-300">
      <Header />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};