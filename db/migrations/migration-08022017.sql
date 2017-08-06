-- \c global_educational_data

CREATE TABLE IF NOT EXISTS globals (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255),
  cost BIGINT,
  category VARCHAR(255),
  description TEXT,
  deadline VARCHAR(255)
);
