import React from "react"
import Image from "next/image"
import Link from "next/link"

const ArchCard = ({ arch }) => {
  return (
    <div className="arch-row">
        <div className="arch-img">
            <Image src={arch.image}
                   alt={arch.name}
                   width={500}
                   height={500}
            />
        </div>
        <div className="arch-content">
            <h1>{arch.name}</h1>
            <Link href={arch.slug}>
                <a className="arrow-link">
                    Read More
                </a>
            </Link>
        </div>
    </div>
  )
}

export default ArchCard
