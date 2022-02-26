import React from "react"
import { useRouter } from 'next/router';
import { locales } from "../utils/routes"
import Link from "next/link"

export const RegionSwitcher = () => {
  const { asPath } = useRouter();

  return (
    <div>
      {locales.map((l, i) => {
        return (
          <span key={i} >
                <Link href={asPath} locale={l}>
                  {l}
                </Link>
              </span>
        );
      })}
    </div>
  )
}