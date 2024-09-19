/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
  if (n == 0) return 1
  if (n == 1) return x 
  if (x == 1) return 1
  if (x == -1) {
      if (n%2 ==0 ) return 1
      else return -1
  }

  isneg = n < 0
  n = Math.abs(n)

  pow = posPow(x, n)
  
  if (isneg) return (1 / pow)
  else return pow

};

function posPow(x, n) {
  
  if (n > 1000) {
      q = parseInt(n/1000)
      rem = n % 1000

      cPow = posPow(x, 1000)
      cPow = posPow(cPow, q)
      return cPow * posPow(x, rem)

  }
  accum = 1

  for (let i = 1; i <= n; i++) {
      accum *= x
  }
  return accum
}