import { db } from "@/lib/db"
import { auth } from "@clerk/nextjs"
import { redirect } from "next/navigation"
import { ListContainer } from "./_components/list-container"

interface BoardIdPageProps {
    params: {
        boardId: string
    }
}

const BoardIdPage = async ({
    params
}: BoardIdPageProps) => {
    const { orgId } = auth()
    if (!orgId) {
        redirect("/select-og")
    }

    const lists = await db.list.findMany({
        where: {
            boardId: params.boardId,
            // to ensure only people inside this org can load the list -
            board: {
                orgId
            }
        },
        include: {
            cards: {
                orderBy: {
                    order: "asc"
                }
            }
        },
        orderBy: {
            order: "asc"
        }

    })

    return (
        <div className="p-4 h-full overflow-x-auto">
            <ListContainer boardId={params.boardId} data={lists} />
        </div>
    )
}

export default BoardIdPage