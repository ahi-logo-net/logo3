letter.addEventListener('change', function(event){
    event.preventDefault();
    var letter = document.getElementById('letter').value;
    document.getElementById('bun').textContent = `${letter}`;
})