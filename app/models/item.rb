class Item < ApplicationRecord
  belongs_to :group
  validates :name, :description, :price, presence: true
end
