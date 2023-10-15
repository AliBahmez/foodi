let spans = document.getElementsByClassName('select');
let box = document.getElementsByClassName('standout-part2')[0];

function move(index){
    let sp = spans[index];
    box.style.transform = `translateX(-${index * 25}%)`;
    // reomveactive();
    // spans[index].className='color-button'
    // console.log(spans[index])

    // index == 0 ? spans[index ].classList.add('color-button') : spans[index - 1 ].classList.add('color-button');
}
// let active = document.getElementsByClassName('color-button');
// function reomveactive(){
// for(let i=0 ; i<2; i++)
// // for(let i of )
// {
// // active[i].className='';
// active[i].removeChild('color-button')
// // i.getElementsByTagName('button').className='';
// // i.document.getElementById('select').className='';
// }      
// }}