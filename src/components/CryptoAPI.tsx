import { useEffect, useState } from "react";
import AppTemplate2 from "./AppTemplate2";
import Button1 from "./Button1";
import axios from "axios";

const CryptoAPI = () => {
  type Crypto = {
    name: string;
    current_price: number;
    market_cap_change_percentage_24h: number;
  };

  const cryptoURL =
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=1";

  const loadCryptoEntries = (): Crypto[] => {
    const data = localStorage.getItem("cryptoEntries");
    if (!data) return [];
    try {
      return JSON.parse(data);
    } catch {
      return [];
    }
  };

  const [cryptoEntries, setCryptoEntries] =
    useState<Crypto[]>(loadCryptoEntries);

  const loadCoins = async () => {
    const response = await axios.get(cryptoURL);
    setCryptoEntries(response.data);
  };

  useEffect(() => {
    localStorage.setItem("cryptoEntries", JSON.stringify(cryptoEntries));
  }, [cryptoEntries]);

  return (
    <AppTemplate2>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold text-gray-800">Crypto Market</h2>
        <Button1 onClick={loadCoins}>Load API</Button1>
      </div>

      <div className="space-y-2">
        {cryptoEntries.map((entry) => (
          <div
            className="flex items-center justify-between bg-white
          border border-gray-200 rounded-xl px-4 py-3 shadow-sm"
          >
            <div className="font-medium text-gray-700">{entry.name}</div>
            <div className="flex items-center gap-6">
              <div className="w-24 text-right text-gray-900 font-semibold">
                {entry.current_price} $
              </div>
              <div
                className={`w-24 text-right font-medium ${
                  entry.market_cap_change_percentage_24h >= 0
                    ? "text-green-600"
                    : "text-red-600"
                }`}
              >
                {entry.market_cap_change_percentage_24h.toFixed(2)} %
              </div>
            </div>
          </div>
        ))}
      </div>
    </AppTemplate2>
  );
};

export default CryptoAPI;
