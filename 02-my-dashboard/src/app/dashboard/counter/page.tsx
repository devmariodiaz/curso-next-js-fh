import { CartCounter } from "@/app/shopping-cart";


export const metadata = {
    title: "Counter",
    description: "Counter page"
    
}

export default function CounterPage() {

  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <span>Productos en el carrito de compras</span>
      <CartCounter value={ 10 } />
    </div>
  );
}

