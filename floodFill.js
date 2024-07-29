var floodFill = function (image, sr, sc, color) {
  const startColor = image[sr][sc];
  if (startColor === color) return image; /// If the start color is our target color it will cause an infinite loop;
  const stack = [[sr, sc]];

  while (stack.length) {
    const [row, col] = stack.pop();
    image[row][col] = color;

    if (row + 1 < image.length && image[row + 1][col] === startColor)
      stack.push([row + 1, col]);
    if (row - 1 >= 0 && image[row - 1][col] === startColor)
      stack.push([row - 1, col]);
    if (col + 1 < image[row].length && image[row][col + 1] === startColor)
      stack.push([row, col + 1]);
    if (col - 1 >= 0 && image[row][col - 1] === startColor)
      stack.push([row, col - 1]);
  }
  return image;
};
