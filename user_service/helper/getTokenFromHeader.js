export const getTokenFromHeaders = (req) => {
  const token = req?.headers?.authorization?.split(" ")[1];
  return token;
};
