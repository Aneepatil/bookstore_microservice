export const routeNotFound = (req, res, next) => {
    return res.status(404).send({ message: `The route you are looking for ${req.originalUrl} is not found` });
  };