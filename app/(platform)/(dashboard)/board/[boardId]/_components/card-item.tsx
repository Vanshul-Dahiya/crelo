"use client"

import { Card } from "@prisma/client"

interface CardItemProps {
    data: Card;
    index: number
}
export const CardItem = ({ data, index }: CardItemProps) => {
    return (
        <div role="button" className="truncate border-2 border-transparent hover:border-black px-3 py-2 text-sm bg-white rounded-md shadow-sm ">
            {data.title}
        </div>
    )
}