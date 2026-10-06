class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        nums.sort((a,b) => a-b);

        let i = 0;
        const output = [];

        while(i <= nums.length-3) {
            let j = i+1, k = nums.length-1;
            let sum = 0 - nums[i];
            console.log('i: ',i)
            console.log('j: ',j)
            console.log('k: ',k)

            while( j < k ) {
                if(sum === nums[j] + nums[k]) {
                    output.push([nums[i],nums[j],nums[k]]);
                    do {
                        k--
                        console.log('k: ',k)
                    } while( j < k && nums[k+1] === nums[k])

                      do {
                        j++
                        console.log('j: ',j)
                    } while(j < k && nums[j-1] === nums[j])
                } else if(sum < nums[j]+ nums[k]) {
                    do {
                        k--
                        console.log('k: ',k)
                    } while( j < k && nums[k+1] === nums[k])
                } else {
                    do {
                        j++
                        console.log('j: ',j)
                    } while(j < k && nums[j-1] === nums[j])
                }
            }
            console.log(`out loop ${i}`)
            do {
                i++
            } while(nums[i-1] === nums[i])
        }
        console.log('before output')
        return output;
    }
}
