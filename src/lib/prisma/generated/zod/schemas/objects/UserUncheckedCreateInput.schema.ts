import { z } from 'zod';
import { RoleSchema } from '../enums/Role.schema';
import { AccountUncheckedCreateNestedManyWithoutUserInputObjectSchema } from './AccountUncheckedCreateNestedManyWithoutUserInput.schema';
import { SessionUncheckedCreateNestedManyWithoutUserInputObjectSchema } from './SessionUncheckedCreateNestedManyWithoutUserInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserUncheckedCreateInput> = z
	.object({
		id: z.string().optional(),
		name: z.string().optional().nullable(),
		email: z.string().optional().nullable(),
		emailVerified: z.date().optional().nullable(),
		isInvited: z.boolean().optional(),
		image: z.string().optional().nullable(),
		role: z.lazy(() => RoleSchema).optional(),
		accounts: z.lazy(() => AccountUncheckedCreateNestedManyWithoutUserInputObjectSchema).optional(),
		sessions: z.lazy(() => SessionUncheckedCreateNestedManyWithoutUserInputObjectSchema).optional(),
	})
	.strict();

export const UserUncheckedCreateInputObjectSchema = Schema;