// Code your solution in this file!
function distanceFromHqInBlocks(street) {
  return Math.abs(street - 42);
}

function distanceFromHqInFeet(street) {
  return distanceFromHqInBlocks(street) * 264; // 1 block = 264 feet
}

function distanceTravelledInFeet(start, destination) {
  return Math.abs(start - destination) * 264; // Distance in blocks * feet per block
}

function calculatesFarePrice(start, destination) {
  const distance = distanceTravelledInFeet(start, destination);
  if (distance <= 400) {
    return 0; // Free sample
  } else if (distance > 400 && distance <= 2000) {
    return (distance - 400) * 0.02; // 2 cents per foot after 400 feet
  } else if (distance > 2000 && distance <= 2500) {
    return 25; // Flat $25 for > 2000 feet
  } else {
    return 'cannot travel that far'; // No rides > 2500 feet
  }
}