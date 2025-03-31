"use client";

import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes, forwardRef } from "react";

export interface TagProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  selected?: boolean;
}

const Tag = forwardRef<HTMLButtonElement, TagProps>(
  ({ className, selected, children, ...props }, ref) => {
    return (
      <button
        className={cn(
          "hover:cursor-pointer inline-flex items-center justify-center rounded-md border px-3 py-1.5 text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
          selected
            ? "bg-primary/10 border-primary/30 text-primary shadow-inner"
            : "bg-background border-input text-foreground hover:bg-accent hover:text-accent-foreground",
          className,
        )}
        ref={ref}
        {...props}
      >
        {children}
      </button>
    );
  },
);

Tag.displayName = "Tag";

export { Tag };
