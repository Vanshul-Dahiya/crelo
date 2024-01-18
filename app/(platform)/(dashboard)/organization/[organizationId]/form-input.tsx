"use client"

import { Input } from "@/components/ui/input"
import { useFormStatus } from "react-dom"

interface FormInputProps {
    errors?: {
        title?: string[]
    }
}

export const FormInput = ({ errors }: FormInputProps) => {
    // useFormStatus works because FormInput is inside form tag 
    const { pending } = useFormStatus()
    return (
        <div>
            <Input
                required
                name="title"
                id="title"
                placeholder="Enter a board title"
                disabled={pending}
            />
            {errors?.title ? (
                <div>
                    {errors.title.map((error: string) => (
                        <p key={error} className="text-rose-500">
                            {error}
                        </p>
                    ))}
                </div>
            ) : null}
        </div>
    )
}