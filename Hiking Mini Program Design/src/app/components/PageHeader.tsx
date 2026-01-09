import { ChevronLeft } from 'lucide-react';
import { ReactNode } from 'react';

export function DetailHeader({ title, onBack }: { title: string; onBack: () => void }) {
  return (
    <div className="flex items-center gap-3 p-4 bg-white border-b border-gray-100">
      <button onClick={onBack} className="p-1 hover:bg-gray-100 rounded-full transition-colors">
        <ChevronLeft className="w-6 h-6" />
      </button>
      <h1 className="text-lg font-semibold flex-1 text-center pr-8">{title}</h1>
    </div>
  );
}

export function SearchHeader({ onSearch, placeholder }: { onSearch: (value: string) => void; placeholder: string }) {
  return (
    <div className="p-4 bg-white border-b border-gray-100">
      <input
        type="text"
        placeholder={placeholder}
        onChange={(e) => onSearch(e.target.value)}
        className="w-full px-4 py-2 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
      />
    </div>
  );
}
