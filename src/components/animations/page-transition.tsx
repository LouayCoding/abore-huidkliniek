"use client";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { gsap } from "gsap";
import { marcellus } from "@/lib/fonts";

export function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [displayChildren, setDisplayChildren] = useState(children);

  useEffect(() => {
    // Initial page load animation
    gsap.fromTo(
      ".page-content",
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.6, ease: "power3.out", delay: 0.1 }
    );
  }, []);

  useEffect(() => {
    if (children !== displayChildren) {
      // Start exit animation
      setIsTransitioning(true);
      
      gsap.to(".page-content", {
        opacity: 0,
        y: -20,
        duration: 0.3,
        ease: "power2.in",
        onComplete: () => {
          setDisplayChildren(children);
          
          // Enter animation
          gsap.fromTo(
            ".page-content",
            { opacity: 0, y: 20 },
            { 
              opacity: 1, 
              y: 0, 
              duration: 0.5, 
              ease: "power3.out",
              onComplete: () => setIsTransitioning(false)
            }
          );
        }
      });
    }
  }, [children, displayChildren]);

  return (
    <div className="page-content">
      {displayChildren}
    </div>
  );
}

// Smooth scroll link component
interface SmoothLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export function SmoothLink({ href, children, className = "", onClick }: SmoothLinkProps) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // If it's an anchor link, smooth scroll
    if (href.startsWith("#")) {
      e.preventDefault();
      const element = document.querySelector(href);
      if (element) {
        gsap.to(window, {
          duration: 1,
          scrollTo: { y: element, offsetY: 80 },
          ease: "power3.inOut",
        });
      }
    }
    onClick?.();
  };

  return (
    <a href={href} onClick={handleClick} className={className}>
      {children}
    </a>
  );
}

// Page loader component
export function PageLoader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Hide loader after page loads
    const timer = setTimeout(() => {
      gsap.to(".page-loader", {
        yPercent: -100,
        duration: 0.8,
        ease: "power4.inOut",
        onComplete: () => setIsLoading(false)
      });
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  if (!isLoading) return null;

  return (
    <div className="page-loader fixed inset-0 z-[200] flex items-center justify-center bg-[#faf6ea]">
      <div className="text-center">
        <div className={`${marcellus.className} text-4xl text-foreground mb-4`}>
          Aboré
        </div>
        <div className="flex gap-1 justify-center">
          <span className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
          <span className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
          <span className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
        </div>
      </div>
    </div>
  );
}
