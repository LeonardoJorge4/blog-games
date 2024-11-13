import * as z from 'zod';

const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB

export const profileSchema = z.object({
  name: z
    .string()
    .min(3, 'Nome deve ter pelo menos 3 caracteres')
    .max(100, 'Nome deve ter no máximo 100 caracteres'),
  email: z.string().email('Email inválido'),
  username: z
    .string()
    .min(3, 'Username deve ter pelo menos 3 caracteres')
    .max(50, 'Username deve ter no máximo 50 caracteres'),
  bio: z
    .string()
    .max(500, 'Bio deve ter no máximo 500 caracteres')
    .optional(),
  location: z
    .string()
    .max(100, 'Localização deve ter no máximo 100 caracteres')
    .optional(),
  website: z
    .string()
    .url('Website deve ser uma URL válida')
    .optional()
    .or(z.literal('')),
  avatar: z
    .string()
    .refine(
      (value) => !value || value.startsWith('data:image/') || value.startsWith('http'),
      'Formato de imagem inválido'
    )
    .optional(),
});

export type ProfileFormValues = z.infer<typeof profileSchema>; 