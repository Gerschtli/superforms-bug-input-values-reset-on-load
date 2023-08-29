import { superValidate } from 'sveltekit-superforms/server';
import { z } from 'zod';

const schema = z.object({
	field1: z.string(),
	field2: z.string()
});

export const load = async () => {
	const form = await superValidate(schema);

	return { form };
};
