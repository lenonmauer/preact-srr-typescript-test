import { h, createContext, ComponentChildren } from 'preact'
import { useState, useContext, StateUpdater } from 'preact/hooks'

type CounterContext = [number, StateUpdater<number>]

const CounterContext = createContext<[number, StateUpdater<number>]>(
  [] as unknown as CounterContext
)

type CounterProviderProps = {
  children: ComponentChildren
}

export function CounterProvider({ children }: CounterProviderProps) {
  const state = useState(0)

  return <CounterContext.Provider value={state}>{children}</CounterContext.Provider>
}

export function useCounter() {
  return useContext(CounterContext)
}
