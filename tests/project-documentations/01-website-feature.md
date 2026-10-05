
# Các tính năng chính

**Dashboard**: trang tổng quan sau khi Admin đăng nhập.
**Users**: tạo, sửa, xóa và quản lý user; kiểm tra role/permission. WordPress hỗ trợ các role như Administrator, Editor, Author, Contributor và Subscriber.
**Posts/Pages**: tạo, chỉnh sửa, publish và quản lý nội dung.
**Comment**: xem và quản lý comment.
**Media**: upload và quản lý hình ảnh/file.
**Profile**: cập nhật thông tin tài khoản Admin.
**Settings**: cấu hình các thông tin chung của website.



**Một số lưu ý khi test**
Login: kiểm tra username/password sai, bỏ trống field, logout rồi truy cập trực tiếp /wp-admin/.
User management: khi tạo user cần kiểm tra required fields, email hợp lệ/trùng email và Role.
Delete User: nên kiểm tra confirmation và dữ liệu/content của user sau khi xóa.
Permission: rất quan trọng — Admin có quyền quản lý user, trong khi các role thấp hơn có quyền hạn hạn chế.
Dynamic element: một số button/action chỉ xuất hiện khi hover, nên automation dễ gặp lỗi nếu click trực tiếp.
Table/list: cần kiểm tra pagination, search, sort và việc dữ liệu có thực sự được cập nhật sau Create/Edit/Delete.
State của dữ liệu: khi chạy automation nhiều lần, dữ liệu test cũ có thể tồn tại → nên dùng data unique


**Những phần có khả năng chậm và nguyên nhân cần kiểm tra**
Login → Dashboard: có thể chậm do server xử lý authentication + load nhiều resource của WordPress Admin.
Users → Add/Edit User: thao tác save có thể mất thời gian do request backend + database.
Posts/Pages Editor: thường nặng hơn các trang đơn giản vì phải load nhiều JavaScript/CSS/editor component.
Media upload: phụ thuộc kích thước file và tốc độ upload/network.
Dashboard: có thể load nhiều widget/plugin nên cần phân biệt server response chậm với frontend rendering chậm.
First load: lần đầu mở trang có thể chậm hơn do browser phải tải JS/CSS/font/image; các lần sau có thể nhanh hơn nhờ cache.
Environment Dev: vì đây là Dev environment, response time có thể không ổn định và không nên kết luận ngay đó là performance bug nếu chưa có baseline.