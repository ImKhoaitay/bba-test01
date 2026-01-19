# LESSON 1: PLAYWRINGHT
## 1. Playwright
- Playwright là 1 framework 
### Playwright - Cài đặt
- B1: Tạo thư mục
- B2:
    - C1: Mở thư mục bằng VS Code rồi mở terminal lên chạy lệnh `npm init playwright@latest` rồi liên tục enter cho đến khi khởi tạo thành công
    - C2: Chuột phải mở terminal trên thư mục đối với mac rồi chạy lệnh `npm init playwright@latest` sau đó liên tục enter cho đến khi khởi tạo thành công và chạy lệnh `code .` để mở VS Code
    - C3: Chuột phải chọn open git bash here rồi chạy lệnh `npm init playwright@latest` sau đó liên tục enter cho đến khi khởi tạo thành công và chạy lệnh `code .` để mở VS Code
- **node_modules**: thư viện
- **tests/example.spec.ts**: code test
- **playwright.config.ts**: file cấu hình
### Playwright - code
- **goto**: đi đến
- **expect**: mong muốn
- **toHave...**: có
- **click**: nhấp vào
- **toBeVisible**: có hiển thị
## 2. Git
### Git - Cấu hình
- Trước khi làm việc với Git, cần một số **cấu hình mặc định:**
    - Config **username** (tên người dùng):
        - `git config --global user.name "<Tên bạn>"`
    - Config **email** (địa chỉ email):
        - `git config --global user.email "<email của bạn>"`
    - Config **branch default** (nhánh mặc định):
        - `git config --global init.defaultBranch main`
### Git - Kết nối với GitHub
#### SSH key:
- **Cặp** khóa (2 cái)
    - **id_rsa** và **id_rsa.pub**
    - **id_rsa**: cần giữ bí mật
    - **id_rsa.pub**: có thể gửi cho người khác
- Giúp **xác thực** đăng nhập trở nên **dễ dàng hơn**
- Lưu ở ~/.ssh
- "~" đại diện cho thư mục <u>home</u>
- **Home** ở Windown: `C:\Users\{username}`
- **Home** ở Linux/MacOS: `/Users/{username}`
#### Lệnh tạo SSH Keys:
ssh-keygen -t rsa -b 4096 -C "<email>"
#### Lấy nội dung ssh key:
- cat ~/.ssh/id_rsa.pub
- Truy cập: https://github.com/settings//ssh/new để thêm ssh key
### Git - Đưa code lên GitHub: tạo repo
- **Làm 1 lần duy nhất**:
    - `git init`: Khởi tạo repo local
    - `git remote add origin <url>`: Tạo repo GitHub và liên kết tới repo local (nếu add sai url thì nhập `git remote remove origin` để remove origin rồi sau đó add lại)
- **Làm mỗi khi có thay đổi**:
    - `git add .`: Thêm toàn bộ file vào staging
    - `git commit -m "<tên phiên bản>"`: Commit file
    - `git push origin main`: Push code (hoặc `git push origin master`)
- Tạo repo:
    - Truy cập: https://github.com/new
    - Điền tên repository
    - Chọn "Public"
- Khởi tạo
    - Khởi tạo repo local: `git init`
    - Liên kết repository vừa tạo với Git: `git remote add origin <ssh_link>`
    - Thêm code: `git add .`
    - Thêm commit: `git commit -m "<tên phiên bản>"`
- Push code: `git push origin main`
### Git - Invite collaborators
- Invite để mentor chấm bài
- Truy cập repo setting: https://github.com/<username>/<repo_name>/settings/access
- Add collaborator
## 3. VSCode
- Đổi terminal mặc định
    - <u>Window Powershell</u> là terminal mặc định trên windows, Powershell <u>hay bị chặn/ lỗi vặt</u> => dùng **Git Bash** để tránh các lỗi này
    - **Ctrl + Shift + P**: hiển thị hộp thoại
    - **Tìm kiếm**: Terminal default
    - **Chọn**: Terminal: Select Default Profile
    - Chọn Git Bash