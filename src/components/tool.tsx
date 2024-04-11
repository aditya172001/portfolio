import { ReactElement } from "react";
import Image from "next/image";

export function Tool({
  toolName,
  toolImg,
  altText,
  hyperlink,
}: {
  toolName: string;
  toolImg: string;
  altText: string;
  hyperlink: string;
}): ReactElement {
  return (
    <a
      href={hyperlink}
      target="_blank"
      rel="noopener noreferrer"
      className=" bg-gray-100 text-gray-500 px-[6px] py-[2px] w-fit rounded-md flex items-center mx-1 hover:bg-gray-200 hover:text-gray-600 cursor-pointer"
    >
      <Image
        src={toolImg}
        width={40}
        height={40}
        alt={altText}
        className="h-5 w-5"
      />
      <span className="pl-1">{toolName}</span>
    </a>
  );
}
