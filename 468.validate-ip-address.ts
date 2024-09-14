/*
 * @lc app=leetcode id=468 lang=typescript
 *
 * [468] Validate IP Address
 *
 * https://leetcode.com/problems/validate-ip-address/description/
 *
 * algorithms
 * Medium (27.28%)
 * Likes:    1035
 * Dislikes: 2714
 * Total Accepted:    170.9K
 * Total Submissions: 624.1K
 * Testcase Example:  '"172.16.254.1"'
 *
 * Given a string queryIP, return "IPv4" if IP is a valid IPv4 address, "IPv6"
 * if IP is a valid IPv6 address or "Neither" if IP is not a correct IP of any
 * type.
 * 
 * A valid IPv4 address is an IP in the form "x1.x2.x3.x4" where 0 <= xi <= 255
 * and xi cannot contain leading zeros. For example, "192.168.1.1" and
 * "192.168.1.0" are valid IPv4 addresses while "192.168.01.1", "192.168.1.00",
 * and "192.168@1.1" are invalid IPv4 addresses.
 * 
 * A valid IPv6 address is an IP in the form "x1:x2:x3:x4:x5:x6:x7:x8"
 * where:
 * 
 * 
 * 1 <= xi.length <= 4
 * xi is a hexadecimal string which may contain digits, lowercase English
 * letter ('a' to 'f') and upper-case English letters ('A' to 'F').
 * Leading zeros are allowed in xi.
 * 
 * 
 * For example, "2001:0db8:85a3:0000:0000:8a2e:0370:7334" and
 * "2001:db8:85a3:0:0:8A2E:0370:7334" are valid IPv6 addresses, while
 * "2001:0db8:85a3::8A2E:037j:7334" and
 * "02001:0db8:85a3:0000:0000:8a2e:0370:7334" are invalid IPv6 addresses.
 * 
 * 
 * Example 1:
 * 
 * 
 * Input: queryIP = "172.16.254.1"
 * Output: "IPv4"
 * Explanation: This is a valid IPv4 address, return "IPv4".
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: queryIP = "2001:0db8:85a3:0:0:8A2E:0370:7334"
 * Output: "IPv6"
 * Explanation: This is a valid IPv6 address, return "IPv6".
 * 
 * 
 * Example 3:
 * 
 * 
 * Input: queryIP = "256.256.256.256"
 * Output: "Neither"
 * Explanation: This is neither a IPv4 address nor a IPv6 address.
 * 
 * 
 * 
 * Constraints:
 * 
 * 
 * queryIP consists only of English letters, digits and the characters '.' and
 * ':'.
 * 
 * 
 */

// @lc code=start
function validIPAddress(queryIP: string): string {
    if (isIPv4(queryIP)) return 'IPv4';
    if (isIPv6(queryIP)) return 'IPv6';
    return 'Neither';
};

function isIPv4(s: string): boolean {
  if (s.length < 7) return false;
  if (s.startsWith('.') || s.endsWith('.')) return false;
  if (s.indexOf('.') === -1) return false;
  const parts = s.split('.');
  if (parts.length !== 4) return false;
  for (const part of parts) {
    if (part.length === 0 || part.length > 3) return false;
    if (part.startsWith('0') && part.length > 1) return false;
    if (!/^\d+$/.test(part)) return false; // only digits
    const num = Number(part);
    if (num < 0 || num > 255) return false;
  }
  return true;
}

function isIPv6(s: string): boolean {
  if (s.length < 15) return false;
  if (s.startsWith(':') || s.endsWith(':')) return false;
  if (s.indexOf(':') === -1) return false;
  const parts = s.split(':');
  if (parts.length !== 8) return false;
  for (const part of parts) {
    if (part.length === 0 || part.length > 4) return false;
    for (const char of part) {
      if (!/[0-9a-fA-F]/.test(char)) return false; // only hex
    }
  }
  return true;
}
// @lc code=end

