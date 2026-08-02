import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/** Merge Tailwind classNames safely, resolving conflicts. */
export function cn(...inputs) {
  return twMerge(clsx(inputs));
}