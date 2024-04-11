import { ReactElement } from "react";

export function SocialLink({
  hyperlink,
  children,
}: {
  hyperlink: string;
  children: ReactElement;
}): ReactElement {
  return (
    <a
      href={hyperlink}
      target="_blank"
      rel="noopener noreferrer"
      className="text-gray-500 hover:text-gray-700 transition-all duration-50"
    >
      {children}
    </a>
  );
}
