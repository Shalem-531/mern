function breakingRecords(scores) {
    let highest = scores[0];
    let lowest = scores[0];

    let maxCount = 0;
    let minCount = 0;

    for (let i = 1; i < scores.length; i++) {
        if (scores[i] > highest) {
            highest = scores[i];
            maxCount++;
        }

        if (scores[i] < lowest) {
            lowest = scores[i];
            minCount++;
        }
    }

    return [maxCount, minCount];
}