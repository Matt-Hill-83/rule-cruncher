import React from "react"
import {
  useCryptoPrices,
  // useCryptoTickers,
  CryptoPriceProvider,
} from "react-realtime-crypto-prices"

const HookExample = () => {
  const prices = useCryptoPrices(["btc", "eth"])
  // const tickers = useCryptoTickers(["btc", "eth"])
  return (
    <>
      <div>Live Prices</div>
      <div>{JSON.stringify(prices)}</div>

      {/* <div>Live Tickers</div>
      <div>{JSON.stringify(tickers)}</div> */}
    </>
  )
}

// https://www.cryptocompare.com/cryptopian/api-keys
// https://min-api.cryptocompare.com/documentation?key=Historical&cat=dataHistominute
// https://min-api.cryptocompare.com/data/v2/histominute?fsym=BTC&tsym=GBP&limit=10
const CryptoData = () => {
  const apiKey =
    "5b09df401198c72700d335be8746741354230831a11f500e30f9df318a008e87"
  return (
    <div className="App">
      <CryptoPriceProvider cryptoCompareApiKey={apiKey}>
        <HookExample />
      </CryptoPriceProvider>
    </div>
  )
}

export default CryptoData
