import * as React from "react";
import { cn } from "@/lib/utils";

const Separator = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("h-[1px] w-full bg-gray-700", className)}
    {...props}
  />
));
Separator.displayName = "Separator";

export { Separator };
