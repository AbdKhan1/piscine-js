function isPositive(int){
    if (Math.sign(int) == 1 || 0){
        return true 
    }else{
        return false 
    }
}

function abs(nums){
    if (nums>0){
        return nums
    }else{
        return nums *-1
    }
}