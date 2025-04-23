"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { toast } from "sonner"

const formSchema = z.object({
  firstName: z.string().min(2, {
    message: "نام باید حداقل 2 حرف باشد",
  }),
  lastName: z.string().min(2, {
    message: "نام خانوادگی باید حداقل 2 حرف باشد",
  }),
  phone: z.string().regex(/^09[0-9]{9}$/, {
    message: "شماره موبایل باید با 09 شروع شود و 11 رقم باشد",
  }),
  city: z.string().min(2, {
    message: "شهر باید حداقل 2 حرف باشد",
  }),
  type: z.string({
    required_error: "لطفا نوع همکاری را انتخاب کنید",
  }),
  message: z.string().optional(),
})

const cooperationTypes = [
  { value: "representative", label: "نماینده" },
  { value: "teacher", label: "مربی" },
  { value: "school", label: "آموزشگاه" },
  { value: "supervisor", label: "سوپروایزر آموزشی" },
  { value: "other", label: "سایر" },
]

export function CooperationForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      phone: "",
      city: "",
      type: "",
      message: "",
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true)
    try {
      const response = await fetch("/api/cooperation", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      })

      if (!response.ok) {
        throw new Error("خطا در ارسال فرم")
      }

      toast.success("درخواست همکاری شما با موفقیت ثبت شد")
      form.reset()
    } catch (error) {
      toast.error("خطا در ارسال فرم. لطفا دوباره تلاش کنید")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="firstName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>نام</FormLabel>
                <FormControl>
                  <Input placeholder="نام خود را وارد کنید" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="lastName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>نام خانوادگی</FormLabel>
                <FormControl>
                  <Input placeholder="نام خانوادگی خود را وارد کنید" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>شماره تماس</FormLabel>
                <FormControl>
                  <Input placeholder="09xxxxxxxxx" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="city"
            render={({ field }) => (
              <FormItem>
                <FormLabel>شهرستان</FormLabel>
                <FormControl>
                  <Input placeholder="شهرستان خود را وارد کنید" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="type"
          render={({ field }) => (
            <FormItem>
              <FormLabel>نوع همکاری</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="نوع همکاری را انتخاب کنید" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {cooperationTypes.map((type) => (
                    <SelectItem key={type.value} value={type.value}>
                      {type.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>توضیحات</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="توضیحات خود را وارد کنید (اختیاری)"
                  className="min-h-[100px]"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" className="w-full" disabled={isSubmitting}>
          {isSubmitting ? "در حال ارسال..." : "ارسال درخواست"}
        </Button>
      </form>
    </Form>
  )
} 