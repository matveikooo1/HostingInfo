document.addEventListener('DOMContentLoaded', () => {
    
    // БУРГЕР-МЕНЮ 
    const burger = document.getElementById('burger');
    const nav = document.getElementById('nav');

    if (burger && nav) {
        burger.addEventListener('click', () => {
            // Переключаем класс активности
            nav.classList.toggle('header__nav--active');
            
            // Анимация линий бургера (превращение в крестик)
            burger.classList.toggle('header__burger--active');
        });
    }

    //  скрытие шапки при покрутке
    const header = document.getElementById('header');
    let lastScrollTop = 0;

    window.addEventListener('scroll', () => {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        // Если прокручиваем вниз и проскроллили больше 50px
        if (scrollTop > lastScrollTop && scrollTop > 50) {
            header.classList.add('header--hidden');
        } else {
            // Если прокручиваем вверх - показываем шапку
            header.classList.remove('header--hidden');
        }
        
        // Запоминаем текущую позицию (защита от отрицательных значений)
        lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
    });
});