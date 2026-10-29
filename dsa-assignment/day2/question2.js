function bonAppetit(totitems, k,bill, b) {
    let total = 0;
    for (let i = 0; i < bill.length; i++) {
        total += bill[i];
    }
    let fairShare = (total - bill[k]) / 2;
    if (b === fairShare) {
        console.log("Bon Appetit");
    } else {
        console.log(b - fairShare);
    }
}
let bill=[3,10,2,9];
bonAppetit(bill.length,1,bill,12)