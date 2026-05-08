document.addEventListener('DOMContentLoaded', function() {
      const toggleBtn = document.getElementById('toggle-participants');
      const toggleText = document.getElementById('toggle-text');
      const wrapper = document.getElementById('participants-wrapper');
      const overlay = document.getElementById('participants-overlay');
      const container = document.getElementById('participants-container');
      let isExpanded = false;

      function calculateHeights() {
        if (isExpanded) {
          wrapper.style.maxHeight = wrapper.scrollHeight + 'px';
        } else {
          const cards = container.children;
          if (cards.length > 0) {
            const cardHeight = cards[0].offsetHeight;
            const gap = parseInt(window.getComputedStyle(container).gap) || 24;
            // 1 row + gap + half of the next row
            wrapper.style.maxHeight = (cardHeight * 1.5 + gap) + 'px';
          }
        }
      }

      // Allow DOM to paint before initial calculation
      setTimeout(calculateHeights, 50);

      let resizeTimer = null;
      window.addEventListener('resize', () => {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(() => {
          if (isExpanded) {
            wrapper.style.maxHeight = 'none';
            void wrapper.offsetHeight; 
            wrapper.style.maxHeight = wrapper.scrollHeight + 'px';
          } else {
            calculateHeights();
          }
        }, 120);
      });

      toggleBtn.addEventListener('click', function() {
        isExpanded = !isExpanded;
        if (isExpanded) {
          wrapper.style.maxHeight = wrapper.scrollHeight + 'px';
          overlay.style.opacity = '0';
          toggleText.textContent = 'Pokaż mniej uczestników';
          toggleBtn.querySelector('.material-symbols-outlined').textContent = 'expand_less';
          
          setTimeout(() => {
            if (isExpanded) wrapper.style.maxHeight = 'none';
          }, 700);
        } else {
          wrapper.style.maxHeight = wrapper.scrollHeight + 'px';
          // Force layout reflow before continuing
          void wrapper.offsetHeight;
          
          calculateHeights();
          overlay.style.opacity = '1';
          toggleText.textContent = 'Pokaż więcej uczestników';
          toggleBtn.querySelector('.material-symbols-outlined').textContent = 'expand_more';
        }
      });
    });