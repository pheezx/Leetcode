var isAnagram = function (s, t) {
    if(s.length !== t.length) return false
    const N = s.length
    const letterFrequency = {}
    for(let i=0;i<N;i++) {
        if(!letterFrequency[s[i]]) letterFrequency[s[i]] = 0
        if(!letterFrequency[t[i]]) letterFrequency[t[i]] = 0
        letterFrequency[s[i]]++
        letterFrequency[t[i]]--
    }
    for(let ch in letterFrequency) {
        if(letterFrequency[ch]!==0) return false
    }
    return true
};
