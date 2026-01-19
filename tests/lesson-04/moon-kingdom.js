// Bài 1: Tạo hàm createCharacters
function createCharacters() {
  // 1. Khai báo mảng
  const characters = [
    { name: 'Mario', level: 10, health: 800 },
    { name: 'Bowser', level: 15, health: 1200 },
    { name: 'Peach', level: 8, health: 950 },
    { name: 'Toad', level: 20, health: 1500 }
  ];

  console.log("Mảng nhân vật gốc:", characters);

  // 2. Tạo mảng mới characterPowerUp
  const characterPowerUp = characters.map(char => {
    return {
      name: char.name.toUpperCase(), 
      level: char.level * 2,        
      health: char.health * 3       
    };
  });

  console.log("Mảng đã tăng sức mạnh nhân vật:", characterPowerUp);

  // 3. Tạo mảng possibleWinners lọc các phần tử có chỉ số health > 1000
  const possibleWinners = characterPowerUp.filter(char => char.health > 1000);

  console.log("Mảng người chiến thắng tiềm năng:", possibleWinners);

  // Trả về mảng kết quả cuối cùng
  return possibleWinners;
}

// Gọi hàm để thực thi
createCharacters();

// Bài 2: Tạo hàm printLeaderboard
// 1. Mảng players
const players = [
    { name: 'Phong', score: 500 },
    { name: 'Peach', score: 850 },
    { name: 'Luigi', score: 900 },
    { name: 'Yoshi', score: 800 },
    { name: 'Mario', score: 1000 }
];

function printLeaderboard(players) {
  // 2. Sắp xếp mảng players theo thứ tự score từ cao đến thấp
  players.sort((a, b) => b.score - a.score);

  // 3. In ra bẳng xếp hạng
  players.forEach((player, index) => {
    let rank = index + 1;
        let scoreFormatted = player.score.toLocaleString(); // Định dạng số có dấu phẩy
        let medal = '';

        if (rank === 1) {
            medal = '🥇'; // Huy chương Vàng
        } else if (rank === 2) {
            medal = '🥈'; // Huy chương Bạc
        } else if (rank === 3) {
            medal = '🥉'; // Huy chương Đồng
        } else {
            medal = '  '; // Không nằm trong top 3
        }

        console.log(`${medal} ${rank}. ${player.name} - ${scoreFormatted} pts`);
    });
}

// Gọi hàm để thực thi
printLeaderboard(players);
