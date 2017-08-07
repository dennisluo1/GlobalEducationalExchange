-- \c global_educational_data
--  This page is not neccessary now but later can be used as I continue to develop idea
CREATE TABLE IF NOT EXISTS country (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255),
  region VARCHAR(255),
  subregion VARCHAR(255),
  nativeLanguage VARCHAR(255),
  currencySymbol VARCHAR(255)
);
