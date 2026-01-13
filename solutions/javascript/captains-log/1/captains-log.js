// @ts-check

/**
 * Generates a random starship registry number.
 *
 * @returns {string} the generated registry number.
 */
export function randomShipRegistryNumber() {
 const num = Math.floor(Math.random() * 9000) + 1000; // 1000 → 9999
  return `NCC-${String(num).padStart(4, "0")}`;
  }

/**
 * Generates a random stardate.
 *
 * @returns {number} a stardate between 41000 (inclusive) and 42000 (exclusive).
 */
export function randomStardate() {
  //    const num = Math.floor(Math.random() * 9000) + 1000; // 1000 → 9999
  // return `NCC-${String(num).padStart(4, "0")}`;
   return (Math.random() * (41999.0 - 41000.0 + 1)) + 41000.0 ;
}

/**
 * Generates a random planet class.
 *
 * @returns {string} a one-letter planet class.
 */
export function randomPlanetClass() {
  
    const arr=[ 'D', 'H', 'J', 'K', 'L', 'M', 'N', 'R', 'T', 'Y'];

    return arr[Math.floor(Math.random() * (9 + 1)) + 0];
  
      
}
