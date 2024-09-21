import * as React from "react";

import { cn } from "@/lib/utils";

const Input = React.forwardRef(({ className, type, ...props }, ref) => {
  return (
    <input
      type={type}
      className={cn(
        "flex h-[48px] rounded-md border border-accent-light/40 dark:border-accent-dark/40 focus:border-accent font-light bg-background-light dark:bg-background-dark px-4 py-5 text-base placeholder:text-text-light/60 dark:placeholder:text-text-dark/60 outline-none",
        className
      )}
      ref={ref}
      {...props}
    />
  );
});
Input.displayName = "Input";

export { Input };
