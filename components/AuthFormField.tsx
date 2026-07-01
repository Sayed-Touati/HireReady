import type { HTMLInputTypeAttribute } from "react"
import type { Control, FieldValues, Path } from "react-hook-form"
import { Controller } from "react-hook-form"

import {
    Field,
    FieldError,
    FieldLabel,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"

type FormFieldProps<T extends FieldValues> = {
    control: Control<T>
    name: Path<T>
    label: string
    type?: HTMLInputTypeAttribute
    placeholder?: string
}

const FormField = <T extends FieldValues,>({
                                               control,
                                               name,
                                               label,
                                               type = "text",
                                               placeholder,
                                           }: FormFieldProps<T>) => {
    return (
        <Controller
            name={name}
            control={control}
            render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                    <FieldLabel htmlFor={field.name}>{label}</FieldLabel>

                    <Input
                        {...field}
                        id={field.name}
                        type={type}
                        aria-invalid={fieldState.invalid}
                        placeholder={placeholder}
                        value={field.value ?? ""}
                    />

                    {fieldState.invalid && (
                        <FieldError errors={[fieldState.error]} />
                    )}
                </Field>
            )}
        />
    )
}

export default FormField