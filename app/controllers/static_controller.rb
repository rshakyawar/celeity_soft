class StaticController < ApplicationController
  def home
  end

  def contact_us
  end

  def about_us
  end
  
  def sendmail
    UserMailer.contact_mail(params[:receiver],params[:subject],params[:body]).deliver
    redirect_to root_path
  end
end


