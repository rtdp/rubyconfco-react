class HomeController < ApplicationController

  def index
    #render component: 'CityContainer', props: { cities: get_cities }, tag: 'div#myContainer'
    @cities = get_cities
  end

  private

  def get_cities
    [
      { name: 'Bogota', tagline: 'Capital city' },
      { name: 'Medellin', tagline: 'Current city' }
    ]
  end

end
