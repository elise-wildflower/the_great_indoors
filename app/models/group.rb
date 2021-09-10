class Group < ApplicationRecord
    has_many :items, dependent: :destroy
end
