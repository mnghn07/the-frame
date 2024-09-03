import { AppState } from "stores/models/client.type";
import { create } from "zustand";

interface IAppState extends AppState {
  setOffline: () => void;
}

const useAppStore = create<IAppState>((set, get) => ({
  offline: false,
  setOffline: () => set({ offline: !get().offline })
}));

export default useAppStore;
