import React, { createContext, useContext, useState } from "react";

import { assets as initialAssets, Asset } from "@/data/assets";

type AssetUpdates = {
  assetId?: string;
  assetName?: string;
  location?: string;
  currentTag?: string | null;
  status?: "Assigned" | "Not Assigned";
};

type AssetContextType = {
  assets: Asset[];
  updateAsset: (originalAssetId: string, updates: AssetUpdates) => void;
};

const AssetContext = createContext<AssetContextType | undefined>(undefined);

export function AssetProvider({ children }: { children: React.ReactNode }) {
  const [assets, setAssets] = useState<Asset[]>(initialAssets);

  const updateAsset = (originalAssetId: string, updates: AssetUpdates) => {
    setAssets((previousAssets) =>
      previousAssets.map((asset) => {
        if (asset.assetId !== originalAssetId) {
          return asset;
        }
        return {
          ...asset,
          ...updates,
        };
      }),
    );
  };

  return (
    <AssetContext.Provider
      value={{
        assets,
        updateAsset,
      }}
    >
      {children}
    </AssetContext.Provider>
  );
}

export function useAsset() {
  const context = useContext(AssetContext);

  if (!context) {
    throw new Error("useAsset must be used inside AssetProvider");
  }

  return context;
}
