"use client";

import { useState } from "react";
import Image from "next/image";

const INITIAL_COUNT = 6;

export function Gallery({
  images,
  name,
}: {
  images: string[];
  name: string;
}) {
  const [showAll, setShowAll] = useState(false);
  const visible = showAll ? images : images.slice(0, INITIAL_COUNT);
  const remaining = images.length - INITIAL_COUNT;

  return (
    <div>
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((image, index) => (
          <div
            key={`${name}-${index}`}
            className="group relative aspect-[4/3] overflow-hidden"
          >
            <Image
              src={image}
              alt={`${name} — photo ${index + 1}`}
              fill
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
            />
          </div>
        ))}
      </div>

      {!showAll && remaining > 0 && (
        <div className="mt-10 text-center">
          <button
            onClick={() => setShowAll(true)}
            className="border border-navy px-10 py-3.5 text-[11px] uppercase tracking-[0.25em] text-navy transition-all duration-150 ease-out hover:bg-navy hover:text-ivory active:scale-[0.98]"
          >
            Load More Photos ({remaining})
          </button>
        </div>
      )}
    </div>
  );
}
