var btn = document.getElementById('btn');
btn.addEventListener('click', function(event){
    event.preventDefault();
    var letter = document.getElementById('letter').value;
    document.getElementById('bun').textContent = `${letter}`;
})
letter.addEventListener('change', function(event){
    event.preventDefault();
    var letter = document.getElementById('letter').value;
    document.getElementById('bun').textContent = `${letter}`;
})