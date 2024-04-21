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
      className="hover:text-gray-700 transition-all duration-50"
    >
      {children}
    </Link>
  );
}
