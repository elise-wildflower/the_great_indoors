class Group < ApplicationRecord
    has_many :items, dependent: :destroy
    validates :name, :description, presence: true
end
