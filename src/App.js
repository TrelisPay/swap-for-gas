
import React from "react";
import { SquidWidget } from '@0xsquid/widget';
import './App.css';


export const WidgetPage = () => {
  return ;
};

function App() {
  return (
    
    <div className="App">
      
      {/* <header className="App-header">
  
        <h1>
          This Product.
        </h1>

      </header> */}


      <SquidWidget config={
      {
          "companyName": "Squid",
          defaultTokens: [
            {
              address: "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE", // Token address for ETH
              chainId: 1, // Chain ID for Ethereum
            },
            {
              address: "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE", // Token address for Matic
              chainId: 137, // Chain ID for Polygon
            },
          ],
          initialFromChainId: 137, // Polygon
          initialToChainId: 42161, // Arbitrum
          "style": {
            "neutralContent": "#1a692d",
            "baseContent": "#1a202c",
            "base100": "#e0f9d8",
            "base200": "#ffffff",
            "base300": "#edf2f6",
            "error": "#ED6A5E",
            "warning": "#FFB155",
            "success": "#e2f9d8",
            "primary": "#329239",
            "secondary": "#F89CC3",
            "secondaryContent": "#F7F6FB",
            "neutral": "#FFFFFF",
            "roundedBtn": "10px",
            "roundedBox": "1rem",
            "roundedDropDown": "20rem",
            "displayDivider": true
          },
          "slippage": 1.5,
          "infiniteApproval": false,
          "instantExec": false,
          "apiUrl": "https://api.squidrouter.com",
          "comingSoonChainIds": [
              "cosmoshub-4",
              "injective-1",
              "axelar-dojo-1",
              "kichain-2"
          ],
          "titles": {
              "swap": "Swap for Gas",
              "settings": "Settings",
              "wallets": "Wallets",
              "tokens": "Tokens",
              "chains": "Chains",
              "history": "History",
              "transaction": "Transaction",
              "allTokens": "Tokens",
              "destination": "Destination address"
          },
          "priceImpactWarnings": {
              "warning": 3,
              "critical": 5
          }
      }
      } />

    </div>
  );
}

export default App;
