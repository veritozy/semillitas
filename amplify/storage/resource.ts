import { defineStorage } from '@aws-amplify/backend';

export const storage = defineStorage({
  name: 'semillitasDrive',
  access: (allow) => ({
    'recursos/*': [
        allow.guest.to(['read']),
    ],
  })
});