function findPairsDivisibleBy17() {
  let count = 0; 
  // Vòng lặp ngoài cho số thứ nhất (i)
  for (let i = 1; i <= 100; i++) {
    // Vòng lặp trong cho số thứ hai (j), bắt đầu từ i + 1 để tránh lặp lại và xét cặp (i, i)
    for (let j = i + 1; j <= 100; j++) {
      // Kiểm tra nếu tổng của i và j chia hết cho 17 
      if ((i + j) % 17 === 0) {
        count++; // Tăng biến đếm lên 1
        // In ra cặp số
        console.log(`(${i}, ${j}) = ${i + j}`);
      }
    }
  }
  console.log(`\nTổng cộng ${count} cặp`);
  return count; // Trả về số lượng cặp
}

// Gọi hàm để thực thi 
findPairsDivisibleBy17();