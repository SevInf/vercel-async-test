function fibonacci(n) {
    return n < 1 ? 0
         : n <= 2 ? 1
         : fibonacci(n - 1) + fibonacci(n - 2)
 }
 
 function measure() {
    const start = performance.now();
    fibonacci(40)
    return performance.now() - start;
 }
measure() 
const outside = measure()

export default async function handler(req, res) {
    const inside = measure()
    res.status(200).send({ outside, inside })
};