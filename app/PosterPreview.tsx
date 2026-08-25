"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const previewSrc = "/rhino-2026-poster-preview.jpg";
const pdfSrc = "/rhino-2026-poster-moosung-kim.pdf";

export default function PosterPreview() {
  const [open, setOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    const trigger = triggerRef.current;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
      trigger?.focus();
    };
  }, [open]);

  return (
    <>
      <button
        className="poster-thumb"
        type="button"
        onClick={() => setOpen(true)}
        aria-label="Open a larger preview of the RHINO 2026 poster"
        ref={triggerRef}
      >
        <Image
          src={previewSrc}
          alt="Preview of the RHINO 2026 poster, Oscillator-Centric Analysis of Power Grid Stability"
          width={1600}
          height={2261}
          sizes="(max-width: 760px) 280px, 280px"
          priority
        />
        <span>View poster</span>
      </button>

      {open ? (
        <div
          className="poster-modal-backdrop"
          role="presentation"
          onMouseDown={(event) => {
            if (event.currentTarget === event.target) setOpen(false);
          }}
        >
          <section
            className="poster-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="poster-dialog-title"
          >
            <header className="poster-modal-header">
              <div>
                <p className="item-type">RHINO 2026 poster</p>
                <h2 id="poster-dialog-title">
                  Oscillator-Centric Analysis of Power Grid Stability
                </h2>
              </div>
              <div className="poster-modal-actions">
                <a href={pdfSrc} target="_blank" rel="noreferrer">Open PDF</a>
                <a href={pdfSrc} download>Download</a>
                <button type="button" onClick={() => setOpen(false)} autoFocus>Close</button>
              </div>
            </header>
            <div className="poster-modal-content">
              <Image
                src={previewSrc}
                alt="RHINO 2026 poster by Moosung Kim and Heetae Kim"
                width={1600}
                height={2261}
                sizes="(max-width: 1100px) 100vw, 1000px"
              />
            </div>
          </section>
        </div>
      ) : null}
    </>
  );
}
