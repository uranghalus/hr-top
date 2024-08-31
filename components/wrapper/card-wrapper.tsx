import { ChildrenProps } from '@/types/childrenprops';
import React from 'react';
import {
  Card,
  CardContent,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
} from '../ui/card';
import Link from 'next/link';
import SocialMedia from '../social-media';
import { Poppins } from 'next/font/google';
import { cn } from '@/lib/utils';
interface CardWrapper extends ChildrenProps {
  headerLabel: string;
  headerDescription: string;
  backButtonLabel?: string;
  backButtonHeader?: string;
  backButtonHref?: any;
  showSocial?: boolean;
  className: string;
}

const font = Poppins({
  subsets: ['latin'],
  weight: ['600'],
});

const CardWrapper: React.FC<CardWrapper> = ({
  backButtonHref,
  backButtonLabel,
  backButtonHeader,
  children,
  headerLabel,
  headerDescription,
  showSocial,
  className,
}) => {
  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle
          className={cn(
            'block text-2xl font-bold text-gray-800 dark:text-white text-center',
            font.className
          )}
        >
          {headerLabel}
        </CardTitle>
        <CardDescription className="text-center">
          {headerDescription}
        </CardDescription>
      </CardHeader>
      <CardContent>
        {showSocial && <SocialMedia />}
        <div className="py-3 flex items-center text-xs text-gray-400 uppercase before:flex-1 before:border-t before:border-gray-200 before:me-6 after:flex-1 after:border-t after:border-gray-200 after:ms-6 dark:text-neutral-500 dark:before:border-neutral-600 dark:after:border-neutral-600">
          Or
        </div>
        {children}
      </CardContent>
      <CardFooter className="flex-col">
        <div className="flex items-center justify-center gap-2 mt-6">
          <span className="text-sm text-muted-foreground ">
            {backButtonHeader}
          </span>
          <Link href={backButtonHref} className="font-bold text-blue-500">
            {backButtonLabel}
          </Link>
        </div>
      </CardFooter>
    </Card>
  );
};

export default CardWrapper;
