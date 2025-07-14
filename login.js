function login(username, password) {
    // Simple validation
    if (!username || !password) {
        return { success: false, message: 'Username and password are required.' };
    }

    // Dummy user data for demonstration
    const dummyUser = {
        username: 'testuser',
        password: 'testpass'
    };

    if (username === dummyUser.username && password === dummyUser.password) {
        return { success: true, message: 'Login successful.' };
    } else {
        return { success: false, message: 'Invalid credentials.' };
    }
}