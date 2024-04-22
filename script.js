document.addEventListener("DOMContentLoaded", function() {
    const changingWords = ["de Éxito", "Innovador", "Seguro", "Eficiente", "Creativo"];
    const changingWord = document.getElementById("title-animated");
    let currentIndex = 0;
    let currentInterval;
  
    function typeWord(word) {
      let i = 0;
      const wordLength = word.length;
      clearInterval(currentInterval); 
      currentInterval = setInterval(function() {
        changingWord.textContent = word.substring(0, i);
        i++;
        if (i > wordLength) {
          clearInterval(currentInterval);
          setTimeout(function() {
            deleteWord(word);
          }, 1000); 
        }
      }, 100);
    }
  
    function deleteWord(word) {
      let i = word.length;
      clearInterval(currentInterval); 
      currentInterval = setInterval(function() {
        changingWord.textContent = word.substring(0, i);
        i--;
        if (i < 0) {
          clearInterval(currentInterval);
          currentIndex = (currentIndex + 1) % changingWords.length;
          setTimeout(function() {
            typeWord(changingWords[currentIndex]);
          }, 1000); 
        }
      }, 100); 
    }
  

    setTimeout(function() {
      typeWord(changingWords[currentIndex]);
    }, 100); 
  });