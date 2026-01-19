# LESSON 4: JAVASCRIPT CONTINUE
## 1. JavaScript
### Cách tăng biến
```javaScript
let total = 10;

// Cách 1:
total = total + 10;

// Cách 2:
total += 10;
```
### JavaScript - Comment
**Lưu ý**: Viết comment: // dấu cách rồi mới nhập text
### Lưu ý làm BT
- Nên viết suy nghĩ ra
- Các khai báo chỉ dùng 1 lần, ngay sát mệnh đề return thì viết gọn lại VD:
```javaScript
cont min = c;
return min; // Nên rút gọn lại thành return c;
```
- Khi đặt tên cho các file nên đặt đồng bộ và VD: lesson-01 và lesson-02
- File .gitignore chỉ có 1 định dạng duy nhất tránh viết sai
- Khi so sánh tránh dùng == hoặc != mà nên dùng === hoặc !== để so sánh tuyệt đối
- Khi viết markdown
    - đoạn code dài nên đặt trong 3 dấu ` và nhập ngôn ngữ code
    - hạn chế dùng khoảng cách để xuống dòng mà nên dùng -
### JavaScript - Vòng lặp
**Lưu ý**: Vòng lặp lồng thì
- sử dụng biến theo thứ tự i, j, k, m, n,
- nên dùng chung 1 cách < và < tránh dùng 2 cách <= và <
### Link submit
Nên lấy link trên URL
### JavaScript - Phạm vi của biến
- Phạm vi (scope) xác định nơi mà biến có thể truy cập
- JavaScript có ba loại phạm vi:
    - Toàn cục (global)
    ```javaScript
    var globalVar = "Tôi lầ biến toàn cục";
    let globalLet = "Tôi cũng là biến toàn cục";

    function testFunction() {
        console.log(globalVar); // Truy cập được
        console.log(globalLet); // Truy cập được
    }
    ```
    - Function scope (hàm)
    ```javaScript
    function myFunction() {
        var functionScoped = "Chỉ có thể truy cập trong hàm này";
        let alsoFunctionScoped = "Tương tự";

        console.log(functionScoped); // Ok
    }

    console.log(functionScoped); // Error: FunctionScoped is not defined
    ```
    - Block scope (khối)
    ```javaScript
    if (true) {
        var varVariable = "var không có block scope";
        let letVariable = "let có block scope";
        const constVariable = "const cũng có block scope";
    }

    console.log(varVariable); // OK - var không bị giới hạn bởi block
    console.log(letVariable); // Error - letVariable is not defined
    console.log(constVariable); // Error - constVariable is not defined
    ```
- **Hoisting**: JavaScript **di chuyển** các **khai báo biến lên đầu** phạm vi của chúng trước khi thực thi code
```javaScript
console.log(x); // undefined (không phải error)
var x = 5;

// tương đương với:
var x;
console.log(x); // undefined
x = 5;

// Với let và const:
console.log(y); // Error Cannot access 'y' before initialization
let y = 5;
```
### JavaScript - Câu điều kiện nâng cao
#### Break
Break dùng để thoát hoàn toàn khỏi vòng lập ngay lậy tức'
```javaScript
// thoát khi tìm thấy giá trị
for (let i = 0; i < 10; i++) {
    if (i === 5) {
        break; // Thoát vòng lặp khi i = 5
    }
    console.log(i);
}
// Output: 0, 1, 2, 3, 4

// Ví dụ thực tế: Tìm phần tử đầu tiên
const numbers = [1, 3, 8, 7, 9, 11];
let firstEven = null;

for (let num of numbers) {
    if (num % 2 === 0) {
        firstEven = num;
        break; // Dừng ngay khi tìm thấy
    }
```
#### Continue
**Continue** dùng để **bỏ qua phần còn lại** của vòng lặp hiện tại và **chuyển sang lần lặp tiếp theo**
```javaScript
// Bỏ qua số chẵn
for (let i = 0; i < 10; i++) {
    if (i % 2 ===0) {
        continue; // Bỏ qua số chẵn
    }
    console.log(i);
}
// Output: 1, 3, 5, 7, 9

// Ví dụ thực tế: Lọc dữ liệu
const scores = [85, 92, 78, 95, 60, 88];
console.log("Điểm >= 80:");

for (let score of scores) {
    if (score < 80>) {
        continue; // Bỏ qua điểm < 80
    }
    console.log(score);
}
// Output: 85, 92, 95, 88
```
#### if...else
**Câu điều kiện** if...else: Thực thi code khác nhau cho trường hợp true và false:
```javaScript
let score = 75;

if (score >= 60) {
    console.log("Bạn đã qua môn");
} else {
    console.log("Bạn cần học lại");
}
```
#### if...else...if
**Câu điều kiện** if...else...if: Kiểm tra <u>nhiều</u> điều kiện <u>theo thứ tự</u>:
```javaScript
let score = 85;

if (score >= 90) {
    console.log("Xuất sắc");
} else if (score >= 80) {
    console.log("Giỏi");
} else if (score >= 70) {
    console.log("Khá");
} else if (score >= 60) {
    console.log("Trung bình");
} else {
    console.log("Yếu");
}
```
#### Ternary operator
**Ternary operator** (toán tử điều kiện): Cách viết ngắn gọn cho if...else đơn giản:
```javaScript
let age = 20;
let status = (age >= 18) ? "Người lớn" : "Trẻ em";
console.log(status); // "Người lớn"

// Có thể lồng nhau (nên cẩn thận với độ phức tạp)
let score = 75;
let grade = score >= 90 ? "A" :
            score >= 80 ? "B" :
            score >= 70 ? "C" :
            score >= 60 ? "D" : "F";
```
#### Kết hợp nhiều điều kiện: sử dụng && hoặc ||
```javaScript
let userName = "admin";
let passWord = "123456";

// Toán tử AND (&&)
if (userName === "admin" && passWord === "123456") {
    console.log("Đăng nhập thành công");
}

// Toán tử OR (||)
let day = "Saturday";
if (day === "Saturday" || day "Sunday") {
    console.log("Cuối tuần");
}

// Toán tử NOT (!)
let isLoggedIn = false;
if (!isLoggedIn) {
    console.log("Viu lòng đăng nhập");
}
```
### JavaScript -Vòng lặp nâng cao
#### for...in Loop
Dùng để duyệt qua các thuộc tính (properties) có thể đếm được của một object, bao gồm cả thuộc tính kế thừa
```javaScript
// Với Object
const person = {
    name: "John",
    age: 30,
    city: "Hanoi"
};

for (let key in person) {
    console.log(key + ": " + person[key]);
}
// Output
// name: John
// age: 30
// city: Hanoi

// Với Array (không khuyến khích)
const colors = ["red", "green", "blue"];
colors.cumtomProperty = "rainbow";

for (let index in colors) {
    console.log(index + ": " + colors[index]);
}
// Output:
// 0: red
// 1: green
// 2: blue
// customProperty: rainbow
```
#### for...of
Dùng để duyệt qua các giá trị (object) có thể đếm được, bao gồm cả thuộc tính kế thừa
```javaScript
// Với Object
const person = {
    name: "John",
    age: 30,
    city: "Hanoi"
};

for (let object of person) {
    console.log(object);
}
// Output
// John
// 30
// Hanoi

// Với Array (không khuyến khích)
const colors = ["red", "green", "blue"];

for (let index in colors) {
    console.log(index);
}
// Output:
// red
// green
// blue
```
#### Lúc nào dùng for...in, lúc nào dùng for...of
Khi cần **key/thuộc tính (properties)** thì dùng **for...in**, còn muốn **giá trị (object)** thì dùng **for...of** => Còn muốn dùng cả 2 thì dùng for (i)
### JavaScript - Util function
- Util: tiện ích
- Util function: các hàm tiện ích có sẵn
- Giúp xử lý code nhanh gọn hơn
- Util:
    - String utils function
        - trim(): cắt đi khoảng trắng (space) ở đầu và cuối của mỗi chuỗi
        - toLowerCase(): viết in thường tất cả ký tự của mỗi chuỗi
        - toUpperCase(): viết in hoa tất cả ký tự của mỗi chuỗi
        - includes(): trả về Boolean(true/false), kiểm tra chuỗi có bao gồm chuỗi con nào không
        - replaces(): thay thế chuỗi bằng chuỗi khác ở trong chuỗi của chúng ta
        - split(): chia chuỗi thành mảng theo ký tự chúng ta nhập
        - substring(): chia chuỗi cha thành chuỗi con theo vị trí bắt đầu và kết thúc
        - indexOf(): kiểm tra vị trí bắt đầu của chuỗi
    - Array util
        - map: <u>Tạo mảng mới</u> bẳng cách áp dụng 1 hàm lên **từng phần tử** của mảng gốc. Trả về <u>mảng mới có cùng độ dài</u>
        - filter: <u>Tạo mảng mới</u> chỉ chứa các phàn tử thỏa mãn điều kiện trong hàm callback. Trả về mảng đã được lọc
        - find: Tìm và trả về <u>phần tử đầu tiên</u> trong mảng thỏa mãn điều kiện. Trả về <u>undefined</u> nếu <u>không tìm thấy</u>
        - reduce: Duyệt qua mảng và <u>tích lũy</u> các phần tử thành 1 giá trị duy nhất (số, chuỗi, object...) dựa trên <u>hàm callback</u>
        - some: Kiểm tra xem có <u>ít nhất 1</u> phần tử trong mảng thỏa mãn điều kiện hay không. Trả về true/false
        - every: Kiểm tra xem <u>tất cả phần tử</u> trong mảng có thỏa mãn điều kiện hay không. Trả về true/false
        - sort: <u>Sắp xếp</u> các phần tử trong mảng theo <u>thứ tự</u> (mặc định là alphabet/tăng dần). <u>Thay đổi mảng gốc</u>
        - push: <u>Thêm 1 hoặc nhiều</u> phần tử vào <u>cuối mảng</u>. <u>Thay đổi mảng gốc</u> và <u>trả về độ dài mới</u>
        - pop: <u>Xóa và trả về</u> phần tử <u>cuối cùng</u> của mảng. <u>Thay đổi mảng gốc</u> và làm <u>giảm độ dài</u>
        - shift: <u>Xóa và trả về</u> phần tử <u>đầu tiên</u> của mảng. <u>Thay đổi mảng gốc</u> và làm <u>giảm độ dài</u>
        - unshift: <u>Thêm 1 hoặc nhiều</u> phần tử vào <u>đầu mảng</u>. <u>Thay đổi mảng gốc</u> và <u>trả về độ dài mới</u> của mảng
## 2. Git
### Git - push nhánh lên GitHub
- `git push origin <tên_nhánh>`
- VD:
    - `git push origin main`
    - `git push origin <tên_nhánh>`