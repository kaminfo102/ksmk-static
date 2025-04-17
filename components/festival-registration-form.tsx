"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";
import { CheckCircle2 } from "lucide-react";

const formSchema = z.object({
  firstName: z.string().min(2, "نام باید حداقل ۲ حرف باشد"),
  lastName: z.string().min(2, "نام خانوادگی باید حداقل ۲ حرف باشد"),
  phone: z.string().regex(/^[۰-۹0-9]{11}$/, "شماره موبایل معتبر نیست")
    .refine((val) => {
      // Convert Persian numbers to English
      const englishNumber = val.replace(/[۰-۹]/g, d => '۰۱۲۳۴۵۶۷۸۹'.indexOf(d).toString());
      return /^09\d{9}$/.test(englishNumber);
    }, "شماره موبایل باید با ۰۹ شروع شود"),
  code_meli: z.string().regex(/^[۰-۹0-9]{10}$/, "کد ملی باید ۱۰ رقم باشد")
    .refine((val) => {
      // Convert Persian numbers to English
      const englishNumber = val.replace(/[۰-۹]/g, d => '۰۱۲۳۴۵۶۷۸۹'.indexOf(d).toString());
      // Iranian National ID validation algorithm
      if (!/^\d{10}$/.test(englishNumber)) return false;
      
      const check = parseInt(englishNumber[9]);
      let sum = 0;
      for (let i = 0; i < 9; i++) {
        sum += parseInt(englishNumber[i]) * (10 - i);
      }
      const remainder = sum % 11;
      return (remainder < 2 && check === remainder) || (remainder >= 2 && check === 11 - remainder);
    }, "کد ملی وارد شده معتبر نیست"),
  city: z.string().min(1, "لطفاً شهر خود را انتخاب کنید"),
  level: z.string().min(1, "لطفاً سطح مهارت خود را وارد کنید"),
  message: z.string().optional(),
});

const kurdistanCities = [
  "سنندج",
  "سقز",
  "مریوان",
  "بانه",
  "قروه",
  "کامیاران",
  "دیواندره",
  "بیجار",
  "دهگلان",
  "سروآباد",
];


export function FestivalRegistrationForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      phone: "",
      city: "",
      level: "",
      code_meli: "",
      message: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    try {
      const response = await fetch('/api/festival-registration', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'خطا در ثبت‌نام');
      }
      
      setIsSuccess(true);
      form.reset();
      toast('ثبت‌نام شما با موفقیت انجام شد!', {
        duration: 4000,
        position: 'top-center',
        className: 'bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800',
        style: {
          background: 'var(--background)',
          border: '1px solid var(--border)',
          fontFamily: 'var(--font-vazirmatn)',
          fontSize: '1rem',
          padding: '1rem',
          borderRadius: '0.75rem',
          boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
          maxWidth: '90%',
          margin: '0 auto',
        },
        description: (
          <div className="mt-2 flex items-center text-green-600 dark:text-green-400 text-sm">
            <CheckCircle2 className="h-4 w-4 ml-2" />
            <span>اطلاعات ثبت‌نام شما دریافت شد. جزئیات بیشتر از طریق پیامک ارسال خواهد شد.</span>
          </div>
        ),
      });
    } catch (error) {
      toast.error('خطا در ثبت‌نام', {
        duration: 4000,
        position: 'top-center',
        className: 'bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800',
        style: {
          background: 'var(--background)',
          border: '1px solid var(--border)',
          fontFamily: 'var(--font-vazirmatn)',
          fontSize: '1rem',
          padding: '1rem',
          borderRadius: '0.75rem',
          boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
          maxWidth: '90%',
          margin: '0 auto',
        },
        description: (
          <div className="mt-2 flex items-center text-red-600 dark:text-red-400 text-sm">
            <span>لطفاً دوباره تلاش کنید</span>
          </div>
        ),
      });
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setIsSuccess(false), 3000);
    }
  }

  return (
    <div className="bg-card rounded-lg p-6 shadow-lg">
      <h2 className="text-2xl font-bold mb-6 text-center">فرم ثبت‌نام در مسابقه</h2>
      
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="firstName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>نام</FormLabel>
                  <FormControl>
                    <Input 
                      placeholder="نام خود را وارد کنید" 
                      {...field}
                      className="transition-all duration-200 focus:scale-[1.02]"
                    />
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
                    <Input 
                      placeholder="نام خانوادگی خود را وارد کنید" 
                      {...field}
                      className="transition-all duration-200 focus:scale-[1.02]"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>شماره موبایل</FormLabel>
                  <FormControl>
                    <Input 
                      placeholder="۰۹۱۲۳۴۵۶۷۸۹" 
                      {...field}
                      className="transition-all duration-200 focus:scale-[1.02]"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="code_meli"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>کد ملی</FormLabel>
                  <FormControl>
                    <Input 
                      placeholder="۱۲۳۴۵۶۷۸۹۰" 
                      {...field}
                      className="transition-all duration-200 focus:scale-[1.02]"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="city"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>شهر</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger className="transition-all duration-200 focus:scale-[1.02]">
                        <SelectValue placeholder="شهر خود را انتخاب کنید" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {kurdistanCities.map((city) => (
                        <SelectItem key={city} value={city}>
                          {city}
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
              name="level"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>سطح مهارت</FormLabel>
                  <FormControl>
                    <Input 
                      placeholder="سطح مهارت خود را وارد کنید" 
                      {...field}
                      className="transition-all duration-200 focus:scale-[1.02]"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel>پیام (اختیاری)</FormLabel>
                <FormControl>
                  <Textarea 
                    placeholder="پیام یا سوال خود را وارد کنید" 
                    className="min-h-[100px] transition-all duration-200 focus:scale-[1.01]"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="flex justify-center">
            <Button 
              type="submit" 
              size="lg"
              className="w-full md:w-auto px-8" 
              disabled={isSubmitting}
            >
              {isSubmitting ? "در حال ثبت‌نام..." : "ثبت‌نام در مسابقه"}
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
} 