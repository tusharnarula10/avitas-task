function generateNextPalindromeHelper(num, n) {

    let mid = n / 2;
    let i = mid - 1;
    let j = (n % 2 === 0) ? mid : mid - 1;
    let smallLeft = false;

    while (i >= 0 && num[i] == num[j]) {
        i--;
        j++;
    }

    if (i < 0 || num[i] < num[j]) {
        smallLeft = true;
    }

    while (i >= 0) {
        num[j++] = num[i--];
    }
    if (smallLeft) {
        let carry = 1;

        if (n % 2 == 1) {
            num[mid] += 1;
            carry = num[mid] / 10;
            num[mid] %= 10;
        }
        i = mid - 1;
        j = (n % 2 == 0 ? mid : mid + 1);

        while (i >= 0) {
            num[i] = num[i] + carry;
            carry = num[i] / 10;
            num[i] %= 10;
            num[j] = num[i]; 
            i--;
            j++;
        }
    }
    return num;
}

function check999(num, n){
    for (let index = 0; index < n; index++) {
        if(num[index] != 9){
            return false;
        }
        else return true;
        
    }
}

function generateNextPalindrome(num,n){
    if(check999(num,n)){
        console.log('1');
        for (let index = 0; index < n-1; index++) {
            console.log('0');
        }
        console.log('1');
    }

    else {
        let result = generateNextPalindromeHelper(num,n);
        let iterator = result.values();
        for (let index = 0; index < result.length; index++) {
            console.log(Math.trunc(iterator.next().value));
            
        }
}
}

let num = [5,6,8,7];

generateNextPalindrome(num, num.length);