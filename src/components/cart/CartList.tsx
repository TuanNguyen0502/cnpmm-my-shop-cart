import React from "react";
import { CartItem } from "./CartItem";
import type { Product } from "../../hooks/useCart";
import "../../style.css";

interface CartListProps {
  items: Product[];
  onRemove: (id: string | number) => void;
  onUpdate: (id: string | number, qty: number) => void;
}

export const CartList: React.FC<CartListProps> = ({
  items,
  onRemove,
  onUpdate,
}) => {
  const totalAmount = items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div style={{ padding: "10px" }}>
      {items.length === 0 ? (
        <p style={{ textAlign: "center", color: "#888" }}>
          Giỏ hàng đang trống
        </p>
      ) : (
        <>
          {items.map((item) => (
            <CartItem
              key={item.id}
              item={item}
              onRemove={onRemove}
              onUpdate={onUpdate}
            />
          ))}

          <div className="msc-cart-total">
            Tổng cộng: ${totalAmount.toLocaleString()}
          </div>
        </>
      )}
    </div>
  );
};
