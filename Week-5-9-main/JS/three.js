function isPalindrome(n) {
    let original = n;
    let rev = 0;

    while(n > 0) {
        rev = rev * 10 + (n % 10);
        n = Math.floor(n / 10);
    }
    return original === rev;
}

function isArmstrong(n) {
    let temp = n, sum = 0;
    let digits = n.toString().length;

    while(temp > 0) {
        let r = temp % 10;
        sum += Math.pow(r, digits);
        temp = Math.floor(temp / 10);
    }
    return sum === n;
}

function isPrime(n) {
    if(n <= 1) return false;

    for(let i = 2; i <= Math.sqrt(n); i++) {
        if(n % i === 0) return false;
    }
    return true;
}

function factorial(n) {
    let f = 1;
    for(let i = 1; i <= n; i++) {
        f *= i;
    }
    return f;
}

function analyze() {
    let number = parseInt(document.getElementById("num").value);

    document.getElementById("pal").textContent =
        "Palindrome: " + (isPalindrome(number) ? "Yes" : "No");

    document.getElementById("arm").textContent =
        "Armstrong: " + (isArmstrong(number) ? "Yes" : "No");

    document.getElementById("prime").textContent =
        "Prime: " + (isPrime(number) ? "Yes" : "No");

    document.getElementById("fact").textContent =
        "Factorial: " + factorial(number);
}