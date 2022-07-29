import React from "react"
import Image from "next/image"
import Link from "next/link"
import { Spacer } from "../components/meta"

const ArchCard = ({ arch }) => {
  return (
    <div className="arch-row">
        <div className="arch-img">
            <div>
            <Image src={arch.image}
                   alt={arch.name}
                   width={500}
                   height={500}
            />
            </div>
        </div>
        <div className="arch-content">
            <h1>{arch.name}</h1>
            <Spacer h="5px" />
            <Link href={"archetypes/" + arch.slug}>
                <a className="arrow-link">
                    Read More
                </a>
            </Link>
        </div>
    </div>
  )
}

export default ArchCard
