import Link from "next/link";
import { ReactElement } from "react";

export function SocialLink({
  hyperlink,
  children,
}: {
  hyperlink: string;
  children: ReactElement;
}): ReactElement {
  return (
    <Link
      href={hyperlink}
      target="_blank"
      rel="noopener noreferrer"
      className="hover:text-neutral-700 dark:hover:text-neutral-200 transition-all duration-50"
    >
      {children}
    </Link>
  );
}
