const arr = ['\r|   ','\r/   ' , '\r-   ','\r\\   ' , '\r|   ','\r/   ' , '\r-   ','\r\\   ' , '\r|   '];
let timer = 0;

for (const item of arr) {
  if (timer <= 1700) {
    setTimeout(()=>{
      process.stdout.write(item);
    }, timer);
    timer += 200;
  }
}
setTimeout(()=>{
  process.stdout.write("\n");
},timer);
