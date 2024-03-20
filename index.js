// Code your solution in this file!
function distanceFromHqInBlocks(pickupLocation) {
  const hqLocation = 42;
  const distance = Math.abs(pickupLocation - hqLocation);
  return distance;
}
function distanceFromHqInFeet(pickupLocation) {
  const feetPerBlock = 264;
  const blocks = distanceFromHqInBlocks(pickupLocation);
  const distanceInFeet = blocks * feetPerBlock;

  return distanceInFeet;
}
function distanceTravelledInFeet(startBlock, destinationBlock) {
  const feetPerBlock = 264;
  const distanceInBlocks = Math.abs(startBlock - destinationBlock);

  return distanceInBlocks * feetPerBlock;
}
function calculatesFarePrice(start, destination) {
  const distanceInFeet = distanceTravelledInFeet(start, destination);

  if (distanceInFeet <= 400) {
    return 0;
  } else if (distanceInFeet > 400 && distanceInFeet <= 2000) {
    return (distanceInFeet - 400) * 0.02;
  } else if (distanceInFeet > 2000 && distanceInFeet <= 2500) {
    return 25;
  } else {
    return "cannot travel that far";
  }
}
