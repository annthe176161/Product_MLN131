# Timeline Chủ nghĩa Xã hội Khoa học (MLN131)

## 📚 Giới thiệu

Website tĩnh hiển thị timeline các sự kiện lịch sử quan trọng liên quan đến môn học **Chủ nghĩa Xã hội Khoa học (MLN131)**.

### Tính năng chính:

- ✨ Hiển thị timeline các sự kiện lịch sử theo 12 tháng
- 🎯 Lọc sự kiện theo tháng
- 📊 Thống kê trực quan với biểu đồ
- 🎨 Thiết kế đẹp mắt với màu sắc truyền thống của chủ nghĩa xã hội
- 📱 Responsive - tương thích mọi thiết bị
- ⚡ Hiệu ứng animation mượt mà

## 🗂️ Cấu trúc thư mục

```
Product_MLN131/
│
├── index.html                 # Trang chủ chính
│
├── assets/
│   ├── css/
│   │   └── style.css          # File CSS tùy chỉnh
│   │
│   ├── js/
│   │   ├── data.js           # Dữ liệu các sự kiện lịch sử
│   │   └── main.js           # JavaScript chính
│   │
│   └── images/               # (Tùy chọn) Thư mục chứa hình ảnh
│       └── favicon.ico
│
└── README.md                 # File hướng dẫn này
```

## 🚀 Công nghệ sử dụng

- **HTML5** - Cấu trúc trang web
- **CSS3** - Styling với gradients, animations, flexbox
- **JavaScript (ES6+)** - Xử lý logic và tương tác
- **Bootstrap 5** - Framework responsive
- **Font Awesome 6** - Icons
- **AOS (Animate On Scroll)** - Animation khi cuộn trang
- **Chart.js** - Biểu đồ thống kê
- **Google Fonts** - Typography đẹp mắt

## 📦 Cài đặt & Chạy

### Cách 1: Mở trực tiếp (Đơn giản nhất)

1. Mở file `index.html` bằng trình duyệt web
2. Không cần cài đặt gì thêm - tất cả thư viện đã được load từ CDN

### Cách 2: Chạy với Live Server (Khuyến nghị)

```bash
# Nếu dùng VS Code, cài đặt extension "Live Server"
# Sau đó click phải vào index.html > Open with Live Server
```

### Cách 3: Chạy với Python HTTP Server

```bash
# Python 3
python -m http.server 8000

# Sau đó mở trình duyệt: http://localhost:8000
```

### Cách 4: Chạy với Node.js

```bash
# Cài đặt http-server global
npm install -g http-server

# Chạy server
http-server -p 8000

# Mở trình duyệt: http://localhost:8000
```

## 🌐 Deploy lên GitHub Pages (MIỄN PHÍ)

### Bước 1: Tạo Repository trên GitHub

1. Đăng nhập vào GitHub
2. Click nút **New** để tạo repository mới
3. Đặt tên repo (ví dụ: `mln131-timeline`)
4. Chọn **Public** (bắt buộc để dùng GitHub Pages miễn phí)
5. Click **Create repository**

### Bước 2: Push code lên GitHub

```bash
# Di chuyển vào thư mục project
cd Product_MLN131

# Khởi tạo Git (nếu chưa có)
git init

# Thêm tất cả file
git add .

# Commit
git commit -m "Initial commit - MLN131 Timeline"

# Thêm remote repository
git remote add origin https://github.com/YOUR_USERNAME/mln131-timeline.git

# Push lên GitHub
git branch -M main
git push -u origin main
```

### Bước 3: Kích hoạt GitHub Pages

1. Vào repository trên GitHub
2. Click **Settings** > **Pages** (menu bên trái)
3. Trong phần **Source**, chọn:
   - Branch: `main`
   - Folder: `/root`
4. Click **Save**
5. Đợi 1-2 phút, website sẽ có URL: `https://YOUR_USERNAME.github.io/mln131-timeline`

## 🎨 Tùy chỉnh

### Thay đổi màu sắc chủ đạo

Mở file `assets/css/style.css` và chỉnh sửa CSS variables:

```css
:root {
  --primary-red: #c41e3a; /* Màu đỏ chính */
  --dark-red: #8b0000; /* Màu đỏ đậm */
  --gold: #ffd700; /* Màu vàng */
}
```

### Thêm sự kiện mới

Mở file `assets/js/data.js` và thêm object mới vào mảng `historicalEvents`:

```javascript
{
    id: 51,
    month: 1,                     // Tháng (1-12)
    day: 15,                      // Ngày
    year: 2024,                   // Năm
    title: "Tên sự kiện",
    description: "Mô tả chi tiết...",
    image: "URL_hình_ảnh",        // URL hình (có thể dùng Unsplash)
    tags: ["Tag1", "Tag2"]        // Các thẻ phân loại
}
```

## 📸 Nguồn hình ảnh

Website sử dụng hình ảnh từ [Unsplash](https://unsplash.com) - thư viện ảnh miễn phí chất lượng cao.

Để thay đổi hình ảnh:

1. Tìm ảnh phù hợp trên Unsplash
2. Copy URL của ảnh (dạng: `https://images.unsplash.com/photo-...`)
3. Paste vào thuộc tính `image` trong file `data.js`

## 🔧 Xử lý lỗi thường gặp

### Lỗi: Không hiển thị dữ liệu

- Kiểm tra file `data.js` đã được load đúng chưa
- Mở Console (F12) để xem lỗi JavaScript
- Đảm bảo cú pháp JSON trong mảng `historicalEvents` đúng

### Lỗi: CSS không áp dụng

- Kiểm tra đường dẫn file CSS trong `index.html`
- Clear cache trình duyệt (Ctrl + F5)
- Kiểm tra file `style.css` có tồn tại không

### Lỗi: Biểu đồ không hiển thị

- Kiểm tra CDN Chart.js đã load chưa
- Mở Console xem có lỗi JavaScript không
- Đảm bảo canvas element có id đúng

## 📱 Responsive Design

Website tự động điều chỉnh giao diện cho:

- 📱 Mobile (< 768px)
- 📱 Tablet (768px - 1024px)
- 💻 Desktop (> 1024px)

## ⌨️ Phím tắt

- `T` - Cuộn đến Timeline
- `H` - Về trang chủ
- `ESC` - Xóa bộ lọc tháng

## 🎯 Mục đích học tập

Project này được tạo ra nhằm:

1. Cung cấp cái nhìn trực quan về các sự kiện lịch sử
2. Giúp sinh viên dễ dàng ghi nhớ các mốc thời gian quan trọng
3. Thực hành kỹ năng thiết kế và lập trình web
4. Tạo sản phẩm sáng tạo cho môn học MLN131

## 📄 License

Dự án này được tạo ra cho mục đích học tập và giáo dục.

## 👨‍💻 Tác giả

Sinh viên FPT University - Kỳ 9 năm 2025

## 🤝 Đóng góp

Nếu bạn muốn đóng góp thêm sự kiện lịch sử hoặc cải thiện giao diện:

1. Fork repository
2. Tạo branch mới (`git checkout -b feature/new-event`)
3. Commit thay đổi (`git commit -m 'Add new event'`)
4. Push lên branch (`git push origin feature/new-event`)
5. Tạo Pull Request

## 📞 Liên hệ

Nếu có thắc mắc hoặc góp ý, vui lòng liên hệ qua GitHub Issues.

---

**Made with ❤️ for MLN131 - Scientific Socialism**
