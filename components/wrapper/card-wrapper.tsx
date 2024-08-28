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
interface CardWrapper extends ChildrenProps {
  headerLabel: string;
  headerDescription: string;
  backButtonLabel?: string;
  backButtonHeader?: string;
  backButtonHref?: string;
  showSocial?: boolean;
}
const CardWrapper: React.FC<CardWrapper> = ({
  backButtonHref,
  backButtonLabel,
  backButtonHeader,
  children,
  headerLabel,
  showSocial,
  headerDescription,
}) => {
  return (
    <Card className="max-w-md">
      <CardHeader>
        <CardTitle>{headerLabel}</CardTitle>
        <CardDescription>{headerDescription}</CardDescription>
      </CardHeader>
      <CardContent>{children}</CardContent>
      {showSocial && (
        <CardFooter>
          <SocialMedia />
        </CardFooter>
      )}
      {backButtonHref && (
        <CardFooter>
          <div className="flex items-center justify-center gap-2">
            <span className="text-sm text-muted">{backButtonHeader}</span>
            <Link href={backButtonHref} className="font-bold">
              {backButtonLabel}
            </Link>
          </div>
        </CardFooter>
      )}
    </Card>
  );
};

export default CardWrapper;
