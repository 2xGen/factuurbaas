import React from 'react';
import { cn } from '@/lib/utils';

const layoutOptions = [
  { 
    id: 'plain', 
    name: 'Standaard', 
    previewStyle: { bg: 'bg-gray-100', text: 'text-gray-700', border: 'border-gray-300', accent: 'bg-blue-500' } 
  },
  { 
    id: 'modern', 
    name: 'Modern Donker', 
    previewStyle: { bg: 'bg-slate-800', text: 'text-gray-100', border: 'border-slate-600', accent: 'bg-sky-400' } 
  },
  { 
    id: 'classic', 
    name: 'Klassiek Licht', 
    previewStyle: { bg: 'bg-stone-200', text: 'text-gray-900', border: 'border-stone-400', accent: 'bg-stone-700' } 
  },
  { 
    id: 'creative', 
    name: 'Creatieve Kleuren', 
    previewStyle: { bg: 'bg-gradient-to-tr from-purple-500 via-pink-500 to-red-500', text: 'text-white', border: 'border-white/50', accent: 'bg-yellow-300' } 
  },
  { 
    id: 'minimalist', 
    name: 'Minimalistisch', 
    previewStyle: { bg: 'bg-white', text: 'text-gray-700', border: 'border-gray-200', accent: 'bg-black' } 
  },
  { 
    id: 'corporate', 
    name: 'Zakelijk Blauw', 
    previewStyle: { bg: 'bg-blue-100', text: 'text-blue-800', border: 'border-blue-300', accent: 'bg-blue-700' } 
  },
];

const LayoutSelector = ({ currentLayout, onSelectLayout }) => {
  return (
    <div className="mb-6">
      <p className="block text-sm font-medium text-gray-700 mb-3">Kies Factuur Stijl:</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4"> {/* Changed grid columns */}
        {layoutOptions.map(option => (
          <button
            key={option.id}
            type="button"
            onClick={() => onSelectLayout(option.id)}
            className={cn(
              "p-3 rounded-lg border-2 transition-all duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-warm-orange",
              option.previewStyle.bg,
              currentLayout === option.id ? 'ring-2 ring-warm-orange border-warm-orange shadow-lg' : option.previewStyle.border,
              "hover:shadow-md hover:border-warm-orange/70"
            )}
            aria-label={`Selecteer ${option.name} layout`}
          >
            <div className="h-20 w-full flex flex-col justify-between rounded-md p-2 relative overflow-hidden">
              <div className={cn("absolute inset-0", option.previewStyle.bg)}></div>
              <div className="relative z-10">
                <div className={cn("h-2 w-1/3 rounded-sm mb-1", option.previewStyle.accent)}></div>
                <div className={cn("h-1 w-full rounded-sm mb-0.5", option.previewStyle.text, "opacity-70")}></div>
                <div className={cn("h-1 w-3/4 rounded-sm", option.previewStyle.text, "opacity-50")}></div>
              </div>
              <div className="relative z-10 mt-auto">
                <div className={cn("h-1 w-full rounded-sm mb-0.5", option.previewStyle.text, "opacity-60")}></div>
                <div className={cn("h-1 w-1/2 rounded-sm", option.previewStyle.text, "opacity-40")}></div>
              </div>
            </div>
            <p className={cn("mt-2 text-center text-xs font-medium", option.previewStyle.text, currentLayout === option.id ? 'text-warm-orange font-semibold' : '')}>
              {option.name}
            </p>
          </button>
        ))}
      </div>
    </div>
  );
};

export default LayoutSelector;