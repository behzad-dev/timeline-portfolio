'use client';

import * as React from 'react';
import { Button } from '@/components/ui/button';

type CopyButtonProps = {
  value: string;
  label?: string;
  copiedLabel?: string;
  className?: string;
};

export function CopyButton({
  value,
  label = 'Copy email',
  copiedLabel = 'Copied!',
  className,
}: CopyButtonProps) {
  const [copied, setCopied] = React.useState(false);

  async function onCopy() {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1200);
    } catch {
      // fallback (older browsers)
      const el = document.createElement('textarea');
      el.value = value;
      el.style.position = 'fixed';
      el.style.left = '-9999px';
      document.body.appendChild(el);
      el.select();
      document.execCommand('copy');
      document.body.removeChild(el);

      setCopied(true);
      window.setTimeout(() => setCopied(false), 1200);
    }
  }

  return (
    <Button
      type="button"
      variant="secondary"
      size="lg"
      onClick={onCopy}
      className={className}
    >
      {copied ? copiedLabel : label}
    </Button>
  );
}
