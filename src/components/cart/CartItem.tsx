import React from "react";
import { Button } from "../ui/Button";
import { Input } from "../ui/Input";
import type { Product } from "../../hooks/useCart";
import "../../style.css";

interface CartItemProps {
  item: Product;
  onRemove: (id: string | number) => void;
  onUpdate: (id: string | number, qty: number) => void;
}

export const CartItem: React.FC<CartItemProps> = ({
  item,
  onRemove,
  onUpdate,
}) => {
  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = parseInt(e.target.value);
    if (!isNaN(val) && val > 0) {
      onUpdate(item.id, val);
    }
  };

  return (
    <div className="msc-cart-item">
      <div>
        <div style={{ fontWeight: "bold" }}>{item.name}</div>
        <div style={{ color: "#666", fontSize: "0.9rem" }}>
          Đơn giá: ${item.price.toLocaleString()}
        </div>
      </div>

      <div className="msc-cart-actions">
        <Input
          type="number"
          min={1}
          value={item.quantity}
          onChange={handleQuantityChange}
          style={{ width: "60px", marginBottom: 0 }}
        />
        <Button variant="danger" onClick={() => onRemove(item.id)}>
          Xóa
        </Button>
      </div>
    </div>
  );
};
