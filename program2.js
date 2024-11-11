const decodeTheRing = function (s, p) {
const m = s.length; // Length of the message
  const n = p.length; // Length of the pattern

 
  const dp = Array(m + 1).fill(null).map(() => Array(n + 1).fill(false));

 
  dp[0][0] = true;

 
  for (let j = 1; j <= n; j++) {
    if (p[j - 1] === '*') {
      dp[0][j] = dp[0][j - 1]; // '*' can match zero characters
    }
  }

 
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      const charMessage = s[i - 1];
      const charPattern = p[j - 1];

      if (charPattern === charMessage || charPattern === '?') {
       
        dp[i][j] = dp[i - 1][j - 1];
      } else if (charPattern === '*') {
      
        dp[i][j] = dp[i][j - 1] || dp[i - 1][j];
      }
    }
  }

 
  return dp[m][n];
  };
  
  module.exports = decodeTheRing;
