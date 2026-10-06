class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length !== t.length) return false;
        
        const sm = new Map()
        const tm = new Map()
        
        for(let i = 0; i <  s.length; i++) {
            const sv = s[i]
            const smv = sm.get(s[i]);
            if(smv !== undefined) {
                sm.set(sv, smv+1)
            } else {
                sm.set(sv,1)
            }

            const tv = t[i]
            const tmv = tm.get(t[i]);
            if(tmv !== undefined) {
                tm.set(tv, tmv+1)
            } else {
                tm.set(tv,1)
            }
        }

        for(let v of sm) {
            const tv = tm.get(v[0])
            if(tv !== v[1]) return false
        }
        return true
    }
}
