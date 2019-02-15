var MARKETWATCH_PRICE_URL_PREFIX = "http://bigcharts.marketwatch.com/advchart/frames/frames.asp?symb=";
 
function GETPRICE(symbol) {
  var url = MARKETWATCH_PRICE_URL_PREFIX + symbol;
  var resp = UrlFetchApp.fetch(url).getContentText();
 
  return parseFloat(_marketwatch_extractLastPrice(resp));
}
 
function _marketwatch_extractLastPrice(inputMarkup) {
  inputMarkup = inputMarkup.substring(inputMarkup.indexOf("Last:"));
  
   return +inputMarkup.substring(0, inputMarkup.indexOf("</div>"))
     .substring(inputMarkup.indexOf("<div>"))
     .replace(/<div>/, "")
     .replace(/,/g, '');
}
