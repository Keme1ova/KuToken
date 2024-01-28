const cards = document.querySelectorAll('.card');

cards.forEach(card => {
    card.addEventListener('mouseover', () => {
        card.querySelector('.card_inner').classList.add('lifted');
        
        const svgArrow = card.querySelector('.card_top_svg');
        svgArrow.style.transform = 'rotate(45deg)';
        backgroundImage = 'url("imgs/earth-bg.jpg")'
        card.style.backgroundImage = backgroundImage;
        backgroundImage.style.transition = 'opacity 60s ease-in-out';
        backgroundImage.style.opacity = '1';
    });
    
    card.addEventListener('mouseout', () => {
        card.querySelector('.card_inner').classList.remove('lifted');
        
        const svgArrow = card.querySelector('.card_top_svg');
        svgArrow.style.transform = 'rotate(0)';
        card.style.backgroundImage = 'none';
    });
});
  
    