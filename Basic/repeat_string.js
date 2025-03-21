function repeatString(str, num) {
  const resultt = " ";
  while (num > 0) {
    resultt += str;
    num--;
    
  }
  return resultt;
}
repeatString('abc', 9);