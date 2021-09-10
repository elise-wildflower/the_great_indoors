class Api::ServicesController < ApplicationController

before_action :set_service, only: [:show, :update, :destroy]

  def index 
    render json: Service.all
  end

  def show 
    render json: @service
  end

  def create
    @service = Service.new(services_params)
    if(@service.save)
      render json: @service
    else
      render json: @service.errors.full_messages, status:422
    end
  end

  def update
    if(@service.update(services_params))
      render json: @service
    else
      render json: @service.errors.full_messages, status: 422
    end
  end
      
    
    def destroy
      render json: @service.destroy
    end

  private

  def services_params
    params.require(:service).permit(:title, :description, :company, :salary)
  end

  def set_service 
    @service = Service.find(params[:id])
  end

end
