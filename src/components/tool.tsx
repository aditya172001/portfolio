import { ReactElement } from "react";
import Image from "next/image";
import Link from "next/link";

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
    <Link
      href={hyperlink}
      target="_blank"
      rel="noopener noreferrer"
      className=" bg-neutral-100 hover:bg-neutral-200 dark:bg-neutral-900 dark:hover:bg-neutral-800 text-neutral-400 hover:text-neutral-600 dark:text-neutral-500 hover:dark:text-neutral-300 px-[5px] py-[1px] w-fit rounded-md flex items-center mx-[2px] cursor-pointer my-[2px]"
    >
      <Image
        src={toolImg}
        width={40}
        height={40}
        alt={altText}
        className="h-4 w-4"
      />
      <span className="pl-1">{toolName}</span>
    </Link>
  );
}
