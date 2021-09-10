class Api::GroupsController < ApplicationController
    before_action :set_group, only: [:show, :update, :destroy]

    def index
        render json: Group.all
    end

    def show
        render json: @group
    end

    def create
        @group = Group.new(group_params)
        if(@group.save)
            render json: @group
        else
            render json: @group.errors, status: 422
        end
    end

    def update
        if(@group.update(group_params))
            render json: @group
        else
            render json: @group.errors, status: 422
        end
    end

    def destroy
        render json: @group.destroy
    end

    private
    def set_group
        @group = Group.find(params[:id])
    end

    def group_params
        params.require(:group).permit(:name, :description)
    end
end
