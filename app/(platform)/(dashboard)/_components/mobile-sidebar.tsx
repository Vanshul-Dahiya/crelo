"use client"

import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"

import { useMobileSidebar } from "@/hooks/use-mobile-sidebar"
import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"
import { Sheet, SheetContent } from "@/components/ui/sheet"
import { Sidebar } from "./sidebar"

const MobileSidebar = () => {

    const pathname = usePathname()
    const [isMounted, setIsMounted] = useState(false)

    const onOpen = useMobileSidebar((state) => state.onOpen)
    const onClose = useMobileSidebar((state) => state.onClose)
    const isOpen = useMobileSidebar((state) => state.isOpen)

    // to solve hydration error
    // useEffect won't run on SSR..only CSR
    useEffect(() => {
        setIsMounted(true)
    }, [])

    // whenever url changes, mobile sidebar will close
    useEffect(() => {
        onClose()
    }, [pathname, onClose])


    if (!isMounted) return null

    return (
        <>
            <Button onClick={onOpen} variant={"ghost"} size={"sm"} className="block md:hidden mr-2">
                <Menu className="h-4 w-4" />
            </Button>
            <Sheet open={isOpen} onOpenChange={onClose}>
                <SheetContent side={"left"} className="p-2 pt-10" >
                    <Sidebar storageKey="c-sidebar-mobile-state" />
                </SheetContent>
            </Sheet>
        </>
    )
}

export default MobileSidebar