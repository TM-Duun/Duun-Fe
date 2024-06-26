import {create} from "zustand";

interface CartState {
    itemCount: number;
    addItem: () => void;
    removeItem: () => void;
}
  
const useStore = create<CartState>(set => ({
    itemCount: 0,
    addItem: () => set(state => ({ itemCount: state.itemCount+1 })),
    removeItem: () => set(state => ({ itemCount: state.itemCount-1 })),
  }));


export default useStore;