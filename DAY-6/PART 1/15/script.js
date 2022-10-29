(()=> {
    let x = '',
        num = 1
    while (num <= 10) {
      x += num
      x += num%3 ? ' ' : '\n'
      num++
    }
    console.log(x)
  })()