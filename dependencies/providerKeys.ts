import type { InjectionKey } from 'vue'

const messageKey = Symbol() as InjectionKey<{
  message: Ref<string>
  updateMessage: (newVal: string) => void
}>

export { messageKey }
