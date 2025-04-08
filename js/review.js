document.addEventListener('DOMContentLoaded', function () {
    const reviews = document.querySelectorAll('.reviewItem');
    const totalReviews = reviews.length;
    const reviewsPerPage = 6;
    let currentIndex = 0;

    // Функция для отображения отзывов
    function showReviews() {
        // Скрыть все отзывы
        reviews.forEach(review => review.classList.remove('show'));

        // Показать следующие 6 отзывов
        for (let i = 0; i < reviewsPerPage; i++) {
            const index = (currentIndex + i) % totalReviews; 

            // Условие, чтобы не показывать больше доступных отзывов
            if (reviews[index]) {
                reviews[index].classList.add('show');
            }
        }

        // Увеличиваем индекс на 6 для следующей группы, обеспечиваем зацикливание
        currentIndex = (currentIndex + reviewsPerPage) % totalReviews; 
    }

    // Показать первые 6 отзывов при загрузке
    showReviews();

    // Добавляем обработчик события для кнопки "Следующий"
    document.getElementById('next').addEventListener('click', showReviews);
});
