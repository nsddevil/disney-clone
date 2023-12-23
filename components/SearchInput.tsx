'use client';

import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';

const formSchema = z.object({
  input: z
    .string()
    .min(2, { message: '2글자 이상입력하세요' })
    .max(30, { message: '30글자 밑으로 입력하세요' }),
});

export default function SearchInput() {
  const router = useRouter();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      input: '',
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    router.push(`/search/${values.input}`);
    form.reset();
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="input"
          render={({ field }) => (
            <FormItem className="relative">
              <FormControl>
                <Input placeholder="Search..." {...field} />
              </FormControl>
              <FormMessage className="absolute left-0 bottom-[-30px]" />
            </FormItem>
          )}
        />
      </form>
    </Form>
  );
}
