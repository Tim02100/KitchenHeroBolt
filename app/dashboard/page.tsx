import Header from './components/Header';
import BudgetTracker from './components/BudgetTracker';
import CategoryGrid from './components/CategoryGrid';

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid gap-6">
          <BudgetTracker />
          <CategoryGrid />
        </div>
      </main>
    </div>
  );
}