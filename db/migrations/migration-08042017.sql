\c global_educational_data

CREATE TABLE IF NOT EXISTS country (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255),
  region VARCHAR(255),
  subregion VARCHAR(255),
  nativeLanguage VARCHAR(255),
  currencySymbol VARCHAR(255)
);
