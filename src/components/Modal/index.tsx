"use client";

import { useRouter } from "next/navigation";
import React from "react";

interface Props {
  children: React.ReactNode;
  className: string;
  hrefClose: string
}

export default function Modal({ children, className, hrefClose }: Props) {
  const router = useRouter()

  const handleClose = (e:React.MouseEvent<HTMLElement> ) => {
    e.stopPropagation();
    router.push(hrefClose, {scroll: false});
  };
  return (
    <section
      className="fixed inset-0 flex justify-center items-center z-[50] bg-black/30 backdrop-blur-sm"
      onClick={handleClose}
    >
      <article className={className} onClick={(e)=>e.stopPropagation() }>{children}</article>
    </section>
  );
}
