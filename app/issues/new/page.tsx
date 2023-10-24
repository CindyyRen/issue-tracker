'use client';

import React from 'react';
import { Button, TextField } from '@radix-ui/themes';
import SimpleMDE from 'react-simplemde-editor';
import { useForm, Controller } from 'react-hook-form';
import axios from 'axios';
import 'easymde/dist/easymde.min.css';
import { useRouter } from 'next/navigation';

interface IssueForm {
  title: String;
  description: String;
}

const NewIssuePage = () => {
  const router = useRouter();
  // register is used for registering input elements within your form.
  //  control: date pickers, custom dropdowns, or "SimpleMDE" text editor.
  const { register, control, handleSubmit } = useForm<IssueForm>();
  const onSubmit = async (data: IssueForm) => {
    await axios.post('/api/issues', data);
    router.push('/issues');
  };
  return (
    <form className="max-w-xl space-y-3" onSubmit={handleSubmit(onSubmit)}>
      <TextField.Root>
        <TextField.Input placeholder="Title" {...register('title')} />
      </TextField.Root>
      <Controller
        name="description"
        control={control}
        // field object contains various props (e.g., value, onChange, onBlur)
        render={({ field }) => (
          <SimpleMDE placeholder="Description" {...field} />
        )}
      />
      <Button>Submit New Issue</Button>
    </form>
  );
};

export default NewIssuePage;
