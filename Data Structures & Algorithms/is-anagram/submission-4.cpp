class Solution {
public:
    bool isAnagram(string s, string t) {
        if(s.length() != t.length()) return false;
        unordered_map<char, int> charMap;

        //create map
        for(char c : s) {
            if(charMap.count(c) == 0) {
                charMap.insert({c, 1});
            } else {
                charMap[c]++;
            }
        }

        //compare
        for(char c : t) {
            auto it = charMap.find(c);
            if(it == charMap.end()) {
                return false;
            }
            if(it->second == 0) {
                return false;
            } else {
                it->second--;
            }
        }
        return true;
    }
};
