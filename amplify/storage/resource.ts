import { defineStorage } from '@aws-amplify/backend';

export const storage = defineStorage({
  name: 'semillitasDrive',
  access: (allow) => ({
    'recursos/*': [
      allow.authenticated.to(['read']),
      allow.groups(['Docentes']).to(['read']),
      allow.groups(["Admin"]).to(['read', 'write', 'delete']),
    ],
    'portadas/*': [
      allow.guest.to(['read']),
      allow.authenticated.to(['read']),
      allow.groups(['Docentes']).to(['read']),
      allow.groups(["Admin"]).to(['read', 'write', 'delete']),      
    ],
    'audios/*': [
      allow.guest.to(['read']),
      allow.authenticated.to(['read']),
      allow.groups(['Docentes']).to(['read']),
      allow.groups(["Admin"]).to(['read', 'write', 'delete']),      
    ]
  })
});