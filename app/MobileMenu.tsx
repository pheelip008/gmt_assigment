"use client";

import { useEffect, useState } from "react";

/**
 * The reference's mobile menu: the three rules fold into an X while a white
 * overlay covers the page, listing the nav at 8.5vw on 18.5vw rows with the
 * CONTACT oval pinned to the bottom. Folders slide a second panel in from the
 * right, with BACK at its top.
 *
 * Measured on the reference at 390x844 and 440x956.
 */

type NavItem = { label: string; items?: string[] };

/* Tailwind v4 writes rotate/translate as their own properties, so the
   transition has to name them — otherwise the X would snap into place.
   Timing is the reference's: 0.25s cubic-bezier(0.2, 0.6, 0.3, 1). */
const BAR =
  "block h-px bg-ink transition-[rotate,translate,width,opacity] duration-[150ms] ease-[cubic-bezier(0.2,0.6,0.3,1)]";

function Chevron({ back = false }: { back?: boolean }) {
  return (
    <svg
      viewBox="0 0 22 22"
      aria-hidden
      className={`h-[0.85em] w-[0.85em] shrink-0 ${back ? "rotate-180" : ""}`}
      fill="none"
      stroke="currentColor"
      strokeWidth="0.75"
    >
      <path d="M8 4.5 L15 11 L8 17.5" />
    </svg>
  );
}

export default function MobileMenu({ nav }: { nav: NavItem[] }) {
  const [open, setOpen] = useState(false);
  const [folder, setFolder] = useState<NavItem | null>(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    // Hold the page still behind the overlay, as the reference does.
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const close = () => {
    setOpen(false);
    // Let the overlay fade out before the panel snaps back to the root list.
    window.setTimeout(() => setFolder(null), 400);
  };

  return (
    <div className="lg:hidden">
      <button
        type="button"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        onClick={() => (open ? close() : setOpen(true))}
        /* While open the button goes fixed — at the same spot it occupies in
           the header, 16.5px below the padding to sit level with the 70px
           logo — so it stays reachable if the page was scrolled. */
        className={`flex h-[37px] w-[50px] flex-col items-center justify-center gap-[9px] ${
          open ? "fixed right-[6vw] top-[calc(6vw+16.5px)] z-50" : "relative z-50"
        }`}
      >
        <span className={`${BAR} ${open ? "w-[29px] translate-y-[10px] -rotate-45" : "w-[35px]"}`} />
        <span className={`${BAR} w-[35px] ${open ? "opacity-0" : ""}`} />
        <span className={`${BAR} ${open ? "w-[29px] -translate-y-[10px] rotate-45" : "w-[35px]"}`} />
      </button>

      <div
        // Cleared for the header, which sits above the overlay.
        className={`fixed inset-0 z-40 flex flex-col bg-cream pt-[calc(70px+12vw)] transition-[opacity,visibility] duration-[400ms] ease-[cubic-bezier(0.4,0,0.2,1)] ${
          open ? "visible opacity-100" : "invisible opacity-0 duration-[600ms]"
        }`}
      >
        <div className="relative flex-1 overflow-hidden">
          <nav
            aria-label="Mobile"
            className={`absolute inset-0 flex flex-col justify-center transition-transform duration-[300ms] ease-[cubic-bezier(0.4,0,0.2,1)] ${
              folder ? "-translate-x-full" : "translate-x-0"
            }`}
          >
            <ul className="-mt-[2vw]">
              {nav.map((item, index) => (
                <li
                  key={item.label}
                  className="flex h-[18.5vw] items-center"
                  style={{
                    opacity: open ? 1 : 0,
                    transform: open ? "translateY(0)" : "translateY(30px)",
                    transition: `opacity 0.4s cubic-bezier(0.4,0,0.2,1) ${0.08 + index * 0.06}s, transform 0.4s cubic-bezier(0.4,0,0.2,1) ${0.08 + index * 0.06}s`,
                  }}
                >
                  {item.items ? (
                    <button
                      type="button"
                      onClick={() => setFolder(item)}
                      className="menu-item flex w-full items-center gap-[0.25em] px-[10vw] text-left"
                    >
                      {item.label}
                      <Chevron />
                    </button>
                  ) : (
                    <a href="#" className="menu-item block w-full px-[10vw]">
                      {item.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          <div
            className={`absolute inset-0 overflow-y-auto transition-transform duration-[300ms] ease-[cubic-bezier(0.4,0,0.2,1)] ${
              folder ? "translate-x-0" : "translate-x-full"
            }`}
            aria-hidden={!folder}
          >
            {/* Sub-items sit in an 80vw column with 10vw between them, so
                wrapped names keep the reference's spacing. */}
            <div className="py-[6vw]">
              <button
                type="button"
                onClick={() => setFolder(null)}
                className="menu-item flex w-full items-center gap-[0.25em] px-[10vw] text-left"
                tabIndex={folder ? 0 : -1}
              >
                <Chevron back />
                Back
              </button>
              <ul className="mt-[12vw] space-y-[10vw]">
                {folder?.items?.map((sub) => (
                  <li key={sub}>
                    <a
                      href="#"
                      className="menu-item block px-[10vw]"
                      tabIndex={folder ? 0 : -1}
                    >
                      {sub}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div
          className="px-[6vw] pb-[6vw]"
          style={{
            opacity: open ? 1 : 0,
            transform: open ? "translateY(0)" : "translateY(30px)",
            transition: `opacity 0.4s cubic-bezier(0.4,0,0.2,1) ${0.08 + nav.length * 0.06}s, transform 0.4s cubic-bezier(0.4,0,0.2,1) ${0.08 + nav.length * 0.06}s`,
          }}
        >
          <a
            href="#"
            className="btn-oval block w-[210px] text-center hover:text-white"
            tabIndex={open ? 0 : -1}
          >
            Contact
          </a>
        </div>
      </div>
    </div>
  );
}
