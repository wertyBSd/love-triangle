/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  let count = 0;
  let triangles = [];

  for(let i = 0; i < preferences.length; i ++){
    let triangle = [ preferences[i], preferences[[preferences[i] - 1]], preferences[preferences[preferences[i] - 1]- 1]];
    if(triangle[2]  === (i + 1)){
      if((triangles.map(x => x[0]).indexOf(triangle.sort()[0]) === -1 )
      && (triangles.map(x => x[1]).indexOf(triangle.sort()[1]) === -1 )
      && (triangles.map(x => x[2]).indexOf(triangle.sort()[2]) === -1 )
      && triangle[0] !== triangle[1]){
        triangles.push(triangle.sort());
        ++count;
      }
    }
  }
  return count;
};