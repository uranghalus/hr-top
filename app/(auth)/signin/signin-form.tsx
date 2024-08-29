'use client';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import CardWrapper from '@/components/wrapper/card-wrapper';
import { LoginSchema } from '@/lib/schema';
import { loginService } from '@/lib/services/login';
import { zodResolver } from '@hookform/resolvers/zod';
import Link from 'next/link';
import { useTransition } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

const SigninFOrm = () => {
  const [isPending, startTransition] = useTransition();

  const form = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });
  const onSubmit = (values: z.infer<typeof LoginSchema>) => {
    startTransition(() => {
      loginService(values);
    });
  };
  return (
    <CardWrapper
      headerLabel={'Sign In'}
      headerDescription={'Masuk Untuk Melanjutkan'}
      backButtonHeader="Don't have an account yet?"
      backButtonLabel="Sign Up"
      backButtonHref={'/signup'}
      showSocial
      className={'min-w-96'}
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="space-y-2">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="Masukkan email"
                      type="email"
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <div className="flex items-center">
                    <FormLabel>Password</FormLabel>
                    <Link
                      href="/forgot-password"
                      className="ml-auto inline-block text-sm underline"
                    >
                      Forgot your password?
                    </Link>
                  </div>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="Masukkan password"
                      type="password"
                    />
                  </FormControl>
                </FormItem>
              )}
            />
          </div>
          <Button
            disabled={isPending}
            variant={'default'}
            className="w-full"
            type="submit"
          >
            Sign In
          </Button>
        </form>
      </Form>
    </CardWrapper>
  );
};

export default SigninFOrm;
