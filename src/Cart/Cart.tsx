import CartSection from "./Components/CartSection";
import TotalSection from "./Components/TotalSection";

export default function CartPage() {
  return (
    <section className="grid grid-cols-6 min-h-screen p-8">
      <div className="col-span-4 p-6 rounded-lg shadow-lg">
        <CartSection />
      </div>
      <div className="col-span-2 p-6 rounded-lg shadow-lg ml-8">
        <TotalSection />
      </div>
    </section>
  )
}