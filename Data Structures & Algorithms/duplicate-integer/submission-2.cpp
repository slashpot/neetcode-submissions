class Solution {
public:
    bool hasDuplicate(vector<int>& nums) {
        set<int> s;

        for (int i = 0; i < nums.size(); i++) {
            int val = nums[i];
            if(s.find(val) != s.end()) {
                return true;
            } else {
                s.insert(val);
            }
        }

        return false;
    }
};