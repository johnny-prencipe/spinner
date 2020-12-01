const spinnerArr = ['|', '/', '-', '\\', '|', '/', '-', '\\', '|']

const spinner = () => {
  for (let i in spinnerArr) {
    setTimeout(() => process.stdout.write(`\r${spinnerArr[i]}   `), i * 200 + 100);
  }
}
setTimeout(() => console.log(), spinnerArr.length * 200 + 100)
spinner();