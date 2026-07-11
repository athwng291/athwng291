# VNU Digital Portfolio: Nhập môn Công nghệ số và Ứng dụng Trí tuệ nhân tạo

Hồ sơ năng lực học tập số (Digital Portfolio) hoàn chỉnh dưới dạng trang web tĩnh giới thiệu về hành trình học tập, 6 bài tập dự án lớn đạt chuẩn điểm Xuất sắc (8.1-10 điểm) của Đại học Quốc gia Hà Nội (ĐHQGHN).

Trực quan hóa lộ trình, kỹ năng số thông qua sơ đồ Radar và trò chơi mô phỏng Prompt Engineering.

---

## 🌟 Tính năng nổi bật (Features)

- **Thiết kế Độc bản (Aesthetic & Glassmorphism)**: Theme tối cyberpunk với viền HSL chuyển động, lớp kính phủ mịn màng (`backdrop-filter`) và hiệu ứng mạng lưới thần kinh canvas.
- **Hồ sơ Số hóa (Digital Passport)**: Trình bày thông tin sinh viên VNU, lớp học QH2025.F1 ngành Sư phạm tiếng Trung Quốc, huy hiệu đạt được và quote truyền cảm hứng.
- **Bản đồ Kỹ năng Radar**: Tích hợp biểu đồ Chart.js trực quan phản ánh 6 nhóm năng lực cốt lõi.
- **Báo cáo 6 Bài tập Chi tiết**: Tích hợp các tab thông tin (Tổng quan, Quy trình thực hiện, Tóm tắt học thuật từ 6 file PDF, Trình xem PDF trực tiếp).
- **Prompt Lab Sandbox**: Trò chơi kéo thả mô phỏng cấu trúc Prompt 4 thành phần (Vai trò, Tác vụ, Định dạng, Ràng buộc) và biên dịch kết quả AI theo thời gian thực.
- **Lo-fi Audio Deck**: Web Audio API tích hợp giúp phát hợp âm ambient thư giãn, không cần tệp âm thanh ngoài.
- **Tối ưu hóa SEO & Responsive**: Đạt 100% độ tương thích trên Desktop, Tablet và Mobile. Có nút chuyển đổi Light/Dark mode.

---

## 🛠️ Công nghệ sử dụng (Tech Stack)

- **Ngôn ngữ chính**: HTML5, CSS3, JavaScript ES6
- **Thư viện CDN**:
  - [Tailwind CSS v3](https://tailwindcss.com/) - Hỗ trợ thiết kế responsive nhanh.
  - [FontAwesome v6](https://fontawesome.com/) - Bộ biểu tượng đa dạng.
  - [Chart.js](https://www.chartjs.org/) - Biểu đồ Radar tương tác.
  - [AOS (Animate On Scroll)](https://michalsnik.github.io/aos/) - Hiệu ứng cuộn mượt mà.
  - [Canvas Confetti](https://github.com/catdad/canvas-confetti) - Hiệu ứng pháo hoa ăn mừng khi xem PDF hoặc đạt huy hiệu.
- **Độc lập hoàn toàn**: Không sử dụng NodeJS, database, hay bất cứ framework biên dịch nào; đảm bảo chạy trực tiếp 100% trên GitHub Pages.

---

## 📂 Cấu trúc thư mục (Directory Structure)

```text
/
├── index.html            # Trang chính Landing Page của Portfolio
├── README.md             # Tài liệu hướng dẫn sử dụng dự án
├── baitap/               # Thư mục chứa 6 file PDF bài tập lớn
│   ├── bai1.pdf          # Thao tác cơ bản với tệp tin và thư mục
│   ├── bai2.pdf          # Tìm kiếm và đánh giá thông tin học thuật
│   ├── bai3.pdf          # Prompt Engineering trong học tập
│   ├── bai4.pdf          # Công cụ hợp tác trực tuyến (Nhóm 11)
│   ├── bai5.pdf          # AI tạo sinh sáng tạo nội dung số
│   └── Bai6.pdf          # AI có trách nhiệm trong học tập & nghiên cứu
├── img/                  # Thư mục lưu trữ hình ảnh
│   └── avt.jpg           # Ảnh đại diện của sinh viên Đặng Anh Thư
└── assets/               # Thư mục chứa tài nguyên phát triển
    ├── css/
    │   └── style.css     # Định nghĩa thiết kế, biến, keyframe và scrollbar
    └── js/
        └── main.js       # Logic điều khiển, canvas, synthesizer, game và modal
```

---

## 🚀 Hướng dẫn chạy và Thử nghiệm (Local Setup)

1. Tải toàn bộ mã nguồn của dự án về máy tính.
2. Đảm bảo cấu trúc thư mục chứa đầy đủ các file PDF trong thư mục `/baitap/` và ảnh đại diện trong `/img/avt.jpg`.
3. Nhấp đúp chuột vào file `index.html` để mở trực tiếp trên trình duyệt Web (Chrome, Edge, Firefox, Safari).
   - *Lưu ý*: Đối với tính năng Xem trước PDF qua iframe, một số trình duyệt có cơ chế bảo mật (CORS) chặn load file cục bộ từ giao thức `file://`. Để kiểm tra đầy đủ, nên sử dụng extension **Live Server** trên VS Code hoặc chạy lệnh terminal:
     ```bash
     # Sử dụng python có sẵn
     python -m http.server 8000
     ```
     Sau đó truy cập địa chỉ `http://localhost:8000` trên trình duyệt.

---

## 🌐 Hướng dẫn Deploy lên GitHub Pages

Để xuất bản Portfolio trực tiếp lên Internet miễn phí thông qua GitHub Pages, hãy thực hiện các bước sau:

1. Tạo một Repository mới trên GitHub (ví dụ đặt tên là `portfolio-ai-vnu`).
2. Khởi tạo Git trong thư mục dự án cục bộ và commit toàn bộ tệp:
   ```bash
   git init
   git add .
   git commit -m "Initialize VNU Digital Portfolio"
   ```
3. Đẩy mã nguồn lên GitHub:
   ```bash
   git remote add origin https://github.com/tài-khoản-của-bạn/portfolio-ai-vnu.git
   git branch -M main
   git push -u origin main
   ```
4. Trên giao diện GitHub Web của Repository, truy cập vào mục **Settings** -> **Pages** (ở cột bên trái).
5. Tại mục **Build and deployment**:
   - Chọn Source: **Deploy from a branch**.
   - Chọn Branch: **main** và thư mục **/ (root)**.
   - Nhấn **Save**.
6. Chờ khoảng 1-2 phút, GitHub sẽ cấp cho bạn một đường dẫn URL dạng: `https://tài-khoản-của-bạn.github.io/portfolio-ai-vnu/`. Truy cập vào link này để kiểm tra sản phẩm hoạt động trực tiếp.

---

## 📜 Giấy phép (License)

Dự án này được cấp phép theo tiêu chuẩn **MIT License** - Sinh viên Đại học Quốc gia Hà Nội được tự do tham khảo học tập và sử dụng làm minh chứng học tập liêm chính.
