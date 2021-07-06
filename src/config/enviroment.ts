export const mongodb = {
  uri: process.env.MONGODB_URI || 'mongodb://localhost',
};

export const server = {
  port: process.env.SERVICE_PORT || '3000',
};
