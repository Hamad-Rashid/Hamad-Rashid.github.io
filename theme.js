<script>
        document.addEventListener('DOMContentLoaded', () => {
            const toggleBtn = document.getElementById('themeToggle');
            const currentTheme = localStorage.getItem('theme');
        
            if (currentTheme === 'light') {
                document.documentElement.setAttribute('data-theme', 'light');
                toggleBtn.textContent = '☀️ Light';
            }
        
            toggleBtn.addEventListener('click', () => {
                const isLight = document.documentElement.getAttribute('data-theme') === 'light';
        
                if (isLight) {
                    document.documentElement.removeAttribute('data-theme');
                    localStorage.setItem('theme', 'dark');
                    toggleBtn.textContent = '🌙 Dark';
                } else {
                    document.documentElement.setAttribute('data-theme', 'light');
                    localStorage.setItem('theme', 'light');
                    toggleBtn.textContent = '☀️ Light';
                }
            });
        });
    </script>
