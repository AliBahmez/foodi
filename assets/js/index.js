let spans = document.getElementsByName('select');
let box = document.getElementsByClassName('standout-part2')[0];

function move(index){
    let sp = spans[index];
    box.style.transform = `translateX(-${index * 25.4}%)`;
       
}