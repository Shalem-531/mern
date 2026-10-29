function countApplesAndOranges(s, t, a, b, apples, oranges) {
    let appleCount = 0;
    let orangeCount = 0;

    for (let i = 0; i < apples.length; i++) {
        let position = a + apples[i];

        if (position >= s && position <= t) {
            appleCount++;
        }
    }
    for (let i = 0; i < oranges.length; i++) {
        let position = b + oranges[i];
        if (position >= s && position <= t) {
            orangeCount++;
        }
    }
    console.log(appleCount);
    console.log(orangeCount);
}
let apples=[-2,2,1]
let oranges=[5,-6]
countApplesAndOranges(7,11,5,15,apples,oranges)