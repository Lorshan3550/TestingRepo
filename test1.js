function isPalindrome(word) {
    if (typeof word !== 'string') return false;
    const cleaned = word.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    return cleaned === cleaned.split('').reverse().join('');
}