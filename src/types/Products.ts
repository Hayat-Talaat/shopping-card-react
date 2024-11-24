export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  quantity?: number;
  rating: {
    rate: number;
    count: number;
  };
}

export interface CartItem extends Product {
  quantity: number;
}

export interface CartState {
  items: CartItem[];
  total: number;
  notification: null | string;
}

export type Action =
  | { type: "ADD_TO_CART"; payload: CartItem }
  | { type: "REMOVE_FROM_CART"; payload: number };

export type CartContextType = {
  state: CartState;
  dispatch: React.Dispatch<Action>;
};

export interface NotificationProps {
  message: string;
  show: boolean;
  onClose: () => void;
}
