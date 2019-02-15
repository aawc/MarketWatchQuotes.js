# MarketWatchQuotes.js
A simple code snippet to capture the current price for a symbol from MarketWatch.com

## How to use it

One of the ways to use it is in Google Sheets.

Google Sheets provides a convenienct function named `FINANCE()` to query stock
prices but if that doesn't work for you, you can go to the script editor and
paste the contents of `MarketWatchQuotes.js/MarketWatchQuotes.js` there.

Then, you can query the stock price of any symbol supported by MarketWatch using
the function call `GETPRICE()`. For example: `GETPRICE("VTSAX")`.
