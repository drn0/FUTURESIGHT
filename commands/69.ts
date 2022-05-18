import { ICommand } from 'wokcommands'

export default {
  category: 'Testing',
  description: 'Expresses peak humour and wit',

  slash: 'both',
  testOnly: true,

  callback: ({}) => {
    return 'hehe funny sex number'
  },
} as ICommand