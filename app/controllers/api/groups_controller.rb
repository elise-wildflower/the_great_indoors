class Api::GroupsController < ApplicationController
    before_action :set_group, only: [:show, :update, :destroy]

    def index
    end

    private
    def set_group
        @group = Group.find(params[:id])
    end

    def group_params
        params.require(:group).permit(:name, :description)
end
