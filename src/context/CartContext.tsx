import React, { createContext, useContext, useEffect, useMemo, useState } from "react"

export type CartItem = { id: number; name: string; price: number; image: string; qty: number }
type Cart = Record<number, CartItem>

type CartCtx = {
  cart: Cart
  add: (item: Omit<CartItem, "qty">, qty?: number) => void
  dec: (id: number) => void
  remove: (id: number) => void
  clear: () => void
  total: number
  count: number
}

const noop = () => {}
const defaultCtx: CartCtx = {
  cart: {},
  add: noop,
  dec: noop,
  remove: noop,
  clear: noop,
  total: 0,
  count: 0,
}

const Ctx = createContext<CartCtx | undefined>(undefined)

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState<Cart>(() => {
    try { return JSON.parse(localStorage.getItem("cart") || "{}") } catch { return {} }
  })

  useEffect(() => { localStorage.setItem("cart", JSON.stringify(cart)) }, [cart])

  const add: CartCtx["add"] = (item, qty = 1) =>
    setCart(prev => {
      const current = prev[item.id]?.qty ?? 0
      return { ...prev, [item.id]: { ...item, qty: current + qty } }
    })

  const dec = (id: number) =>
    setCart(prev => {
      const current = prev[id]?.qty ?? 0
      if (current <= 1) { const { [id]: _, ...rest } = prev; return rest }
      return { ...prev, [id]: { ...prev[id], qty: current - 1 } }
    })

  const remove = (id: number) => setCart(prev => { const { [id]: _, ...rest } = prev; return rest })
  const clear = () => setCart({})

  const total = useMemo(() => Object.values(cart).reduce((a, it) => a + it.price * it.qty, 0), [cart])
  const count = useMemo(() => Object.values(cart).reduce((a, it) => a + it.qty, 0), [cart])

  const value: CartCtx = { cart, add, dec, remove, clear, total, count }
  return <Ctx.Provider value={value}>{children}</Ctx.Provider>
}

/** Hook seguro: si el Provider no está montado, devuelve un contexto vacío en lugar de lanzar error */
export const useCart = () => useContext(Ctx) ?? defaultCtx
