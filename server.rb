require 'sinatra'
require 'haml'
require 'i18n'

configure :production do
  require 'newrelic_rpm'
end

get '/' do
	I18n.locale = params[:locale]
	haml :index
end

helpers do
	def t(*args)
		I18n.t(*args)
	end
end