function House(bedrooms, bathrooms, numSqft){
  this.bedrooms = bedrooms;
  this.bathrooms = bathrooms;
  this.numSqft = numSqft;
}

let myDreamHOUSE = new House(4, 3, 2000);

myDreamHOUSE instanceof House; 