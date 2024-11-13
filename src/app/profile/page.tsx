'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { profileSchema, type ProfileFormValues } from '@/lib/schemas/profile.schema';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { MapPin, Globe, Mail, AtSign } from 'lucide-react';
import { useState } from 'react';
import { FileUpload } from '@/components/ui/file-upload';

export default function ProfilePage() {
  const [isEditing, setIsEditing] = useState(false);

  const form = useForm<ProfileFormValues>({
    resolver: zodResolver(profileSchema),
    defaultValues: {
      name: 'John Doe',
      email: 'john.doe@example.com',
      username: 'johndoe',
      bio: 'Apaixonado por games e tecnologia',
      location: 'São Paulo, Brasil',
      website: 'https://johndoe.com',
      avatar: 'https://github.com/shadcn.png',
    },
  });

  function onSubmit(data: ProfileFormValues) {
    console.log(data);
    setIsEditing(false);
  }

  return (
    <div className="space-y-8 py-8">
      <div className="flex flex-col gap-4">
        <h1 className="text-4xl font-bold">Perfil</h1>
        <p className="text-muted-foreground">
          Gerencie suas informações pessoais e preferências
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-[280px_1fr]">
        {/* Sidebar com Avatar e Informações Rápidas */}
        <aside className="space-y-6">
          <div className="flex flex-col items-center space-y-4">
            <Form {...form}>
              <form>
                <FormField
                  control={form.control}
                  name="avatar"
                  render={({ field }) => (
                    <FileUpload
                      name="avatar"
                      value={field.value}
                      onChange={field.onChange}
                      disabled={!isEditing}
                      className="h-40 w-40"
                    />
                  )}
                />
              </form>
            </Form>
            <div className="text-center">
              <h2 className="text-xl font-semibold">{form.getValues('name')}</h2>
              <p className="text-sm text-muted-foreground">
                @{form.getValues('username')}
              </p>
            </div>
          </div>

          <div className="space-y-3">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin className="h-4 w-4" />
              <span>{form.getValues('location')}</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Globe className="h-4 w-4" />
              <a
                href={form.getValues('website')}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary"
              >
                {form.getValues('website')}
              </a>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Mail className="h-4 w-4" />
              <span>{form.getValues('email')}</span>
            </div>
          </div>
        </aside>

        {/* Formulário Principal */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-medium">Informações do Perfil</h3>
            <Button
              variant={isEditing ? 'ghost' : 'default'}
              onClick={() => setIsEditing(!isEditing)}
            >
              {isEditing ? 'Cancelar' : 'Editar Perfil'}
            </Button>
          </div>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nome Completo</FormLabel>
                    <FormControl>
                      <Input {...field} disabled={!isEditing} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="grid gap-6 md:grid-cols-2">
                <FormField
                  control={form.control}
                  name="username"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Username</FormLabel>
                      <FormControl>
                        <div className="relative">
                          <AtSign className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                          <Input
                            className="pl-8"
                            {...field}
                            disabled={!isEditing}
                          />
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input
                          type="email"
                          {...field}
                          disabled={!isEditing}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="bio"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Bio</FormLabel>
                    <FormControl>
                      <Textarea
                        {...field}
                        disabled={!isEditing}
                        className="resize-none"
                      />
                    </FormControl>
                    <FormDescription>
                      Escreva um pouco sobre você
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="grid gap-6 md:grid-cols-2">
                <FormField
                  control={form.control}
                  name="location"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Localização</FormLabel>
                      <FormControl>
                        <Input {...field} disabled={!isEditing} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="website"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Website</FormLabel>
                      <FormControl>
                        <Input {...field} disabled={!isEditing} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              {isEditing && (
                <div className="flex justify-end gap-4">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => {
                      form.reset();
                      setIsEditing(false);
                    }}
                  >
                    Cancelar
                  </Button>
                  <Button type="submit">Salvar Alterações</Button>
                </div>
              )}
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
} 