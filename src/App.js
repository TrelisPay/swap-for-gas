
import React from "react";
import { SquidWidget } from '@0xsquid/widget';
import './App.css';


export const WidgetPage = () => {
  return ;
};

function App() {
  return (
    
    <div className="App">
      
      <header className="App-header">
        <h1 style={{ textAlign: 'center' }}>Swap for Gas</h1>
        <h3 style={{ textAlign: 'center' }}>Get gas for an empty wallet</h3>
      </header>

      <div className="App-container" style={{ display: 'flex', justifyContent: 'center'}}>
        
      

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
              "mainLogoUrl": "https://www.trelis.com/assets/trelis-2e0ed160.png",
              "comingSoonChainIds": [
                  "cosmoshub-4",
                  "injective-1",
                  "axelar-dojo-1",
                  "kichain-2"
              ],
              "titles": {
                  "swap": "",
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

      <footer className="App-footer" style={{ textAlign: 'center' }}>
        <p style={{ color: '#FFFFFF' }}>Swap-for-gas is in beta. Use at your own risk and only for small amounts.</p>
        <button style={{ backgroundColor: '#4d4d4d', color: '#FFFFFF', padding: '10px 20px', borderRadius: '5px', border: 'none', margin: '10px' }}><a href="https://docs.trelis.com/products/swap-for-gas" target="_blank" rel="noopener noreferrer" style={{ color: '#FFFFFF', textDecoration: 'none' }}>Documentation</a></button>
        <button style={{ backgroundColor: '#329239', color: '#FFFFFF', padding: '10px 20px', borderRadius: '5px', border: 'none', margin: '10px' }} onClick={() => {
          navigator.clipboard.writeText('0x938d5f203D0AF635691172eDC0499dE929170AfA');
          alert('Donation address copied to clipboard!');
        }}>Copy Donation Address (EVM only)</button>
      </footer>

    </div>
    
  );
}

export default App;
