class UserMailer < ActionMailer::Base
  default from: 'notifications@example.com'
 
  def contact_mail(receiver,mail_subject,mail_body)
    @body = mail_body
    mail(to: receiver, subject: mail_subject, body: mail_body)
  end
end
