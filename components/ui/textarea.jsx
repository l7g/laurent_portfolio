import * as React from "react";

import { cn } from "@/lib/utils";

const Textarea = React.forwardRef(({ className, ...props }, ref) => {
  return (
    <textarea
      className={cn(
        "flex min-h-[80px] w-full rounded-md border border-accent-light/40 dark:border-accent-dark/40 bg-background-light dark:bg-background-dark px-4 py-5 text-base placeholder:text-text-light/60 dark:placeholder:text-text-dark/60 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent-light dark:focus-visible:ring-accent-dark focus-visible:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      ref={ref}
      {...props}
    />
  );
});
Textarea.displayName = "Textarea";

export { Textarea };
