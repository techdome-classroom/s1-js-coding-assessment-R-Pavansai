const decodeTheRing = function (s, p) {
  const m = s.length;
  const n = p.length;

  // Initialize the DP table
  const dp = Array(m + 1).fill(null).map(() => Array(n + 1).fill(false));

  // Base case: empty string matches with empty pattern
  dp[0][0] = true;

  // Handle the case where the pattern starts with '*'
  for (let j = 1; j <= n; j++) {
    if (p[j - 1] === '*') {
      dp[0][j] = dp[0][j - 1];  // '*' can match empty string
    }
  }

  // Fill the DP table
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      const charMessage = s[i - 1];
      const charPattern = p[j - 1];

      if (charPattern === charMessage || charPattern === '?') {
        // If the characters match or it's a '?', we can match
        dp[i][j] = dp[i - 1][j - 1];
      } else if (charPattern === '*') {
        // '*' can match zero or more characters
        dp[i][j] = dp[i][j - 1] || dp[i - 1][j];
      }
    }
  }

  // Return the result stored in dp[m][n] (match for the full string and full pattern)
  return dp[m][n];
  };
  
  module.exports = decodeTheRing;
