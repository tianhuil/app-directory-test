'use server';

import { createSafeActionClient } from 'next-safe-action';
import z from 'zod';
import { delay } from '../common';

const actionClient = createSafeActionClient();

export const greetUser = actionClient
  .schema(
    z.object({
      name: z.string(),
    })
  )
  .action(async ({ parsedInput: { name } }) => {
    await delay(1000);
    return { message: `Hello ${name}!` };
  });
