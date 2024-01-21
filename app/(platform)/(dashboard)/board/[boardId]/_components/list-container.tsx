"use client"

import { ListWithCards } from "@/types";
import { ListForm } from "./list-form";
import { useEffect, useState } from "react";
import { ListItem } from "./list-item";
import { DragDropContext, Droppable } from "@hello-pangea/dnd"

interface ListContainerProps {
    data: ListWithCards[];
    boardId: string
}

function reorder<T>(list: T[], startIndex: number, endIndex: number) {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1)
    result.splice(endIndex, 0, removed)
    return result
}

export const ListContainer = ({ data, boardId }: ListContainerProps) => {
    // update data in real time for drag and drop
    const [orderedData, setOrderedData] = useState(data)
    useEffect(() => {
        setOrderedData(data)
    }, [data])

    const onDragEnd = (result: any) => {
        const { destination, source, type } = result

        if (!destination) {
            return
        }

        // dropped in same position
        if (
            destination.droppableId === source.droppableId &&
            destination.index === source.index) {
            return
        }

        // user moves a list
        if (type === "list") {
            // reorder items -> change order using index
            const items = reorder(
                orderedData, source.index, destination.index
            ).map((item, index) => ({ ...item, order: index }))

            setOrderedData(items)
            // trigger server actions

        }

        // user moves a card
        if (type === "card") {
            const newOrderData = [...orderedData]

            // source and destination list
            const sourceList = newOrderData.find(list => list.id === source.droppableId)
            const destList = newOrderData.find(list => list.id === destination.droppableId)

            if (!sourceList || !destList) {
                return;
            }

            // check if cards exists on sourceList
            if (!sourceList.cards) {
                sourceList.cards = []
            }

            // check if cards exists on destList
            if (!destList.cards) {
                destList.cards = []
            }

            // user moves card in same list
            if (source.droppableId === destination.droppableId) {
                const reorderedCards = reorder(
                    sourceList.cards,
                    source.index,
                    destination.index
                )

                reorderedCards.forEach((card, idx) => {
                    card.order = idx
                })

                sourceList.cards = reorderedCards

                setOrderedData(newOrderData)
            } else {
                // user moves card to another elise
                // remove card from source list
                const [movedCard] = sourceList.cards.splice(source.index, 1)

                // assign new listId to movedCard
                movedCard.listId = destination.droppableId

                //  add card to destination list
                destList.cards.splice(destination.index, 0, movedCard)

                sourceList.cards.forEach((card, idx) => {
                    card.order = idx
                })

                // update order for each card in destList
                destList.cards.forEach((card, idx) => {
                    card.order = idx
                })

                setOrderedData(newOrderData)


            }


        }
    }

    return (
        <DragDropContext onDragEnd={onDragEnd}>
            <Droppable droppableId="lists" type="list" direction="horizontal">
                {(provided) => (
                    <ol
                        {...provided.droppableProps}
                        ref={provided.innerRef}
                        className="flex gap-x-3 h-full">
                        {orderedData.map((list, index) => {
                            return (
                                <ListItem key={list.id} index={index} data={list} />
                            )
                        })}
                        {provided.placeholder}
                        <ListForm />
                        <div className="flex-shrink-0 w-1" />
                    </ol>
                )}
            </Droppable>
        </DragDropContext>
    )
}