let playerName = "Mario";
let currentLives = 3;
const coinsLevel1 = 25;
const coinsLevel2 = 30;
const coinsLevel3 = 45;

// Tính giá trị trung bình coin của 3 level
const totalCoins = coinsLevel1 + coinsLevel2 + coinsLevel3;
const averageCoins = totalCoins / 3;

console.log("Giá trị trung bình coins:", averageCoins);

// In ra số coin dư khi chia cho 3
console.log("Số coin dư Level 1:", coinsLevel1 % 3);
console.log("Số coin dư Level 2:", coinsLevel2 % 3);
console.log("Số coin dư Level 3:", coinsLevel3 % 3);