\c global_educational_data

CREATE TABLE IF NOT EXISTS globals (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255),
  cost BIGINT,
  category VARCHAR(255),
  description TEXT,
  completeDate VARCHAR(255),
);

CREATE TABLE IF NOT EXISTS events (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255),
  day VARCHAR(255),
  category VARCHAR(255),
  description TEXT,
);
