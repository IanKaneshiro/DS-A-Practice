var maxProfit = function (prices) {
  let buy = 0;
  let sell = 1;
  let maxProfit = 0;

  while (sell < prices.length) {
    if (prices[sell] > prices[buy]) {
      const profit = prices[sell] - prices[buy];
      maxProfit = Math.max(maxProfit, profit);
    } else {
      buy = sell;
    }
    sell++;
  }
  return maxProfit;
};

/*
Time: O(n x m) where n is the rows and m is the col of the matrix
Space: O(n x m) where n is the rows and m is the col of the matrix
*/
