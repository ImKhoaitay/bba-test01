# LESSON 2: GIT & JAVASCRIPT BASIC
## 1. Version control system
- Là hệ thống quản lý phiên bản giúp:
    - Xem <u>lịch sử</u> thay đổi (thời gian, thay đổi gì, ai thay đổi,...)
    - Quay trở về bản thay đổi trước đó
- Types of Version control system
    - **Local**: lưu ở máy cá nhân
    - **Centralize**: lưu ở một máy chủ tập trung
    - **Distributed**: lưu ở nhiều máy khác nhau
### So sánh tổng quan
| Tiêu chí | Local | Centralized | Distributed |
|:--------:|:-----:|:-----------:|:-----------:|
| Cộng tác | Không | Có | Có |
| Offline | Có | Không | Có |
|Tốc độ | Nhanh | Phụ thuộc mạng | Nhanh |
| Backup | Không tự động | Có (trên server) | Có (mọi clone) |
|Độ phức tạp | Thấp | Trung bình | Cao |
- Hiện nay, phổ biến nhất vẫn là <u>Distributed Version Control System.</u>
- Trong <u>khóa học này</u>, chúng ta học về <u>Git</u> - một distributed version control system! (DVCS)
## 2. Git
- Cha đẻ của Git là Linux Torvalds (cha đẻ hệ điều hành Linux)
- Hiện nay, Git là DVCS phổ biến nhất thế giới.
### So sánh Git với DVCS khác:
- **Tính năng**: Dễ dùng, có nhiều tính năng vượt trội: branching, tốc độ xử lý nhanh
- **Chi phí**: Free
- **Phổ biến**: nhiều công ty sử dụng
### Git & GitHub
**Git** và **GitHub** là hai khái niệm khác nhau
| Git | GitHub |
|:----:|:----:|
| Là một phần mềm | Là một dịch vụ web |
| Cài trên máy của bạn | Host trên website |
| Là một command line tool | Là công cụ có giao diện |
| Là công cụ quản lý phiên bản, đưa file vào Git repository | Là nơi để upload Git repository lên |
| Có các tính năng của Version Control System | Có các tính năng của Version Control System và một số tính năng khác (GitHub Actions, GitHub Co-pilot)
- Kiến thức về Git rất rộng và trải dài nhiều tính năng
- Ở <u>khóa học này</u>, chúng ta tập trung:
    - **Hiểu bản chất** Git hoạt động thế nào (three states) - <u>bài 2</u>
    - Hiểu cách "**undo**" công việc (<u>restore, reset</u>) - <u>bài 3</u>
    - Hiểu cách **làm việc trên nhiều máy** khác nhau (pull, push, remote) - <u>bài 4</u>
    - Hiểu cách làm việc với **nhiều người** khác nhau (branching) - <u>bài 5, 6</u>
    - Hiểu cách <u>xử lý lỗi</u>, **làm đẹp** commit (resolve conflict, rebase squash) - <u>bài 7, 8, 9</u>
### Git - three states
- **Working Directory**: Các file mới hoặc file có thay đổi. <u>Vùng màu đỏ</u>
- **Staging Area**: Các file đưa vào vùng chuẩn bị commit (tạo ra các phiên bản) <u>Vùng màu xanh</u>
- **Repository**: Các commit (phiên bản)
#### Tổng kết: Git
- **Lưu ý**: mỗi khi terminal lag bấm F2/Q
### Git - Đưa code lên GitHub: tạo repo
- **Lưu ý**: mỗi khi terminal lag bấm F2/Q
- **Làm 1 lần duy nhất**:
    - `git init`: Khởi tạo repo local
    - `git remote add origin <url>`: Tạo repo GitHub và liên kết tới repo local (nếu add sai url thì nhập `git remote remove origin` để remove origin rồi sau đó add lại)
- **Làm mỗi khi có thay đổi**:
    - `git add .`: Thêm toàn bộ file vào staging
    - `git add <tên file>`: Thêm file được gọi vào staging
    - `git commit -m "<tên phiên bản>"`: Commit file (nếu nhập sai tên phiên bản thì nhập `git commit --amend -m"tên phiên bản"` để thay đổi tên commit(phiên bản))
    - `git push origin main`: Push code (hoặc `git push origin master`)
- Cách thay đổi thư mục
    - `cd <tên folder>`: Đi vào bên trong thư mục
    - `cd ..`: Đi ra khỏi thư mục
### Git - Cấu hình
- Để commit được, ta cần "nói cho git biết ta là ai”. Nếu không nói, sẽ bị lỗi
    - `git config --global user.name "Tên"`: Lệnh này để đặt **mặc định** username cho <u>toàn bộ các repo</u> trên máy tính
    - `git config --global user.email "email"`: Lệnh này để đặt **mặc định** email cho <u>toàn bộ các repo</u> trên máy tính
- Trường hợp mỗi repo muốn một tên khác nhau thì set username, password riêng trong từng repo (đứng tại terminal cúa repo đó)
    - `git config user.name "Tên"`
    - `git config user.email "email"`
### Git - một số câu lệnh
- `git status`: Xem trạng thái file:
    - File màu xanh: vùng **staging**
    - File màu đỏ: vùng working **directory**
- `git log`: Kiểm tra danh sách commit
- `git checkout <revision>`: Đi về thời điểm quá khứ xem lúc ấy code của mình có gì (Trong đó revision/commit hash là dãy code ở commit) VD: `git checkout 070745d6c000d2a90740dcf97ee5db3f9418cc1f` 
### Git - commit convention
- Convention = quy tắc
- Convention giúp:
    - Cả team làm việc với nhau theo một quy tắc
    - Code gọn gàng, sạch đẹp hơn
    - Chuyên nghiệp hơn!
- Trong lớp học, dùng convention sau `<type>: <short_description>`
- Trong đó:
    - type: loại commit
        - **chore**: sửa nhỏ lẻ, chính tả, xóa file không dùng tới,..
        - **feat**: thêm tính năng mới, test case mới
        - **fix**: sửa lỗi 1 test trước đó
    - short_description: mô tả ngắn gọn (50 kí tự), tiếng Anh hoặc tiếng Việt không dấu.
- VD: `git commit -m"fix: update file"`
### Git - simple workflow
- Không dùng global config: init => config => add => commit => push
- Dùng global config: init => add => commit => push
## 3. JavaScript
- Là một ngôn ngữ lập trình, ra đời năm 1995 bởi Brendan Eich
- JavaScript giúp cho browser hoạt động được.
- Bình thường JavaScript chạy được do **browser engine** support
    - **Edge**: Chaka
    - **Firefox**: SpiderMonkey
    - **Chrome**: V8
- Khi chạy trên máy tính, chúng ta **không có browser engine** => cần **công cụ khác** để chạy khác => **NodeJS**
### JavaScript - Hello world!
- **"Hello, World!"** là <u>chương trình máy tính</u> mà đầu ra là dòng chữ "Hello, world!" trên <u>thiết bị hiển thị</u>.
- Vì đây là chương trình **đơn giản nhất** ở <u>mọi ngôn ngữ lập trình</u>, cho nên nó thường được dùng trong việc mô phỏng cho người mới bắt đầu về <u>cú pháp lập trình</u> cơ bản trong <u>ngôn ngữ lập trình</u>, hay để xác định ngôn ngữ hoặc hệ thống nào đó hoạt động tốt
- Cú pháp Hello world
```javaScript
console.log("nội dung");
console.log('nội dung');
```
- Có thể dùng nháy đơn hoặc nhảy kép đều được
- Chạy lệnh `node <tên file>` => trả kết quả
-Nếu file nằm trong folder thì `node <tên folder>/<tên file>` hoặc `node <đường dẫn tới file>`
### JavaScript - Comment
- **Comment** là cách "vô hiệu hoá” tạm thời một đoạn code. Dòng code **được comment** sẽ bị bỏ qua, không được thực thi.
- **Lưu ý**: Viết comment: // dấu cách rồi mới nhập text
- Có 2 cách comment:

- **Comment 1 dòng:** Thêm // vào trước đoạn code muốn comment 
```javaScript
// const name = "Better Bytes Academy"
```
- Có thể thêm vào giữa dòng
```javaScript
const name = "Playwright Việt Nam" // Declare name variable
```
- **Comment nhiều dòng:** Thêm /* vào trước dòng đầu tiên và */ sau dòng cuối cùng
```javaScript 
/*
const name = "Phong";
console.log(name);
*/
```
- Bôi đen vùng cần comment rồi bấm tổ hợp phím Ctrl + / với **win** hoặc Cmd + / với **mac**
### JavaScript - Biến
- Là khái niệm cơ bản nhất trong lập trình
- Từ biến trong **"biến thiên"**, có nghĩa là **thay đổi được**
#### Khai báo biến:
```javaScript
<từ khoá> <tên biến> = <giá trị>
```
- Từ khoá: var/let
- VD 
```javaScript
var centerName = "Better Bytes Academy";
let isLovePlaywright = true; //false
```
- Sử dụng
```javaScript
console.log(centerName); // In ra Better Bytes Academy
console.log(isLovePlaywright); // In ra true
```
#### **var** và **let** khác nhau thế nào? 
- Về cú pháp
    - **let** ra đời sau, là cú pháp hiện đại và **an toàn** hơn
    - **var** ra đời trước, cú pháp cũ, ít sử dụng
#### Khi nào dùng **var**, khi nào dùng **let**?
#### An toàn hơn
- **var** cho phép khai báo lại, **let** thì không
```javaScript
var x = 1;
var x = 2; // OK
let y = 1;
let y = 2; // Lỗi: Identifier 'y' has already been declared
```
- Với một đoạn code dài, có thể "**quên**" rằng đã khai báo trước đó => khai báo lại => có thể gây nhầm lẫn
- **var** có phạm vi global, còn **let** thì phạm vi theo block
Code nằm trong cặp ngoặc nhọn được gọi là "**một block code**"
```javaScript
{
var a = 10;
let b = 11;
}
console.log(a); // In ra: 10
console.log(b); // Lỗi: ReferenceError: b is not defined
```
**let** an toàn hơn **var** => dùng **let**
### JavaScript - Hằng
- Là các giá trị không thay đổi được
- Từ **hằng** trong từ hằng số
- Hằng dùng để khai báo các giá trị **không có nhu cầu thay đổi** hoặc giá trị **chỉ dùng một lần**
#### Khai báo hằng:
```javaScript
<từ khoá> <tên hằng> = <giá trị>
```
Từ khoá: **const**
```javaScript
const slogan = “Học Kỹ - Hiểu Bản Chất - Mentor Tận Tình”
console.log(slogan);
```
Khi nào dùng **biến**, khi nào dùng **hằng**
- Mặc định dùng **const** - giúp code an toàn hơn, dễ đọc
hơn
- Chỉ dùng **let** khi **chắc chắn** cần gắn lại giá trị
- Không dùng **var**
VD
```javaScript
var centerName = "Better Bytes Academy";
console.log(centerName); // In ra Better Bytes Academy
centerName = "HocTest.Com";
console.log(centerName); // In ra HocTest.Com
const slogan = "Học Kỹ - Hiểu Bản Chất - Mentor Tận Tình";
console.log(slogan); // In ra Học Kỹ - Hiểu Bản Chất - Mentor Tận Tình
slogan = "New slogan";
console.log(slogan); // In ra lỗi
```
### JavaScript - Data Type
- Một biến/hằng luôn có **kiểu dữ liệu**.
- Kiểu dữ liệu là **loại dữ liệu** mà biễn đó **đang mang**.
- Trong JavaScript, có 8 kiểu dữ liệu, chia làm 2 nhóm chính:
    - Kiểu **nguyên thuỷ** (primitive types)
        - Number
        - String
        - Boolean
        - Undefined
        - Null
        - Symbol
        - BigInt
    - Kiểu **tham chiếu** (reference types)
        - Object
#### Data type - number
**Number**: Số nguyên và số thực (không phân biệt int/float)
```javaScript
const age = 25; // Số nguyên
const price = 19.99; // Số thực
const infinity = Infinity; // Vô hạn
const notANumber = NaN; // Không phải là số
```
#### Data type-string
**String**: Chuỗi ký tự
```javaScript
const name = "John"; // Dùng nháy kép
const message = 'Hello'; // Dùng nhảy đơn
const template = `Age: 10` ; // Dùng "backtick" (dấu huyền cạnh số 1) để gán biến
```
```javaScript
const age = 18;
const myTemplate = `My age is: ${age}`;
console.log(myTemplate); // In ra My age is: 18
```
#### Data type- boolean
**Boolean**: Giá trị logic
```javaScript
const isActive = true; // Giá trị đúng
const isComplete = false; // Giá trị sai
```
#### Làm sao để biết một biến có kiểu dữ liệu gì?
- Đọc code xem khai báo thế nào!
- Sử dụng hàm **typeof**
```javaScript
typeof <variable>
```
Output: **number** || **string** || **boolean**
```javaScript
const age = 18;
const myTemplate = `My age is: ${age}`;
const isActive = true;

console.log(age); // In ra number
console.log(myTemplate); // In ra string
console.log(isActive); // In ra boolean
```
### JavaScript - Toán tử so sánh
- Toán tử so sánh dùng để **so sánh** 2 **toán hạng**. **Kết quả** trả về ở dạng **boolean**
- Ví dụ: **a=5, b=10**
- Giữa a và b có thể so sánh:
    - a **có lớn hơn** b không?
    - a **có nhỏ hơn** b không?
    - a **có bằng** b không?
    - a **có nhỏ hơn hoặc bằng** b không?
    - a **có lớn hơn hoặc bằng** b không?
    - a **có khác** b không?
- Chia làm ba nhóm:
    - **So sánh bằng**
        - == và ===
    - **So sánh không bằng**
        - !
    - **So sánh lớn hơn, nhỏ hơn**
        - ">"
        - "<"
        - "<="
        - ">="
```javaScript
const a = 5;
const b = 10;

console.log(a < b); // In ra true
console.log(a === b); // In ra false
console.log(a !== b); // In ra true
```
- So sánh hai bằng **==** (Loose Equality)
- So sánh giá trị **sau khi chuyển đối kiểu** (type coercion)
```javaScript
5 == "5" // true (chuyển string thành number)
5 == "6" // false (chuyển string thành number)
true == 1 // true (true chuyển thành 1)
false == 0 // true (false chuyển thành 9)
```
- So sánh ba bằng **===** (Strict Equality) (nên dùng)
- So sánh **giá trị** và **kiểu dữ liệu** - **không chuyển đổi kiểu**
```javaScript
5 === "5" // false (khác kiểu)
true === 1 // false (khác kiểu)
false 0 // false (khác kiểu)
05 === 5 // true (cùng kiểu, cùng giá trị)
```
```javaScript
const c = "50";
const d = 50;

console.log(c === d); // In ra false
console.log(c == d); // In ra true
```
- So sánh không bằng **!=** và **!==**
```javaScript
5 != "5" // false (chuyển string thành number)
true != 1 // false (true chuyển thành 1)
false != 0 I/ false (false chuyển thành 8)
5 !== "5" // true (khác kiểu)
true !== 1 // true (khác kiểu)
false !== 0 // true (khác kiểu)
5 !== 5 I/ false (cùng kiểu, cùng giá trị)
```
- So sánh lớn hơn, nhỏ hơn, lớn hơn hoặc bằng, nhỏ hơn hoặc bằng
```javaScript
5 > 10 // false
510 // false
5 < 10 // true
5 <= 10 // true
```
#### Khi nào thì so sánh hai bằng (==), khi nào thì so sánh ba bång (==)
- ***Lưu ý**: Luôn dùng so sánh ba bằng
- Chỉ sử dụng == khi có chủ đích, muốn so sánh mà không quan tâm tới kiểu dữ liệu.
### JavaScript - Toán tử logic
Toán tử logic dùng để kết hợp nhiều điều kiện và trả về boolean
- && (AND): trả về đúng nếu **cả 2 vế** của mệnh đề **đúng**
- || (OR): trả về đúng nếu **1 trong 2 vế** của mệnh đề **đúng**
- ! : đảo **ngược** lại giá trị của mệnh đề

| A | B | A && B | A !! B |
|:----:|:----:|:----:|:----:|
| truel | true | true | true |
| true | false |false | true |
| false | true |false | true |
| false | false |false | false |
### JavaScript - Toán tử một ngôi
Toán tử một ngôi là toán tử **chỉ cần một toán hạng** để thực hiện.
```javaScript
let x = 5;
x++;
++x;
x--;
--x;
```
Hai loại:
- **Prefix**: toán tử nằm ở phía trước - tăng trước, trả về sau
    - **++x;**
    - **--x;**
- **Postfix**: toán tử nằm ở phía sau - trả về trước, tăng sau
    - **x++;**
    - **x--;**
```javaScript
let a 10;
b = ++a; // tăng a lên 11 rồi trả về => b có giá trị là 11

let c = 10;
d = c++; // trả về giá trị 10 cho d rồi mới tăng => d có giá trị là 10
```
### JavaScript - Toán tử toán học
Toán tử toán học tương tự như các phép tính cộng trừ nhân chia đã
được học: +, -, *, /
```javaScript
const firstNumber = 5;
const secondNumber = 10;
const result = firstNumber + second Number; // result = 15
```
Lưu ý: khi chia cho 0, sẽ ra kết quả infinity (vô cực)
```javaScript
const a = 5;
const b = 10;
console.log(a+b); // In ra 15
console.log(a-b); // In ra -5
console.log(a*b); // In ra 50
console.log(a/b); // In ra 0.5
```
### JavaScript - Câu điều kiện
- Câu điều kiện dùng để kiểm tra một đoạn logic trước khi chạy
- **Lưu ý**: Kể cả khi có 1 câu lệnh hay 2 câu lệnh đều có ngoặc {} if
- Nếu **điều kiện đúng** thì **mới chạy**
- Trong JavaScript, có các loại câu điều kiện:
    - if
    - if...else
    - if...else if...else
    - switch...case
- Cú pháp:
#### if
```javaScript
if (<điều kiện>) {
// code...
}
```
Ví dụ:
```javaScript
let hour = 8;

if (hour <= 11) {
    console.log("Good morning");
}

if (hour > 11) {
    console.log("Good day");
} // In ra Good morning
```
Ví dụ: Kết hợp nhiều điều kiện - nested condition
```javaScript
let hour = 6;

if (hour >= 6 && hour <= 11) {
    console.log("Good morning");
}

if (hour > 11) {
    console.log("Good day");
} // In ra Good morning
```
Ví dụ: Kết hợp nhiều điều kiện
```javaScript
let hour = 6;
if (hour >= 6) {
    if (hour <= 11) {
        console.log("Good morning");
    }
} 

if (hour > 11) {
    console.log("Good day");
} // In ra Good morning
```
### JavaScript - Vòng lặp
- Vòng lặp dùng để **lặp lại 1 đoạn logic**.
- Có thể lặp **một số lần nhất định**, hoặc lặp vô hạn, tùy theo **điều kiện dừng**
- Trong JavaScript, có các loại vòng lặp:
    - **for (i)**
    - **for (of)**
    - **for (each)**
    - **for (in)**
    - **while**
    - **do...while**
-Cú pháp vòng lặp for (i)
```javaScript
for (<điều kiện khởi tạo>; <điều kiện lặp>; <cập nhật>) {
    // code
}
```
- Trong đó:
    - **Điều kiện khởi tạo**: chạy **một lần duy nhất**, khi **vòng lặp bắt đầu**.
    - **Điều kiện lặp**: nếu **đúng** thì **chạy tiếp**, **sai** thì **dừng**.
    - **Cập nhật**: chạy vào mỗi **cuối vòng lặp**, để thay đổi giá trị của biến đếm.
```javaScript
for (let i = 0; i < 5; i++) {
    console.log("Xin chào!");
} 
// Xin chào!
// Xin chào!
// Xin chào!
// Xin chào!
// Xin chào!
```
**Lưu ý**: Vòng lặp lồng thì sử dụng biến theo thứ tự i, j, k, m, n, nên dùng chung 1 cách < và < tránh dùng 2 cách <= và <
## 4. VSCode
Format code 
- Mac: Option + Shift + F
- Window: Alt + Shift + F 
- Chuột phải + Format Document