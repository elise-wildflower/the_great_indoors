class Service < ApplicationRecord
  validates :title, :description, :company, :salary, presence: true
end
