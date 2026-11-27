class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
        const needMap = t.split("").reduce((acc, cur) => {
            if (!acc.has(cur)) {
                acc.set(cur, 1);
            } else {
                acc.set(cur, acc.get(cur) + 1);
            }
            return acc;
        }, new Map());

        const need = Array.from(needMap.keys()).length;

        let have = 0;
        const haveMap = needMap.keys().reduce((acc, cur) => {
            if (!acc.has(cur)) {
                acc.set(cur, 0);
            }
            return acc;
        }, new Map());

        const resIndices = [];

        let l = 0,
            r = 0;
        while (r < s.length) {
            const cur = s[r];
            const count = haveMap.get(cur);
            if (count !== undefined) {
                haveMap.set(cur, count + 1);
                if (count + 1 === needMap.get(cur)) {
                    have++;
                    while (need === have) {
                        if (resIndices.length === 0 || resIndices[1] - resIndices[0] > r - l) {
                            resIndices[0] = l;
                            resIndices[1] = r;
                        }
                        const lcur = s[l];
                        const lcount = haveMap.get(lcur);
                        if (lcount !== undefined) {
                            if (lcount === needMap.get(lcur)) have--;
                            haveMap.set(lcur, lcount - 1);
                        }
                        l++;
                    }
                }
            }
            r++;
        }

        return resIndices.length === 0 ? "" : s.slice(resIndices[0], resIndices[1] + 1);
    }
}
