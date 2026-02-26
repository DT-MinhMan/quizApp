#  ReactJS Quiz App
 Đây là một project cá nhân được xây dựng với mục đích học tập. Ứng dụng này giúp tôi thực hành, củng cố kiến thức và cải thiện các kỹ năng lập trình với **ReactJS**.

## 📖 Giới thiệu
Quiz App là một ứng dụng trắc nghiệm đơn giản được xây dựng bằng ReactJS và Vite. Ứng dụng cho phép người dùng trả lời lần lượt các câu hỏi trắc nghiệm và xem kết quả tổng hợp sau khi hoàn thành. 

Qua project này, tôi tập trung vào việc áp dụng các kiến thức cốt lõi của React như:
* Quản lý State (trạng thái ứng dụng) bằng các React Hooks (ví dụ: `useState`).
* Giao tiếp giữa các component (truyền props).
* Render giao diện có điều kiện (Conditional Rendering).
* Cấu trúc thư mục và tổ chức các component sao cho dễ quản lý.

## ✨ Tính năng nổi bật
* Hiển thị từng câu hỏi độc lập.
* Ghi nhận câu trả lời của người dùng.
* Chuyển đổi linh hoạt giữa giao diện Trắc nghiệm (`Quiz.jsx`) và giao diện Kết quả (`Result.jsx`).
* Tính toán và hiển thị điểm số cuối cùng.

## 🛠️ Công nghệ sử dụng
* **Frontend:** ReactJS
* **Build Tool:** Vite 
* **Linter:** ESLint
* **Ngôn ngữ:** JavaScript (JSX) & CSS tiêu chuẩn

## 📂 Cấu trúc dự án cơ bản
```text
quizApp/
├── src/
│   ├── component/
│   │   ├── Quiz.jsx    # Xử lý logic hiển thị câu hỏi và đáp án
│   │   └── Result.jsx  # Hiển thị điểm số và kết quả cuối cùng
│   ├── App.jsx         # Component gốc chứa cấu trúc ứng dụng
│   ├── main.jsx        # Entry point của React
│   └── index.css       # File style chung
├── package.json
└── vite.config.js
```

## 🚀 Cài đặt và chạy
```bash
git clone https://github.com/DT-MinhMan/quizAppcd quizApp
cd quizApp
npm install
npm run dev
```
Ứng dụng sẽ chạy tại địa chỉ http://localhost:5173
