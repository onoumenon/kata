function solution(N) {
  let binary = N.toString(2)
  let maxGap = 0
  const regex = /10*1/
  while (binary.match(regex)){
      const found = binary.match(regex)
     if (found[0].length - 2 > maxGap){
         maxGap = found[0].length - 2
     }
     binary = binary.replace(found, "1")
  }
 return maxGap
}