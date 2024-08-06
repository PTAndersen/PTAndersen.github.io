document.addEventListener('DOMContentLoaded', function () {
    const toggleButton = document.getElementById('theme-toggle');
    const body = document.body;

    function setIcon() {
        if (body.classList.contains('light-theme')) {
            toggleButton.innerHTML = '<i class="fas fa-moon"></i>';
            toggleButton.className = 'btn btn-dark';
        } else {
            toggleButton.innerHTML = '<i class="fas fa-sun"></i>';
            toggleButton.className = 'btn btn-light';
        }
    }

    toggleButton.addEventListener('click', function () {
        body.classList.toggle('light-theme');
        setIcon();
    });

    setIcon();
});
