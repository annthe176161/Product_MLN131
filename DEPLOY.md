# Product_MLN131

## Hướng dẫn nhanh Deploy lên GitHub Pages

### 1. Tạo Repository

- Đăng nhập GitHub
- Tạo repo mới (Public)
- Tên gợi ý: `mln131-timeline`

### 2. Push code

```bash
cd Product_MLN131
git init
git add .
git commit -m "MLN131 Timeline Project"
git remote add origin https://github.com/USERNAME/mln131-timeline.git
git push -u origin main
```

### 3. Kích hoạt Pages

Settings > Pages > Source: main branch > Save

### 4. Truy cập

`https://USERNAME.github.io/mln131-timeline`

---

## Các nền tảng deploy miễn phí khác

### Netlify (Khuyến nghị - Dễ nhất)

1. Vào https://netlify.com
2. Kéo thả thư mục `Product_MLN131` vào
3. Tự động deploy!

### Vercel

1. Vào https://vercel.com
2. Import từ GitHub
3. Deploy tự động

### Cloudflare Pages

1. Vào https://pages.cloudflare.com
2. Kết nối GitHub repo
3. Deploy

## So sánh nền tảng

| Platform         | Tốc độ     | Dễ sử dụng | Tính năng |
| ---------------- | ---------- | ---------- | --------- |
| **GitHub Pages** | ⭐⭐⭐     | ⭐⭐⭐⭐   | Cơ bản    |
| **Netlify**      | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | Nhiều     |
| **Vercel**       | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐   | Nhiều     |
| **Cloudflare**   | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐   | Nhiều     |

**Kết luận**: GitHub Pages là lựa chọn tốt nhất vì:

- ✅ Miễn phí 100%
- ✅ Dễ sử dụng nhất
- ✅ Không cần tài khoản thêm
- ✅ Phù hợp với website tĩnh
