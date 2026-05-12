import { orders } from "@/data/orders";
import { useEffect } from "react";
import { useOrderStore } from "../store/useOrderStore";

export function useLoadOrders() {
  const setOrders = useOrderStore((state) => state.setOrders);

  useEffect(() => {
    async function loadOrders() {
      const data = orders;
      setOrders(data);
    }

    loadOrders();
  }, []);
}
