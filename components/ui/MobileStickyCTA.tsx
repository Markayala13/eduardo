'use client';

import { Phone, MessageSquare } from 'lucide-react';

export default function MobileStickyCTA() {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-zinc-200 shadow-2xl pb-safe">
      <div
        className="grid grid-cols-2 gap-3 p-3"
        style={{ paddingBottom: 'env(safe-area-inset-bottom, 0.75rem)' }}
      >
        {/* Call Button */}
        <button
          className="flex items-center justify-center gap-2 bg-primary text-white px-6 py-4 rounded-2xl font-semibold hover:bg-primary/90 active:scale-95 transition-all shadow-lg"
        >
          <Phone className="w-5 h-5" />
          Call
        </button>

        {/* Text Button */}
        <button
          className="flex items-center justify-center gap-2 bg-accent text-white px-6 py-4 rounded-2xl font-semibold hover:bg-accent/90 active:scale-95 transition-all shadow-lg"
        >
          <MessageSquare className="w-5 h-5" />
          Text
        </button>
      </div>
    </div>
  );
}
