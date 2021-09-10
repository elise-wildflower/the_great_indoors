class Api::ItemsController < ApplicationController
  before_action :set_group
  before_action :set_item, only: [:show, :update, :destroy]


  def index
    render json: {group: @group, items:@group.items}
  end

  def show
    render json: @item
  end

  def create
    @item = @group.items.new(item_params)
    if (@item.save)
      render json: @item
    else
      render json: @item.errors, status: 422
    end
  end
  
  def update
    if (@item.update(item_params))
      render json: @item
    else
      render json: @item.errors, status: 422
    end
  end

  def destroy
    render json: @item.destroy
  end

  private
  def set_group
    @group = Group.find(params[:group_id])
  end

  def set_item
    @item = @group.items.find(params[:id])
  end

  def item_params
      params.require(:item).permit(:name, :description, :price)
  end

end
