import React from "react";
import Link from "next/link";
import Image  from "next/image";
export default function Logo() {
  return (
    <>
      <Link href="/" legacyBehavior>
        <a>
          <Image src="/images/logo.png" alt="hotel logo" width={150} height={50}/>
        </a>
      </Link>
    </>
  );
}
