const spinnerArr = ['|', '/', '-', '\\', '|', '/', '-', '\\', '|']

const spinner = () => {
  for (let i = 0; i < spinnerArr.length; i++) {
    setTimeout(() => process.stdout.write(spinnerArr[i] + '\r   '), i * 200 + 100);
  }
}

spinner();