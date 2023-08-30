
async function t(){
    var start = (new Date()).getTime();
    while ((new Date()).getTime() - start < 5000) {
        // 使用  continue 实现；
        continue; 
    }
    console.log(9999);
}
// t();

const asyncFunction = () => new Promise(resolve => setTimeout(() => {
    console.log('Hello from async function');
    resolve();
 }, 1000));
asyncFunction();
console.log(99);
