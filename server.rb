require 'sinatra'
require 'haml'

configure :production
	require 'newrelic_rpm'
end

get '/' do
  haml :index
end