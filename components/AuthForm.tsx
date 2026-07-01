"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import Image from "next/image"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import { FieldGroup } from "@/components/ui/field"
import { toast } from "sonner";
import Link from "next/link"
import AuthFormField from "@/components/AuthFormField";

type AuthFormProps = {
    type: "sign-in" | "sign-up"
}

const AuthForm  = ({ type }: AuthFormProps) => {
    const AuthFormSchema = z.object({
        name:
            type === "sign-up"
                ? z.string().min(2, "Name must be at least 2 characters")
                : z.string().optional(),
        email: z.string().email("Please enter a valid email"),
        password: z.string().min(6, "Password must be at least 6 characters"),
    })

    const form = useForm<z.infer<typeof AuthFormSchema>>({
        resolver: zodResolver(AuthFormSchema),
        defaultValues: {
            name: "",
            email: "",
            password: "",
        },
    })

    function onSubmit(data: z.infer<typeof AuthFormSchema>) {
        console.log(type === "sign-in" ? "SIGN IN" : "SIGN UP", data)

        toast.success(
            type === "sign-in"
                ? "Signed in successfully"
                : "Account created successfully"
        )
    }

    return (
        <div className="card-border lg:min-w-[566px]">
            <div className="flex flex-col gap-6 card py-14 px-10">
                <div className="flex flex-row gap-2 justify-center">
                    <Image src="/logo.png" alt="logo" height={40} width={40} />
                    <h2 className="text-primary-100">HireReady</h2>
                </div>
                <h3>Practice job interviews with AI</h3>
                <p>{type === "sign-in" ? "Sign in to continue" : "Create your account"}</p>
                <form onSubmit={form.handleSubmit(onSubmit)}>
                    <FieldGroup>
                        {type === "sign-up" && (
                            <AuthFormField
                                control={form.control}
                                name="name"
                                label="Name"
                                placeholder="Enter your name"
                            />
                        )}

                        <AuthFormField
                            control={form.control}
                            name="email"
                            label="Email"
                            type="email"
                            placeholder="you@example.com"
                        />

                        <AuthFormField
                            control={form.control}
                            name="password"
                            label="Password"
                            type="password"
                            placeholder="Enter your password"
                        />
                        <Button type="submit" className="btn">
                            {type === "sign-in" ? "Sign In" : "Create Account"}
                        </Button>
                    </FieldGroup>
                </form>
                <p className="text-center">
                    {type === "sign-in" ? "No account yet?" : "Already have an account?"}{" "}
                    <Link
                        href={type === "sign-in" ? "/sign-up" : "/sign-in"}
                        className="font-bold text-primary-200 ml-1"
                    >
                        {type === "sign-in" ? "Sign up" : "Sign in"}
                    </Link>
                </p>
            </div>
        </div>
    )
}
export default AuthForm
