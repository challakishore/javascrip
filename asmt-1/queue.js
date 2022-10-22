let queue =[12,23,34,55];
let front,rear;
front =0;
rear = queue.length -1;
console.log("element removed:"+queue.shift());
front++;
queue.push(6);
rear++;
queue.forEach((Element) =>{
    document.write("<br>"+Element);
} )
console.log("front:"+front+"rear:"+rear);