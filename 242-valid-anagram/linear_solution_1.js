var isAnagram = function (s, t) {
  if (s.length !== t.length) return false;
  const sCount = {};
  const tCount = {};
  const N = s.length;
  for (let i = 0; i < N; i++) {
    if (!sCount[s[i]]) sCount[s[i]] = 0;
    if (!tCount[t[i]]) tCount[t[i]] = 0;
    sCount[s[i]]++;
    tCount[t[i]]++;
  }
  for (let ch in sCount) {
    if (sCount[ch] !== tCount[ch]) return false;
  }
  return true;
};
