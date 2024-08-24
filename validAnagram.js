isAnagram(s, t) {
    const hashMap = {};

    if(s.length !== t.length) return false;

    for(let i = 0; i < s.length; i++) {
        hashMap[s[i]] = (hashMap[s[i]] || 0) + 1;
    }

    for(let i = 0; i < s.length; i++) {
        if(hashMap[t[i]]) {
            hashMap[t[i]]--
        } else {
            return false;
        }
    }

    for(let val of Object.values(hashMap)) {
        if(val !== 0) return false;
    }
    return true;
}
//t est
