'use client';

import { cn } from '@/lib/utils';
import { UploadCloud } from 'lucide-react';
import Image from 'next/image';
import { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { FormControl, FormItem, FormMessage } from './form';
import { useFormContext } from 'react-hook-form';

interface FileUploadProps {
  value?: string;
  onChange?: (url: string) => void;
  disabled?: boolean;
  className?: string;
  name: string;
}

export function FileUpload({
  value,
  onChange,
  disabled,
  className,
  name,
}: FileUploadProps) {
  const [preview, setPreview] = useState(value);
  const { setValue } = useFormContext();

  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      const file = acceptedFiles[0];
      if (file) {
        const reader = new FileReader();
        reader.onloadend = () => {
          const base64String = reader.result as string;
          setPreview(base64String);
          setValue(name, base64String);
          onChange?.(base64String);
        };
        reader.readAsDataURL(file);
      }
    },
    [onChange, setValue, name]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'image/*': ['.png', '.jpg', '.jpeg', '.gif'],
    },
    maxFiles: 1,
    disabled,
  });

  return (
    <FormItem>
      <FormControl>
        <div
          {...getRootProps()}
          className={cn(
            'relative flex cursor-pointer flex-col items-center justify-center rounded-full border-2 border-dashed border-muted-foreground/25 transition-colors hover:border-muted-foreground/50',
            isDragActive && 'border-primary',
            disabled && 'cursor-not-allowed opacity-50',
            className
          )}
        >
          <input {...getInputProps()} />

          {preview ? (
            <div className="relative h-full w-full">
              <Image
                src={preview}
                alt="Preview"
                fill
                className="rounded-full object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                priority
              />
            </div>
          ) : (
            <div className="flex h-full w-full flex-col items-center justify-center gap-2 p-4 text-center">
              <UploadCloud className="h-10 w-10 text-muted-foreground" />
              <div className="text-sm text-muted-foreground">
                <p>Arraste uma imagem ou clique para fazer upload</p>
                <p className="text-xs">PNG, JPG até 5MB</p>
              </div>
            </div>
          )}
        </div>
      </FormControl>
      <FormMessage />
    </FormItem>
  );
} 