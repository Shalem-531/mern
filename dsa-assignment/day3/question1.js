
function birthday(s, d, m) {
    let count = 0;
    for (let i = 0; i <= s.length - m; i++) {
        let sum = 0;

        for (let j = i; j < i + m; j++) {
            sum += s[j];
        }

        if (sum === d) {
            count++;
        }
    }

    return count;
}
const s=[2,2,1,3,2];
const ans=birthday(s,4,2);
console.log(ans)