'use client';

import { Ellipsis } from 'lucide-react';
import { useState, useRef, useEffect, useCallback } from 'react';

interface ThreeDotsProps {
  options: { label: string; onClick?: () => void }[];
}

export default function ThreeDots({ options }: ThreeDotsProps) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const handleClickOutside = useCallback((event: MouseEvent) => {
    if (ref.current && !ref.current.contains(event.target as Node)) {
      setOpen(false);
    }
  }, []);

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside, true);
    return () =>
      document.removeEventListener('mousedown', handleClickOutside, true);
  }, [handleClickOutside]);

  const toggleDropdown = () => setOpen((prev) => !prev);

  return (
    <div className="relative" ref={ref}>
      <button
        type="button"
        aria-label="More options"
        className="flex h-8 w-8 items-center justify-center rounded-full bg-white shadow transition hover:bg-gray-200 focus:outline-none"
        onClick={toggleDropdown}
        onKeyDown={(e) => e.key === 'Escape' && setOpen(false)}
      >
        <Ellipsis />
      </button>

      {open && (
        <div className="ring-opacity-5 absolute right-0 z-10 mt-2 w-40 rounded-md bg-white shadow-lg">
          <div className="py-1">
            {options.map(({ label, onClick }, idx) => (
              <button
                key={idx}
                type="button"
                className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100"
                onClick={() => {
                  setOpen(false);
                  onClick?.();
                }}
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
