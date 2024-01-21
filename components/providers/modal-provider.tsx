"use client"

import { CardModal } from "@/components/modals/card-modal"
import { useEffect, useState } from "react"

export const ModalProvider = () => {
    const [isMounted, setIsMounted] = useState(false)

    // making sure - it only renders on client
    useEffect(() => {
        setIsMounted(true)
    }, [])

    if (!isMounted) {
        return null
    }

    return (
        <>
            <CardModal />
        </>
    )
}