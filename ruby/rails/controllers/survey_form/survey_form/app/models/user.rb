class User < ApplicationRecord
  VALID_LOCATIONS = %w(IL CA NY VA)
  VALID_LANGUAGES = %w(Ruby JS Python)
  validates_inclusion_of :location, :in => VALID_LOCATIONS
  validates_inclusion_of :language, :in => VALID_LANGUAGES
end
