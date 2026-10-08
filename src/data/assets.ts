export type Asset = {
  assetId: string;
  assetName: string;
  location: string;
  currentTag: string | null;
  status: "Assigned" | "Not Assigned";
};

export const assets: Asset[] = [
  {
    assetId: "AS1-10243",
    assetName: "Laptop / Device",
    location: "Hyderabad",
    currentTag: "EDG-000784",
    status: "Assigned",
  },

  {
    assetId: "AS1-10244",
    assetName: "Dell Monitor",
    location: "Hyderabad",
    currentTag: "EDG-000321",
    status: "Assigned",
  },

  {
    assetId: "AS1-10245",
    assetName: "MacBook Pro",
    location: "Bangalore",
    currentTag: null,
    status: "Not Assigned",
  },

  {
    assetId: "AS1-10246",
    assetName: "HP Laptop",
    location: "Hyderabad",
    currentTag: null,
    status: "Not Assigned",
  },

  {
    assetId: "AS1-10247",
    assetName: "GPS Tracker",
    location: "Chennai",
    currentTag: "EDG-000987",
    status: "Assigned",
  },

  {
    assetId: "ISIN-RLP-094",
    assetName: "Dell Latitude 5520",
    location: "Chennai",
    currentTag: "BDVWPG3",
    status: "Assigned",
  },
];