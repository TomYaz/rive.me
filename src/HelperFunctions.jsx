
export function toggleTheme() {
    const theme = localStorage.getItem('theme');
    if (theme == (null || 'light')) {
        localStorage.setItem('theme', 'dark')
        document.documentElement.setAttribute("data-theme", 'dark');
        location.reload();
    } else {
        localStorage.setItem('theme', 'light')
        document.documentElement.setAttribute("data-theme", 'light');
        location.reload();
    }
}
