export const paginate = followers => {
  const itemsPerPage = 10;
  const page = Math.ceil(followers.length / itemsPerPage);
  const newArr = Array.from({ length: page }, (_, index) => {
    const start = index * itemsPerPage;
    return followers.slice(start, start + itemsPerPage);
  });
  return newArr;
};
