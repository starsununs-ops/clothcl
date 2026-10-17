import { CheckCircle2, X } from 'lucide-react';

export default function Toast({ toast, onClose }) {
  if (!toast) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-[#2b2725] text-white px-5 py-3.5 shadow-2xl rounded-sm border border-[#c3a073]/40 animate-in fade-in slide-in-from-bottom-4 duration-300 max-w-md">
      <CheckCircle2 size={18} className="text-[#c3a073] shrink-0" />
      <div className="text-xs">
        <p className="font-semibold tracking-wider font-serif">{toast.title || 'Notification'}</p>
        <p className="text-gray-300 text-[11px] font-sans">{toast.message}</p>
      </div>
      <button 
        onClick={onClose} 
        className="text-gray-400 hover:text-white ml-2 transition-colors cursor-pointer"
        aria-label="Close notification"
      >
        <X size={14} />
      </button>
    </div>
  );
}
