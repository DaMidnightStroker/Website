import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

export default function HoneyMenu() {
  const prices = { 1: 10, 2: 15 };
  const [quantity, setQuantity] = useState(1);
  const [total, setTotal] = useState(prices[1]);

  const handleQuantityChange = (qty) => {
    setQuantity(qty);
    setTotal(prices[qty] || prices[1] * qty);
  };

  return (
    <div
      className="flex flex-col items-center p-6 min-h-screen bg-yellow-200"
      style={{
        backgroundImage: "url('https://www.transparenttextures.com/patterns/honeycomb.png')",
        backgroundSize: "200px 200px",
      }}
    >
      <motion.h1
        className="text-4xl font-bold mb-6 text-gray-900 uppercase"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        VIP Royal Honey
      </motion.h1>

      <motion.img
        src="https://fox59.com/wp-content/uploads/sites/21/2022/07/1_2-1.png?w=900"
        alt="Honey Pack"
        className="w-96 h-96 object-cover rounded-lg shadow-lg mb-6 border-4 border-yellow-500"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      />

      <Card className="p-6 w-[500px] text-center shadow-xl bg-white rounded-2xl border-2 border-yellow-400">
        <CardContent>
          <p className="text-2xl font-semibold text-gray-800">VIP Royal Honey</p>
          <p className="text-gray-600 mb-4">1 Pack for $10 | 2 Packs for $15</p>

          <div className="flex justify-center mt-4 space-x-3">
            {[1, 2].map((qty) => (
              <Button
                key={qty}
                variant={quantity === qty ? "default" : "outline"}
                className="px-6 py-2 rounded-lg font-medium text-lg"
                onClick={() => handleQuantityChange(qty)}
              >
                {qty}
              </Button>
            ))}
          </div>

          <p className="text-3xl font-bold mt-4 text-gray-900">Total: ${total}</p>

          <div className="mt-6 text-left">
            <h2 className="text-xl font-semibold text-gray-900 mb-2">Product Description</h2>
            <p className="text-gray-700 mb-4">
              VIP Royal Honey is a natural supplement designed to enhance vitality and performance. Made with high-quality ingredients, this premium honey contains Cialis and a blend of potent herbs that provide strong aphrodisiac effects. It is the authentic, original formula trusted by many for its performance-enhancing benefits.
            </p>

            <h3 className="text-lg font-semibold text-gray-900 mb-2">Customer Review</h3>
            <div className="bg-gray-100 p-4 rounded-lg shadow mb-4">
              <div className="flex items-center">
                <p className="text-gray-800 font-semibold mr-2">Mantra</p>
                <div className="flex">
                  {[...Array(5)].map((_, index) => (
                    <Star key={index} className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                  ))}
                </div>
              </div>
            </div>

            <h3 className="text-lg font-semibold text-gray-900 mb-2">Payment Information</h3>
            <p className="text-gray-700">
              To place an order, please make a payment via PayID to the following address:
            </p>
            <p className="text-gray-900 font-semibold">example-payid@example.com</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
