import { cn } from "@/lib/utils"

export function Badge({
  variant = 'paid',
  children
}) {
  return (
    (<span
      className={cn(
        "px-3 py-1 text-sm font-medium rounded-md",
        variant === 'paid' ? "bg-orange-100 text-orange-500" : "bg-emerald-100 text-emerald-500"
      )}>
      {children}
    </span>)
  );
}

