

### Main Features
- WordPress Admin Dashboard
- User management: Create / Edit / Delete users
- User roles and permissions
- Posts and Pages management
- Media management
- Comments management
- Profile and Settings
- Practice pages for automation testing

### Testing Notes
- Verify login/logout and unauthorized access.
- Validate required fields and duplicate data.
- Verify user roles and permissions.
- Check confirmation before destructive actions.
- Some actions require hover before the button becomes available.
- Use unique test data when creating users.
- Avoid hard-coded waits in automation.
- Verify data after Create/Edit/Delete operations.

### Performance Notes
- Dashboard may take longer because multiple widgets/resources are loaded.
- Editor pages may be heavier because of JavaScript-based components.
- Media upload time depends on file size and network.
- First page load may be slower because resources are not cached.
- Dev environment response time may fluctuate.