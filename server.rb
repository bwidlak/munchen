require 'sinatra'
require 'haml'

configure :production do
  require 'newrelic_rpm'
end

get '/' do
  haml :index
end