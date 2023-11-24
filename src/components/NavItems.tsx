'use client';

import { PRODUCT_CATEGORIES } from "@/config";
import { useEffect, useRef, useState } from "react";
import { NavItem } from "./NavItem";
import { useOnClickOutside } from "@/hooks/useOnClickOutside";

export const NavItems = () => {
  const [activeIndex, setActiveIndex] = useState<null | number>(null);

  // const isAnyOpen = activeIndex !== null;
  const navRef = useRef<HTMLDivElement | null>(null);
  useOnClickOutside(navRef, () => {
    setActiveIndex(null);
  });

  useEffect(() => {
    const handleEscape = (e:KeyboardEvent) => {
      if(e.key === 'Escape') {
        setActiveIndex(null);
      }
    }
    document.addEventListener('keydown', handleEscape);
    return () => {
      document.removeEventListener('keydown', handleEscape);
    }
  }, [])
  

  return (
    <>
      <div className="flex gap-4 h-full" ref={navRef}>
        {
          PRODUCT_CATEGORIES.map((category, index) => {
            const handleOpen = () => {
              if(activeIndex === index) {
                setActiveIndex(null);
              }
              else {
                setActiveIndex(index);
              }
            }

            const isOpen = index === activeIndex;

            return (
              <NavItem
                category={category}
                handleOpen={handleOpen}
                isOpen={isOpen}
                key={category.value }
                isAnyOpen={activeIndex !== null}
              />
            )
          })
        }
      </div>
    </>
  )
}
