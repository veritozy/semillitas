import { defineStorage } from '@aws-amplify/backend';

export const storage = defineStorage({
  name: 'semillitasDrive',
  access: (allow) => ({
    'recursos/*': [
      allow.guest.to(['read']),
      allow.authenticated.to(['read'])
    ],
    'portadas/*': [
      allow.guest.to(['read']),
      allow.authenticated.to(['read'])
    ],
    'audios/*': [
      allow.guest.to(['read']),
      allow.authenticated.to(['read'])
    ]
  })
});