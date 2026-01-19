# LESSON 3: GIT & JAVASCRIPT CONTINUE
## 1. Git
### Git - Undo things
- `git commit --amend -m"tên phiên bản"` để thay đổi tên commit
- `git restore --staged <tên file>`: Di chuyển file được gọi từ staging sang working directory
- `git restore --staged .`: Di chuyển toàn bộ file từ staging sang working directory
- `git reset HEAD~1`: Xóa commit gần nhất khỏi repository và đưa các thay đổi về working directory
- `git reset HEAD~N`: Xóa n commit khỏi repository và đưa các thay đổi về working directory
- **Lưu ý**: Commit đầu tiên không thể bị reset => nếu muốn reset => xóa thư mục **.git** đi rồi init lại
- `rm -rf .git`: Xoá thư mục git
### Git - Pull code
- `git pull origin main`: Pull code (`git pull origin master`)
### Git - branch
- `git config --global init.defaultBranch main`: Đặt nhánh mặc định là nhánh main
- `git branch`: Xem danh sách nhánh
- `git branch <tên nhánh>`: Tạo nhánh mới copy giống hệt nhánh hiện tại
- `git checkout <tên nhánh>`: Chuyển nhánh
- `git checkout -b <tên>`: Tạo và chuyển nhánh mới
- `git branch -D <tên nhánh>`: Xóa nhánh
- **Lưu ý**: Luôn pull code về trước khi tạo nhánh mới
### Gitignore
**.gitignore**: dùng để bỏ qua các file không cần git theo dõi
- Ignore file: <file_name>
- Ignore folder: <folder_name>/
### Git - một số câu lệnh
- `git status`: Xem trạng thái file:
    - File màu xanh: vùng **staging**
    - File màu đỏ: vùng working **directory**
- `git log`: Kiểm tra danh sách commit
## 2. JavaScript
### JavaScript - Convention
- Convention = quy tắc
- Convention giúp:
    - Code theo 1 format, dễ nhìn
    - Người khác trong team dễ đọc code
**Quy tắc đặt tên**:
- snake_cake: tất cả các chữ <u>viết thường</u>, cách nhau bởi <u>dấu gạch dưới</u>(chưa dùng tới)
- kebeb_case: tất cả các chữ <u>viết thường</u>, cách nhau bởi <u>dấu gạch ngang</u>(tên file/folder)
- camelCase: <u>chữ đầu viết thường</u>, các <u>chữ sau viết hoa chữ cái đầu tiên</u>(tên biến/hàm)
- PascalCase: tất cả các chữ cái đầu viết hoa(tên class)
### JavaScript - console.log
- `console.log('Toi la Nga');`
- `console.log("Toi la Phong");`
- ```javaScript
    let name = "Nga";
    console.log(`Toi la ${name}`); // Toi la Nga
    console.log("Toi la " + name); // Toi la Nga
    console.log("Toi la" , name); // Toi la Nga
    ```
### JavaScript - Object
Object là đối tượng, dùng dể lưu trữ **tập hợp** các giá trị vào cũng một **biến** hoặc **hằng số**
- Khai báo:
```javaScript
let/const <ten_object> = {
    <thuoc_tinh>: <gia_tri>,
}
```
- Trong đó:
    - <thuoc_tinh>: giống quy tắc đặt tên biến camelCase
    - <gia_tri>: có kiểu giống biến Number/String/Boolean hoặc là 1 object khác
- VD
```javaScript
let user = {
    "name": "Alex",
    "age": 10,
    "email": "alex@gmail.com"
}
```
```javaScript
const product = {
    "name": "Laptop",
    "price": 500,
    "isWindow": true,
    "manufacturer": {
        "name": "Acer",
        "year": 2024
    }
}
```
- Sử dụng
```javaScript
console.log("name = " + user.name);
console.log("manufacturer name = " + product.manufacturer.name);
console.log("price = " , product["price"]);
```
- Gán lại
```javaScript
user.age = 28
product["manufacturer"] ["year"] = 2025
```
### JavaScript - Array
Array: Mảng
- Tạo mảng
    - Khai báo
    - Sử dụng
- Truy xuất mảng
    - Độ dài mảng: length
    - Lấy phần tử theo index: [0], [1], [2]
### JavaScript - Function
Function: hàm, là đoạn code được đặt tên và có thể tái sử dụng, thực hiện 1 nhiệm vụ hoặc 1 tính toán cụ thể
- Khai báo
```javaScript
function <nameFunction>() {
    // code
}
```
- Parameter (truyền tham số)
- Return value